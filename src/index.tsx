import React from 'react'
import ReactDom from 'react-dom'

// import TrailingQueue from './rxjs-hooks/trailing-queue'
import Drag from './rxjs-hooks/drag'

function App() {
  return (
    <div>
      <Drag />
      {/* <TrailingQueue /> */}
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
