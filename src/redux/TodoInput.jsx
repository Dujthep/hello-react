import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function TodoInput() {
    const [text, setText] = useState();
    const dispatch = useDispatch();
    const onKeyup = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            dispatch({ type: "ADD", payload: value })
            e.target.value = ''
        }
    }
    return <input value={text} onKeyUp={onKeyup}></input>
}