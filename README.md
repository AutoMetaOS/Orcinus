# Svelte + Vite

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