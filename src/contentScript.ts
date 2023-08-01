import { createComponent, render } from "solid-js/web";
import DemoApp from "./apps/demoApp";

const root = document.createElement("div");

document.body.appendChild(root);

console.log(root);

render(() => createComponent(DemoApp, {}), root);
