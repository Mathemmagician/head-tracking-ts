import './facemesh.css'
import { bgAnimate } from './background';

// Our input frames will come from here.
const videoElement =
    document.getElementsByClassName('input_video')[0] as HTMLVideoElement;
const canvasElement =
    document.getElementsByClassName('output_canvas')[0] as HTMLCanvasElement;
const controlsElement =
    document.getElementsByClassName('control-panel')[0] as HTMLDivElement;
const canvasCtx = canvasElement.getContext('2d')!;

const controls = window;
const drawingUtils = window;
const mpFaceMesh = window;

const solutionOptions = {
  selfieMode: true,
  enableFaceGeometry: false,
  maxNumFaces: 1,
  refineLandmarks: false,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
};

// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const fpsControl = new controls.FPS();

videoElement.addEventListener("play", () => {
  canvasElement.width = videoElement.offsetWidth;
  canvasElement.height = videoElement.offsetHeight;
});

const spinner = document.querySelector('.loading')! as HTMLDivElement;
spinner.ontransitionend = () => {
  spinner.style.display = 'none';
};

function onResults(results) {
  // Hide the spinner.
  document.body.classList.add('loaded');

  // Update the frame rate.
  fpsControl.tick();

  // Draw the overlays.
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
  let faceCentroid = [0,0,0];
  let minx = 999;
  let maxx = -999;
  for (const landmarks of results.multiFaceLandmarks) {
    for (const landmark of landmarks) {
      faceCentroid[0] += landmark.x;
      faceCentroid[1] += landmark.y;
      faceCentroid[2] += landmark.z;
      minx = Math.min(minx, landmark.x);
      maxx = Math.max(maxx, landmark.x);
    }
    for (let i=0; i<3; i++){
      faceCentroid[i] /= landmarks.length;
    }

    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_TESSELATION.slice(1, 1000),
        {color: '#C0C0C070', lineWidth: 1});

    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_RIGHT_EYE,
        {color: '#FF3030'});
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_RIGHT_EYEBROW,
        {color: '#FF3030'});
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_LEFT_EYE,
        {color: '#30FF30'});
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_LEFT_EYEBROW,
        {color: '#30FF30'});
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_FACE_OVAL,
        {color: '#E0E0E0'});
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_LIPS, {color: '#E0E0E0'});
         if (solutionOptions.refineLandmarks) {
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_RIGHT_IRIS,
        {color: '#FF3030'});
    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_LEFT_IRIS,
        {color: '#30FF30'});
    }
  }
  bgAnimate(faceCentroid, Math.abs(maxx-minx));
  canvasCtx.restore();
}

const faceMesh = new FaceMesh({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  }
});
faceMesh.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
faceMesh.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({ image: videoElement }).catch(e => alert(e));
  },
  width: 1280,
  height: 720
});
camera.start();

new controls
    .ControlPanel(controlsElement, solutionOptions)
    .add([
      new controls.StaticText({title: 'MediaPipe Face Mesh'}),
      fpsControl,
      new controls.Toggle({title: 'Selfie Mode', field: 'selfieMode'}),
      new controls.SourcePicker({
        onFrame:
            async (input: controls.InputImage, size: controls.Rectangle) => {
              const aspect = size.height / size.width;
              let width: number, height: number;
              if (window.innerWidth > window.innerHeight) {
                height = window.innerHeight;
                width = height / aspect;
              } else {
                width = window.innerWidth;
                height = width * aspect;
              }
              canvasElement.width = width;
              canvasElement.height = height;
              await faceMesh.send({image: input});
            },
      }),
      new controls.Slider({
        title: 'Max Number of Faces',
        field: 'maxNumFaces',
        range: [1, 4],
        step: 1
      }),
      new controls.Toggle(
        {title: 'Refine Landmarks', field: 'refineLandmarks'}),
      new controls.Slider({
        title: 'Min Detection Confidence',
        field: 'minDetectionConfidence',
        range: [0, 1],
        step: 0.01
      }),
      new controls.Slider({
        title: 'Min Tracking Confidence',
        field: 'minTrackingConfidence',
        range: [0, 1],
        step: 0.01
      }),
    ])
    .on(x => {
      const options = x as mpFaceMesh.Options;
      videoElement.classList.toggle('selfie', options.selfieMode);
      faceMesh.setOptions(options);
    });
