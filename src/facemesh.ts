import './facemesh.css'
import '@mediapipe/control_utils/control_utils.css'
import * as controls from '@mediapipe/control_utils';
import * as drawingUtils from '@mediapipe/drawing_utils';
import * as mpFaceMesh from '@mediapipe/face_mesh';
import * as cameraUtils from '@mediapipe/camera_utils';
import { bgAnimate } from './background';

const config = {
  locateFile: (file: any) => {
    return `node_modules/@mediapipe/face_mesh/${file}`;
  }
};

const webcamePixelWidth = 1280;
const webcamePixelHeight = 720;

// Our input frames will come from here.
const videoElement =
    document.getElementsByClassName('input_video')[0] as HTMLVideoElement;
const canvasElement =
    document.getElementsByClassName('output_canvas')[0] as HTMLCanvasElement;
const controlsElement =
    document.getElementsByClassName('control-panel')[0] as HTMLDivElement;
const canvasCtx = canvasElement.getContext('2d')!;

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

// Optimization: Turn off animated spinner after its hiding animation is done.
const spinner = document.querySelector('.loading')! as HTMLDivElement;
spinner.ontransitionend = () => {
  spinner.style.display = 'none';
};

let counter = 1;

function onResults(results: mpFaceMesh.Results): void {
  // Hide the spinner.
  document.body.classList.add('loaded');

  // Update the frame rate.
  fpsControl.tick();

  // Draw the overlays.
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiFaceLandmarks.length > 0) {
    let faceCentroid = [0,0,0];

    const landmarks = results.multiFaceLandmarks[0];
    for (const landmark of landmarks) {
      faceCentroid[0] += landmark.x;
      faceCentroid[1] += landmark.y;
      faceCentroid[2] += landmark.z;
    }
    for (let i=0; i<3; i++){
      faceCentroid[i] /= landmarks.length;
    }

    if (counter === 0) {
      console.log(mpFaceMesh.FACEMESH_FACE_OVAL);
    }

    // drawingUtils.drawLandmarks(
    //   canvasCtx, landmarks.slice(125, 130+1), 
    //   {color: 'red', radius: 5,});
    counter += 0.1;
    // console.log('counter + ' + counter);

    // console.log(mpFaceMesh.FACEMESH_TESSELATION);

    drawingUtils.drawConnectors(
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_TESSELATION,
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
        canvasCtx, landmarks, mpFaceMesh.FACEMESH_LIPS, 
        {color: '#E0E0E0'});
    if (solutionOptions.refineLandmarks) {
      drawingUtils.drawConnectors(
          canvasCtx, landmarks, mpFaceMesh.FACEMESH_RIGHT_IRIS,
          {color: '#FF3030'});
      drawingUtils.drawConnectors(
          canvasCtx, landmarks, mpFaceMesh.FACEMESH_LEFT_IRIS,
          {color: '#30FF30'});
    }
    // }
    // RA
    // console.log(Math.round(faceCentroid[0] * 100)/100, Math.round(faceCentroid[1] * 100)/100);

    // const faceWidth = Math.hypot()

    const leftTemple = landmarks[226];  // Adjust these
    const rightTemple = landmarks[446];
    const headPixelWidthX = Math.abs(leftTemple.x - rightTemple.x) * webcamePixelWidth;
    const headPixelWidthY = Math.abs(leftTemple.y - rightTemple.y) * webcamePixelHeight;
    const headPixelWidth = Math.hypot(headPixelWidthX, headPixelWidthY);

    bgAnimate(faceCentroid, headPixelWidth / webcamePixelWidth);
  }
  canvasCtx.restore();
}

const faceMesh = new mpFaceMesh.FaceMesh(config);
faceMesh.setOptions(solutionOptions);
faceMesh.onResults(onResults);

const camera = new cameraUtils.Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({ image: videoElement }).catch(e => alert(e));
  },
  width: webcamePixelWidth,
  height: webcamePixelHeight
});
camera.start();

// Present a control panel through which the user can manipulate the solution
// options.
new controls
    .ControlPanel(controlsElement, solutionOptions)
    .add([
      new controls.StaticText({title: 'MediaPipe Face Mesh'}),
      fpsControl,
      new controls.Toggle({title: 'Selfie Mode', field: 'selfieMode'}),
      /*new controls.SourcePicker({
        onFrame:
            async (input: controls.InputImage, size: controls.Rectangle) => {
              console.log("SourcePicker")
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
      }),*/
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
