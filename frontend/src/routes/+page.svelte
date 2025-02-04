<script lang="ts">
  import BeerList from '$lib/components/BeerList.svelte';
  import { beers } from '$lib/mockData';
</script>

<BeerList {beers} />
