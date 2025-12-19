
# Signals

Signals represent reactive state.

```ts
const counter = signal(0)

counter.set(1)
counter.set(2)
```

Signals track their observers automatically.

Example:

```ts
effect(() => {
  console.log(counter.get())
})
```
