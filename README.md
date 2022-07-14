<div align="center">
  <img src="https://api.nukes.in/cms/icon?name=amos:orcinus.svg" alt="orcinus logo" width="200" />
  <h1>Orcinus</h1>
</div>

##
Killer Whales have the best memory are among the smartest creatures to exist.
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