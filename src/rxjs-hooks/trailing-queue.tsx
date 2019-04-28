/* 尾随队列  */
import React from 'react'

import { useEventCallback, useObservable } from 'rxjs-hooks'

import {
  delay,
  withLatestFrom,
  switchMap,
  takeUntil,
  map,
} from 'rxjs/operators'
import { fromEvent } from 'rxjs'

export default function TraillingQueue() {
  const [onMouseDown, [x, y]] = useEventCallback(
    (event$: any, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([e, prevPos]: [MouseEvent, number[]]) => [
          e.clientX,
          e.clientY,
          prevPos,
        ]),
        switchMap(([startX, startY, prevPos]) => {
          return fromEvent(window, 'mousemove').pipe(
            map((moveEvent: any) => {
              return [
                moveEvent.clientX - startX + prevPos[0],
                moveEvent.clientY - startY + prevPos[1],
              ]
            }),
            takeUntil(fromEvent(window, 'mouseup'))
          )
        })
      ),
    [0, 0]
  )

  function useDelayedStyle(x: number, y: number, delayTime: number) {
    const [left, top] = useObservable(
      inputs$ => inputs$.pipe(delay(delayTime)),
      [0, 0],
      [x, y]
    )
    return { left, top }
  }
  const style0 = useDelayedStyle(x, y, 0)
  const style1 = useDelayedStyle(x, y, 100)
  const style2 = useDelayedStyle(x, y, 200)
  const style3 = useDelayedStyle(x, y, 300)

  return (
    <div className="trailing">
      <div className="box one" style={style3} />
      <div className="box two" style={style2} />
      <div className="box three" style={style1} />
      <div className="box" style={style0} onMouseDown={onMouseDown}>
        aaa
      </div>
      <style jsx>{`
        .box {
          position: absolute;
          width: 100px;
          height: 100px;
          background: orange;
          user-select: none;
          cursor: pointer;
        }
        .one {
          background: red;
        }
        .two {
          background: blue;
        }
        .three {
          background: green;
        }
      `}</style>
    </div>
  )
}
