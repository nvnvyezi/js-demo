import * as React from 'react'

import './index.less'

export default () => {
  return (
    <div className="test">
      <img alt=""
        src="http://p0.pstatp.com/origin/3796/2975850990"
      />
      <style jsx>
        {`
          .test {
            position: relative;
            width: 36px;
            height: 36px;
          }
          .aaa::before {
            content: ' ';
            position: absolute;
            // box-sizing: border-box;
            top: -1px;
            left: -1px;
            width: 200%;
            height: 200%;
            border: 1px solid red;
            transform-origin: 0 0;
            border-radius: 100%;
            transform: scale(0.5, 0.5);
            pointer-events: none;
          }
          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  )
}
