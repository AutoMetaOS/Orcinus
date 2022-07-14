<script lang="typescript">
  export let worker;

  import { onMount } from "svelte";
  import Data from "./assets/data.json";
  import Counter from "./lib/Counter.svelte";
  import { getUrl } from "./api";

  onMount(async () => {
    const hash = await worker({
      exec: "hash",
      params: ["Punam2601"],
    });

    console.log(getUrl("list"));

    console.log(hash);
  });
</script>

<main class="†c w-100">
  <h1>Orcinus</h1>

  <div class="ƒ" style="overflow-x:scroll;">
    {#each Data as cat}
      <div class="m10" id={cat.id}>
        <div class="ƒ p5 fw5 ∆-ct title">
          <img
            class="rx5 icon"
            src={cat.icon}
            alt={cat.title.replaceAll(" ", "-")}
          />
          {cat.title}
        </div>
        <ul class="m0 p0">
          {#each cat.items as item}
            <li class="m5" id={item.id}>
              <Counter icon={item.icon} name={item.title} id={item.id} />
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    background-color: #242424;
  }
  ul {
    list-style-type: none;
  }
  .title {
    font-size: 1.25rem;
    text-transform: uppercase;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
</style>
