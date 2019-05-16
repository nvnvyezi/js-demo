/* 水平垂直巨中 */
import React from 'react'

export default function Two() {
  /* flex */
  function flex() {
    return (
      <section>
        a
        <style jsx>{`
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 400px;
            border: 1px solid red;
          }
        `}</style>
      </section>
    )
  }

  /* 当是line的时候 */
  function text() {
    return (
      <section>
        <span>时尚</span>
        <style jsx>{`
          section {
            display: inline-block;
            width: 400px;
            line-height: 400px;
            text-align: center;
            border: 1px solid red;
          }
        `}</style>
      </section>
    )
  }

  /* 定位+margin */
  function three() {
    return (
      <section>
        <div>a</div>
        <style jsx>{`
          section {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid red;
          }
          div {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
          }
        `}</style>
      </section>
    )
  }

  /* 定位+transform */
  function four() {
    return (
      <section>
        <div>啊</div>
        <style jsx>{`
          section {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid red;
          }
          div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </section>
    )
  }

  /* 定位 */
  function five() {
    return (
      <section>
        <div>啊</div>
        <style jsx>{`
          section {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid red;
          }
          div {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 50px;
            margin: auto;
          }
        `}</style>
      </section>
    )
  }

  /* calc */
  function six() {
    return (
      <section>
        <div>啊</div>
        <style jsx>{`
          section {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid red;
          }
          div {
            position: absolute;
            top: calc(50% - 25px);
            left: calc(50% - 25px);
            width: 50px;
            height: 50px;
          }
        `}</style>
      </section>
    )
  }

  /* ::after */
  function seven() {
    return (
      <section>
        seven
        <style jsx>{`
          section {
            width: 400px;
            height: 400px;
            text-align: center;
            border: 1px solid red;
          }
          section::after {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }
        `}</style>
      </section>
    )
  }

  return (
    <>
      {flex()}
      {text()}
      {three()}
      {four()}
      {five()}
      {six()}
      {seven()}
    </>
  )
}
