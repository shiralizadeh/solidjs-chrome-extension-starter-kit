import { createSignal } from "solid-js";

export default function OptionsApp() {
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    setCount((count) => count + 1);
  }, 1000);

  return <h1>DemoApp Count: {count()}</h1>;
}
