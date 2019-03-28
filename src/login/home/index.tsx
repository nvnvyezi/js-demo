import * as React from 'react'

import './index.less'

export default () => {
  return (
    <div className="test">
      <div
        style={{
          width: '30px',
          backgroundColor: 'red',
          height: '100vh',
        }}
      >
        left
      </div>
      <div className="middle">
        <div className="top">top</div>
        <div className="middle2">middle</div>
        <div className="bottom">bottom</div>
      </div>
      <div
        style={{
          width: '30px',
          backgroundColor: 'red',
          height: '100vh',
        }}
      >
        right
      </div>
      <style jsx>
        {`
          .test {
            display: flex;
            flex-direction;
            justify-content: space-between;
            height: '100vh',
          }
          .middle {
            flex-grow: 1;
            align-self: flex-end;
          }
          .bottom {
            margin-bottom: 40px;
            border: 1px solid green;
          }
          .middle2 {
            margin-bottom: 40px;
            border: 1px solid yellow;
          }
          .top {
            margin-bottom: 100px;
            border: 1px solid blue;
          }
        `}
      </style>
    </div>
  )
}
