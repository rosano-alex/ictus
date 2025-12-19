
# Examples

## Global Theme State

```ts
const theme = signal("light")
```

Derived state:

```ts
const darkMode = computed(() => theme.get() === "dark")
```

## Todo App Example

```ts
const todos = reactiveArray()

function addTodo(text){
  todos.push(text)
}
```

React:

```tsx
function TodoCount(){

  const count = useSignal(
    computed(() => todos.get().length)
  )

  return <Text>{count}</Text>
}
```

## Chat Messages

```ts
const messages = reactiveArray()

function sendMessage(text){
  messages.push({
    text,
    time: Date.now()
  })
}
```

## Async Data

```ts
const posts = asyncSignal(async () => {
  const res = await fetch("/posts")
  return res.json()
})
```
