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

<button {id} on:click={increment}>
  <img src={icon} alt={name} />
  {name}
  {count}
</button>

<style>
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
