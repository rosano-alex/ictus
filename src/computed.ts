import { activeObserver, setObserver } from "./context"
import { epoch } from "./clock"
import { NodeFlags, type Node } from "./node"
import { LaneTypes } from "./lanetypes"

export class ComputedNode<T> implements Node {

  compute: () => T
  value!: T

  lane = LaneTypes.USER
  flags = NodeFlags.DIRTY

  deps: any[] = new Array(8)
  versions: number[] = new Array(8)
  depCount = 0

  lastEpoch = -1

  constructor(fn: () => T) {
    this.compute = fn
  }

  get(): T {

    if (this.flags & NodeFlags.DIRTY || this.lastEpoch !== epoch) {
      this.recompute()
    }

    return this.value
  }

  mark() {
    this.flags |= NodeFlags.DIRTY
  }

  run() {
    this.recompute()
  }

  private recompute() {

    const prev = activeObserver
    setObserver(this)

    this.depCount = 0

    const v = this.compute()

    setObserver(prev)

    this.value = v
    this.lastEpoch = epoch
    this.flags = NodeFlags.CLEAN
  }
}
