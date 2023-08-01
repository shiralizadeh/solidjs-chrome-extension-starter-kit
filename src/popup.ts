import { createComponent, render } from "solid-js/web";
import DemoApp from "./apps/demoApp";

render(() => createComponent(DemoApp, {}), document.getElementById("root")!);
