// 左边自适应，右边固定
import React from 'react'

export default function One() {
  return (
    <section>
      <div className="left l">left</div>
      <div className="right r">right</div>
      <style jsx>{`
        .l {
          background: red;
        }
        .r {
          width: 200px;
          background: green;
        }
        // //first
        // section {
        //   height: 600px;
        // }
        // section > div {
        //   display: inline-block;
        //   height: 100%;
        // }
        // .left {
        //   width: calc(100% - 200px);
        // }
        // //second
        // section {
        //   display: flex;
        // }
        // .left {
        //   flex-grow: 1;
        // }
        //third
        section::after {
          content: '';
          display: block;
          clear: both;
        }
        .left {
          float: right;
          width: 200px;
        }
        .right {
          // width: calc(100% - 200px);
          width: 100%;
          margin-right: 200px;
        }
        // //four
        // section {
        //   position: relative;
        // }
        // .left {
        //   // width: calc(100% - 200px);
        //   margin-right: 200px;
        // }
        // .right {
        //   position: absolute;
        //   top: 0;
        //   right: 0;
        // }
        // //five
        // section::after {
        //   content: '';
        //   display: block;
        //   clear: both;
        // }
        // .left {
        //   float: left;
        //   width: calc(100% - 200px);
        // }
        // .right {
        //   float: left;
        // }
      `}</style>
    </section>
  )
}
