import "./index.css";
import Products from "./Products.svelte";

const app = new Products({
  target: document.getElementById("app"),
});

export default app;
