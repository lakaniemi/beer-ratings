<script lang="ts">
  import Fuse from 'fuse.js';
  import sortBy from 'lodash/sortBy';
  import type { Beer } from '$lib/types';

  type Props = {
    beers: Beer[];
  };

  type SortOptions = {
    field: keyof Beer;
    direction: 'asc' | 'desc';
  };

  let { beers }: Props = $props();
  let searchKeyword = $state('');
  let sortOptions: SortOptions = $state({ field: 'name', direction: 'asc' });

  const fuseOptions = {
    keys: ['name', 'manufacturer', 'category'],
    threshold: 0.3,
  };

  const fuse = new Fuse(beers, fuseOptions);

  let filteredBeers = $derived(
    searchKeyword ? fuse.search(searchKeyword).map((result) => result.item) : beers
  );

  let sortedAndFilteredBeers = $derived(
    sortOptions.direction === 'asc'
      ? sortBy(filteredBeers, sortOptions.field)
      : sortBy(filteredBeers, sortOptions.field).reverse()
  );

  const onSort = (field: keyof Beer) => () => {
    if (sortOptions.field === field) {
      sortOptions.direction = sortOptions.direction === 'asc' ? 'desc' : 'asc';
    } else {
      sortOptions = {
        field,
        direction: 'asc',
      };
    }
  };

  const listFields: (keyof Beer)[] = ['name', 'manufacturer', 'category', 'averageRating'];
</script>

<input class="border px-2 py-1" type="text" bind:value={searchKeyword} placeholder="Search beers" />

<div class="relative mt-4 overflow-x-auto">
  <table class="w-full text-left">
    <thead class="bg-gray-100">
      <tr>
        {#each listFields as field}
          <th class="px-4 py-1">
            <button class="cursor-pointer" onclick={onSort(field)}>
              {field}
              {#if sortOptions.field === field}
                {sortOptions.direction === 'asc' ? '▲' : '▼'}
              {/if}
            </button>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sortedAndFilteredBeers as beer}
        <tr>
          {#each listFields as field}
            <td class="px-4 py-1">{beer[field]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
