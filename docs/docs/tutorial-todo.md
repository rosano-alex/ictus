
# Tutorial: Build a Todo App

Step 1: Create state

```ts
const todos = reactiveArray()
```

Step 2: Add todos

```ts
function addTodo(text){
  todos.push(text)
}
```

Step 3: Render

```tsx
function TodoList(){

  const list = useSignal(todos)

  return (
    <View>
      {list.map(todo => (
        <Text>{todo}</Text>
      ))}
    </View>
  )
}
```
