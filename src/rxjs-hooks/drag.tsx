import React from 'react'

import { useEventCallback, useObservable } from 'rxjs-hooks'
import {
  map,
  withLatestFrom,
  switchMap,
  takeUntil,
  delay,
} from 'rxjs/operators'
import { fromEvent } from 'rxjs'

export default function Drag() {
  const [onMouseDown, [x, y]] = useEventCallback(
    (event$: any, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([event, prev]: [MouseEvent, number[]]) => [
          event.clientX,
          event.clientY,
          prev,
        ]),
        switchMap(([startX, startY, prev]) => {
          return fromEvent(window, 'mousemove').pipe(
            map((event: any) => [
              event.clientX - startX + prev[0],
              event.clientY - startY + prev[1],
            ]),
            takeUntil(fromEvent(window, 'mouseup'))
          )
        })
      ),
    [0, 0]
  )

  function useStyle(x: number, y: number) {
    const [left, top] = useObservable(
      inputs$ => inputs$.pipe(delay(0)),
      [0, 0],
      [x, y]
    )
    return { left, top }
  }

  const style = useStyle(x, y)

  return (
    <div className="box" onMouseDown={onMouseDown} style={style}>
      <style jsx>{`
        .box {
          position: absolute;
          width: 100px;
          height: 100px;
          user-select: none;
          cursor: pointer;
          background: blue;
        }
      `}</style>
    </div>
  )
}
