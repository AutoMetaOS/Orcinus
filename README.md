<div align="center">
  <img src="./public/orcinus.svg" alt="Svelte" width="200" />
  <h1>Orcinus</h1>
</div>

## Format
```ts
interface Trackable{
  id: string;
  title: string;
  icon: string;
}

interface Catagory {
  id: string;
  title: string;
  icon: string;
  items: Array<Trackable>;
}
```