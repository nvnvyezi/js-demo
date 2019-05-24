import React from 'react'

export default function Three() {
  /**
   * 垂直居中
   * flex + margin
   * 在 flex 格式化上下文中，设置了 margin: auto 的元素，在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去
   */
  function one() {
    return (
      <section>
        <div>one</div>
        <style jsx>{`
          section {
            display: flex;
            width: 400px;
            height: 400px;
            border: 1px solid red;
          }
          div {
            margin: auto;
          }
        `}</style>
      </section>
    )
  }

  /**
   * 实现space-around
   *
   */
  function two() {
    return (
      <ul>
        <li>liA</li>
        <li>liB</li>
        <li>liC</li>
        <li>liD</li>
        <li>liE</li>
        <style jsx>{`
          ul {
            display: inline-flex;
            width: 200px;
            height: 100px;
            border: 1px solid red;
            list-style: none;
          }
          li {
            margin: auto;
          }
        `}</style>
      </ul>
    )
  }

  /**
   * 实现space-between
   *
   */
  function three() {
    return (
      <ul>
        <li>liA</li>
        <li>liB</li>
        <li>liC</li>
        <li>liD</li>
        <li>liE</li>
        <style jsx>{`
          ul {
            display: inline-flex;
            width: 200px;
            height: 100px;
            border: 1px solid red;
            list-style: none;
          }
          li {
            margin: auto;
          }
          li:first-child {
            margin-left: 0;
          }
          li:last-child {
            margin-right: 0;
          }
        `}</style>
      </ul>
    )
  }
  /**
   * 实现flex-end
   *
   */
  function four() {
    return (
      <ul>
        <li>liA</li>
        <li>liB</li>
        <li>liC</li>
        <li>liD</li>
        <li>liE</li>
        <style jsx>{`
          ul {
            display: inline-flex;
            width: 200px;
            height: 100px;
            border: 1px solid red;
            list-style: none;
          }
          li {
            margin: auto;
            margin-bottom: 0;
          }
        `}</style>
      </ul>
    )
  }

  function five() {
    return (
      <ul>
        <li>liA</li>
        <li>liB</li>
        <li>liC</li>
        <li>liD</li>
        <li>liE</li>
        <style jsx>{`
          ul {
            display: inline-flex;
            width: 300px;
            height: 100px;
            border: 1px solid red;
            list-style: none;
          }
          li {
            margin: auto 0;
          }
          li:last-child {
            margin-left: auto;
          }
        `}</style>
      </ul>
    )
  }

  /**
   * 一大段复杂的布局中的某一块，高度或者宽度不固定，需要相对于它所在的剩余空间居中：
   *
   * @returns
   */
  function six() {
    return (
      <section>
        <p>这是第一行文案</p>
        <p>这是第二行文案</p>
        <p>1、剩余多行文案需要垂直居中剩余空间</p>
        <p>2、剩余多行文案需要垂直居中剩余空间</p>
        <p>这是最后一行文案</p>
        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 400px;
            border: 1px solid red;
          }
          p {
            width: 100%;
            height: 16px;
          }
          p:nth-child(3) {
            margin-top: auto;
          }
          p:nth-child(4) {
            margin-bottom: auto;
          }
        `}</style>
      </section>
    )
  }

  /**
   * 页面存在一个 footer 页脚部分，如果整个页面的内容高度小于视窗的高度，则 footer 固定在视窗底部，如果整个页面的内容高度大于视窗的高度，则 footer 正常流排布（也就是需要滚动到底部才能看到 footer）
   *
   * @returns
   */
  function senven() {
    return (
      <section>
        <div>body</div>
        <footer>footer</footer>
        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
          }
          div {
            height: 200px;
            border: 1px solid red;
          }
          footer {
            margin-top: auto;
          }
        `}</style>
      </section>
    )
  }

  return (
    <div>
      {/* {one()} */}
      {/* {two()} */}
      {/* {three()} */}
      {/* {four()} */}
      {/* {five()} */}
      {/* {six()} */}
      {senven()}
    </div>
  )
}
