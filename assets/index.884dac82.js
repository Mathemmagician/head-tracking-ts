import { S as Scene, G as GLTFLoader, T as TorusGeometry, M as MeshStandardMaterial, a as Mesh, A as AmbientLight, P as PointLight, b as PerspectiveCamera, W as WebGLRenderer, F as FlyControls, C as Clock, V as Vector3, m as mpFaceMesh, f as face_mesh, c as camera_utils, d as control_utils$1, e as drawing_utils } from "./vendor.ef8df6f9.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var background = "";
const scene = new Scene();
new GLTFLoader();
const torusGeometry = new TorusGeometry(8, 6, 16, 100);
const material = new MeshStandardMaterial({ color: 16737095 });
const torus = new Mesh(torusGeometry, material);
torus.rotation.x = 3.1415 / 2;
scene.add(torus);
const light = new AmbientLight(16777215, 0.5);
scene.add(light);
const pointLight = new PointLight(14737632);
pointLight.position.set(0, 10, 40);
scene.add(pointLight);
const WEBCAM_FOV_Y$1 = 54;
new Clock();
const camera$2 = new PerspectiveCamera(WEBCAM_FOV_Y$1, window.innerWidth / window.innerHeight, 0.1, 1e3);
const renderer$1 = new WebGLRenderer({ canvas: document.querySelector("#bg") });
renderer$1.setPixelRatio(window.devicePixelRatio);
renderer$1.setSize(window.innerWidth, window.innerHeight);
camera$2.position.set(0, 50, 50);
const controls$1 = new FlyControls(camera$2, renderer$1.domElement);
controls$1.dragToLook = true;
window.addEventListener("resize", onWindowResize$1);
function onWindowResize$1() {
  camera$2.aspect = window.innerWidth / window.innerHeight;
  camera$2.updateProjectionMatrix();
  renderer$1.setSize(window.innerWidth, window.innerHeight);
}
var facemesh = "";
var control_utils = "";
const WEBCAM_FOV_Y = 54;
const DEG2RAD = Math.PI / 180;
const FACE_WIDTH_CM = 15;
const clock = new Clock();
const camera$1 = new PerspectiveCamera(WEBCAM_FOV_Y, window.innerWidth / window.innerHeight, 0.1, 1e3);
const renderer = new WebGLRenderer({ canvas: document.querySelector("#bg") });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera$1.position.set(0, 50, 50);
const controls = new FlyControls(camera$1, renderer.domElement);
controls.dragToLook = true;
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera$1.aspect = window.innerWidth / window.innerHeight;
  camera$1.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function faceCentroid2xyz(faceCentroid, faceWidth) {
  const RATIO2CM = FACE_WIDTH_CM / faceWidth;
  const Z = RATIO2CM / 2 / Math.tan(WEBCAM_FOV_Y / 2 * DEG2RAD);
  const X = (faceCentroid.x - 0.5) * 100;
  const Y = -(faceCentroid.y - 0.5) * 100;
  return new Vector3(X, Y, Z);
}
function animate(faceCentroid, faceWidth) {
  const deltaTime = Math.min(0.05, clock.getDelta()) * 100;
  controls.update(deltaTime);
  const shift = faceCentroid2xyz(faceCentroid, faceWidth);
  camera$1.translateX(shift.x);
  camera$1.translateY(shift.y);
  camera$1.translateZ(shift.z);
  renderer.render(scene, camera$1);
  camera$1.translateX(-shift.x);
  camera$1.translateY(-shift.y);
  camera$1.translateZ(-shift.z);
}
const MESH_ANNOTATIONS = {
  silhouette: [
    10,
    338,
    297,
    332,
    284,
    251,
    389,
    356,
    454,
    323,
    361,
    288,
    397,
    365,
    379,
    378,
    400,
    377,
    152,
    148,
    176,
    149,
    150,
    136,
    172,
    58,
    132,
    93,
    234,
    127,
    162,
    21,
    54,
    103,
    67,
    109
  ],
  lipsUpperOuter: [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291],
  lipsLowerOuter: [146, 91, 181, 84, 17, 314, 405, 321, 375, 291],
  lipsUpperInner: [78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308],
  lipsLowerInner: [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308],
  rightEyeUpper0: [246, 161, 160, 159, 158, 157, 173],
  rightEyeLower0: [33, 7, 163, 144, 145, 153, 154, 155, 133],
  rightEyeUpper1: [247, 30, 29, 27, 28, 56, 190],
  rightEyeLower1: [130, 25, 110, 24, 23, 22, 26, 112, 243],
  rightEyeUpper2: [113, 225, 224, 223, 222, 221, 189],
  rightEyeLower2: [226, 31, 228, 229, 230, 231, 232, 233, 244],
  rightEyeLower3: [143, 111, 117, 118, 119, 120, 121, 128, 245],
  rightEyebrowUpper: [156, 70, 63, 105, 66, 107, 55, 193],
  rightEyebrowLower: [35, 124, 46, 53, 52, 65],
  rightEyeIris: [473, 474, 475, 476, 477],
  leftEyeUpper0: [466, 388, 387, 386, 385, 384, 398],
  leftEyeLower0: [263, 249, 390, 373, 374, 380, 381, 382, 362],
  leftEyeUpper1: [467, 260, 259, 257, 258, 286, 414],
  leftEyeLower1: [359, 255, 339, 254, 253, 252, 256, 341, 463],
  leftEyeUpper2: [342, 445, 444, 443, 442, 441, 413],
  leftEyeLower2: [446, 261, 448, 449, 450, 451, 452, 453, 464],
  leftEyeLower3: [372, 340, 346, 347, 348, 349, 350, 357, 465],
  leftEyebrowUpper: [383, 300, 293, 334, 296, 336, 285, 417],
  leftEyebrowLower: [265, 353, 276, 283, 282, 295],
  leftEyeIris: [468, 469, 470, 471, 472],
  midwayBetweenEyes: [168],
  noseTip: [1],
  noseBottom: [2],
  noseRightCorner: [98],
  noseLeftCorner: [327],
  rightCheek: [205],
  leftCheek: [425]
};
const config = {
  locateFile: (file) => {
    return `node_modules/@mediapipe/face_mesh/${file}`;
  }
};
const webcamePixelWidth = 1280;
const webcamePixelHeight = 720;
const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const controlsElement = document.getElementsByClassName("control-panel")[0];
const canvasCtx = canvasElement.getContext("2d");
const solutionOptions = {
  selfieMode: true,
  enableFaceGeometry: false,
  maxNumFaces: 1,
  refineLandmarks: false,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
  intensity: 1,
  color: 16777215
};
const spinner = document.querySelector(".loading");
spinner.ontransitionend = () => {
  spinner.style.display = "none";
};
let counter = 1;
function onResults(results) {
  document.body.classList.add("loaded");
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
  const rightEye = MESH_ANNOTATIONS["rightEyeUpper0"].concat(MESH_ANNOTATIONS["rightEyeLower0"]);
  const leftEye = MESH_ANNOTATIONS["leftEyeUpper0"].concat(MESH_ANNOTATIONS["leftEyeLower0"]);
  if (results.multiFaceLandmarks.length > 0) {
    const landmarks = results.multiFaceLandmarks[0];
    if (counter === 0) {
      console.log(face_mesh.FACEMESH_FACE_OVAL);
    }
    drawing_utils.drawLandmarks(canvasCtx, rightEye.map((i) => landmarks[i]), { color: "red", radius: 5 });
    drawing_utils.drawLandmarks(canvasCtx, leftEye.map((i) => landmarks[i]), { color: "green", radius: 5 });
    counter += 0.1;
    drawing_utils.drawConnectors(canvasCtx, landmarks, face_mesh.FACEMESH_TESSELATION, { color: "#C0C0C070", lineWidth: 1 });
    drawing_utils.drawConnectors(canvasCtx, landmarks, face_mesh.FACEMESH_FACE_OVAL, { color: "#E0E0E0" });
    drawing_utils.drawConnectors(canvasCtx, landmarks, face_mesh.FACEMESH_LIPS, { color: "#E0E0E0" });
    if (solutionOptions.refineLandmarks) {
      drawing_utils.drawConnectors(canvasCtx, landmarks, face_mesh.FACEMESH_RIGHT_IRIS, { color: "#FF3030" });
      drawing_utils.drawConnectors(canvasCtx, landmarks, face_mesh.FACEMESH_LEFT_IRIS, { color: "#30FF30" });
    }
    const leftTemple = landmarks[226];
    const rightTemple = landmarks[446];
    const headPixelWidthX = Math.abs(leftTemple.x - rightTemple.x) * webcamePixelWidth;
    const headPixelWidthY = Math.abs(leftTemple.y - rightTemple.y) * webcamePixelHeight;
    const headPixelWidth = Math.hypot(headPixelWidthX, headPixelWidthY);
    let eyeCenter = new Vector3(0, 0, 0);
    for (const landmark of landmarks) {
      eyeCenter.add(new Vector3(landmark.x, landmark.y, landmark.z));
    }
    eyeCenter.divideScalar(landmarks.length);
    animate(eyeCenter, headPixelWidth / webcamePixelWidth);
  }
  canvasCtx.restore();
}
console.log(typeof mpFaceMesh);
console.log(mpFaceMesh);
const faceMesh = new face_mesh.FaceMesh(config);
faceMesh.setOptions(solutionOptions);
faceMesh.onResults(onResults);
console.log("here");
console.log(typeof faceMesh);
console.log(faceMesh);
const camera = new camera_utils.Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({ image: videoElement }).catch((e) => alert(e));
  },
  width: webcamePixelWidth,
  height: webcamePixelHeight
});
camera.start();
new control_utils$1.ControlPanel(controlsElement, solutionOptions).add([
  new control_utils$1.StaticText({ title: "MediaPipe Face Mesh" }),
  new control_utils$1.Toggle({ title: "Selfie Mode", field: "selfieMode" }),
  new control_utils$1.Slider({
    title: "Max Number of Faces",
    field: "maxNumFaces",
    range: [1, 4],
    step: 1
  }),
  new control_utils$1.Toggle({ title: "Refine Landmarks", field: "refineLandmarks" }),
  new control_utils$1.Slider({
    title: "Min Detection Confidence",
    field: "minDetectionConfidence",
    range: [0, 1],
    step: 0.01
  }),
  new control_utils$1.Slider({
    title: "Min Tracking Confidence",
    field: "minTrackingConfidence",
    range: [0, 1],
    step: 0.01
  }),
  new control_utils$1.Slider({
    title: "light intensity",
    field: "intensity",
    range: [-1, 6],
    step: 0.01
  }),
  new control_utils$1.Slider({
    title: "light color",
    field: "color",
    range: [0, 16777215],
    step: 1
  })
]).on((x) => {
  const options = x;
  videoElement.classList.toggle("selfie", options.selfieMode);
  faceMesh.setOptions(options);
});
