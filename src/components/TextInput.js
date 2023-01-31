import React from 'react'

const TextInput = (props) => {
    return (
        <div>
            <label>{props.lableInput} </label>
            <input type={props.inputType ? props.inputType : "text"} value={props.inputValue} onChange={props.onChangeHandler} />
        </div>
    )
}

export default TextInput