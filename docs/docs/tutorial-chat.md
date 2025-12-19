
# Tutorial: Build a Chat App

State:

```ts
const messages = reactiveArray()
```

Send message:

```ts
function send(msg){
  messages.push({
    text: msg,
    time: Date.now()
  })
}
```

React component:

```tsx
function Chat(){

  const list = useSignal(messages)

  return (
    <View>
      {list.map(m => (
        <Text>{m.text}</Text>
      ))}
    </View>
  )
}
```
