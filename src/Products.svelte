<script>
  import { onMount, onDestroy } from "svelte";
  import Card from "./Card.svelte";
  let products = [];

  async function loadProducts() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const newProducts = await response.json();
    products = [...products, ...newProducts];
  }

  function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadProducts();
    }
  }

  onMount(() => {
    loadProducts();
    window.addEventListener("scroll", checkScroll);
  });

  onDestroy(() => {
    window.removeEventListener("scroll", checkScroll);
  });
</script>

<h1 class="title">Products</h1>

<div class="grid">
  {#each products as product, index (index)}
    <Card {product} />
  {/each}
</div>
