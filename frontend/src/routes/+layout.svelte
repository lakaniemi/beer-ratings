<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<header class="shadow-2xs bg-orange-100 px-6 py-3">Beer Ratings (insert menu here)</header>

<main class="p-3">
  {@render children()}
</main>
