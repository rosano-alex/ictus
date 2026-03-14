import { activeObserver, setObserver } from "./context"
import { schedule } from "./scheduler"
import { NodeFlags, type Node } from "./node"
import { LaneTypes } from "./lanetypes"

export class EffectNode implements Node {

  fn: () => void
  lane: number
  flags = NodeFlags.DIRTY



  constructor(fn: () => void, lane: number = LaneTypes.USER) {
    this.fn = fn
    this.lane = lane
    this.run()
  }



  dispose() {
    this.flags = NodeFlags.CLEAN
  }

  mark() {

    if (!(this.flags & NodeFlags.QUEUED)) {
      this.flags |= NodeFlags.QUEUED
      schedule(this)
    }
  }

  run() {

    const prev = activeObserver
    setObserver(this)

    this.fn()

    setObserver(prev)

    this.flags = NodeFlags.CLEAN
    this.flags &= ~NodeFlags.QUEUED
  }
}
