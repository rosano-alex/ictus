
# Reactive Collections

## Reactive Array

```ts
import { reactiveArray } from "quanta"

const todos = reactiveArray()

todos.push("Buy milk")
todos.push("Walk dog")
```

## Reactive Map

```ts
import { reactiveMap } from "quanta"

const users = reactiveMap()

users.set("1", {name:"Alex"})
```

## Reactive Set

```ts
import { reactiveSet } from "quanta"

const selected = reactiveSet()

selected.add(1)
selected.add(2)
```
