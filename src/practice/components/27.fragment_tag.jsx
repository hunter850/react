import { Fragment } from "react"
import { v4 } from "uuid"

const FragmentLi = () => {

    const myArray = ["David", "Frank", "Amy", "Ember", "Alex"];

    //<Fragment></Fragment> 就像vue的<template></template> 也能包在map內
    //用於處理ul裡的li tr td...這種有明確關係 但又要拆出成component強制要加一層div會導致結構不正確 此時使用Fragment標籤 不會渲染在畫面上
    const el = (
        <Fragment>
            {myArray.map(item => (
                <li key={v4()}>
                    <h1>Name: {item}</h1>
                </li>
            ))}
        </Fragment>
    )

    return el;
}

export default FragmentLi