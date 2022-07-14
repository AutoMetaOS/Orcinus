<script>
  export let //
    icon = "",
    name = "",
    id = "";

  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="f25" {id} on:click={increment}>
  <span style="padding-right:5px;">
    {icon}
  </span>
  {name}
  {count}
</button>

<style>
  button {
    cursor: pointer;
    background-color: #1a1a1a;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    transition: border-color 0.25s;
    min-width: 150px;
  }

  button:hover {
    border-color: var(--theme);
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
