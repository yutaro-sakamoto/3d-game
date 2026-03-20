import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3, Color3 } from "@babylonjs/core/Maths/math";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { CreateGround } from "@babylonjs/core/Meshes/Builders/groundBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// Side effects required for meshes to render with deep imports
import "@babylonjs/core/Meshes/meshBuilder";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const camera = new ArcRotateCamera("camera", Math.PI / 4, Math.PI / 3, 10, Vector3.Zero(), scene);
camera.attachControl(canvas, true);

new HemisphericLight("light", new Vector3(0, 1, 0), scene);

const groundMat = new StandardMaterial("groundMat", scene);
groundMat.diffuseColor = new Color3(0.4, 0.6, 0.4);
const ground = CreateGround("ground", { width: 10, height: 10 }, scene);
ground.material = groundMat;

const boxMat = new StandardMaterial("boxMat", scene);
boxMat.diffuseColor = new Color3(0.8, 0.2, 0.2);
const box = CreateBox("box", { size: 1 }, scene);
box.position.y = 0.5;
box.material = boxMat;

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
