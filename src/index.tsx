import React from 'react'
import ReactDom from 'react-dom'

/* rxjs-hooks */
// import TrailingQueue from './rxjs-hooks/trailing-queue'
// import Drag from './rxjs-hooks/drag'

/* layout */
// import One from './layout/one'
// import Two from './layout/two'
import Three from './layout/three'

/* float */
// import One from './float/one'

function App() {
  return (
    <div>
      {/* <Drag /> */}
      {/* <TrailingQueue /> */}
      {/* <One /> */}
      {/* <Two /> */}
      <Three />
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
