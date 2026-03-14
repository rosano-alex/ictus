
# Effects

Effects run whenever dependencies change.

```ts
import { signal, effect } from "quanta"

const count = signal(0)

effect(() => {
  console.log("count changed:", count.get())
})
```

Useful for:

- logging
- analytics
- syncing external systems
