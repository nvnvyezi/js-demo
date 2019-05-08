import React from 'react'

export default function One() {
  function one() {
    return (
      <section>
        <div>啊啊啊</div>
        <p>aaaaa</p>
        <style jsx>{`
          section {
            border: 1px solid red;
          }
          div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid green;
          }
          //clearfix
          section::after {
            content: '';
            display: block;
            clear: both;
          }
        `}</style>
      </section>
    )
  }

  // 空标签
  function two() {
    return (
      <section>
        <div>啊啊啊</div>
        <p>aaaaa</p>
        <br style={{ clear: 'left' }} />
        <style jsx>{`
          section {
            border: 1px solid red;
          }
          div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid green;
          }
        `}</style>
      </section>
    )
  }

  // 元素自身clear
  function three() {
    return (
      <section>
        <div>啊啊啊</div>
        <p>aaaaa</p>
        <style jsx>{`
          section {
            border: 1px solid red;
          }
          div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid green;
          }
          p {
            clear: left;
          }
        `}</style>
      </section>
    )
  }

  // BFC
  function four() {
    return (
      <section>
        <div>啊啊啊four</div>
        <p>aaaaafour</p>
        <style jsx>{`
          section {
            border: 1px solid red;
          }
          div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid green;
          }
          section {
            // overflow: auto;
            // display: inline-block;
            // float: left;
            // position: absolute;
            // display: flex;
            display: flow-root;
          }
        `}</style>
      </section>
    )
  }

  return (
    <>
      {one()}
      {two()}
      {three()}
      {four()}
    </>
  )
}
