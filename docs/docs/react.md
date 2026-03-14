
# React Integration

Quanta integrates with React using `useSignal`.

```tsx
import { useSignal } from "quanta/react"
import { signal } from "quanta"

const count = signal(0)

export function Counter(){

  const value = useSignal(count)

  return (
    <View>
      <Text>{value}</Text>

      <Button
        title="Add"
        onPress={() => count.set(value + 1)}
      />
    </View>
  )
}
```
