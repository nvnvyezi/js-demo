import React, { useState } from 'react'

import './index.less'

export default () => {
  console.log(2222)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)

  return (
    <div className="test">
      {a}
      {b}
      {c}
      <button
        onClick={() => {
          setA(1)
          setB(2)
          setC(1)
        }}
      >
        a
      </button>
      <style jsx>{``}</style>
    </div>
  )
}
