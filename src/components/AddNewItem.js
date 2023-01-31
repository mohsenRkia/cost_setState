import React, { useState } from "react";
import ButtonInput from "./ButtonInput";
import TextInput from "./TextInput";

const AddNewItem = (props) => {

  const [inputData, setInputData] = useState({ type: "", amount: 0 });
  const [addError, setAddError] = useState('')

  const costTypeChangeHandler = (sender) => {
    setInputData((prev) => {
      return { ...prev, type: sender.target.value };
    });
  };

  const costAmountChangeHandler = (sender) => {
    setInputData({ ...inputData, amount: sender.target.value });
  };

  const onClickHandler = (sender) => {
    sender.preventDefault();
    setAddError('')
    if (inputData.type !== '' && inputData.amount !== 0) {
      props.addItemFunc(inputData)
      setInputData({ type: "", amount: 0 })
    } else {
      setAddError('Fields Can not be nulled!!')
    }
  };

  return (
    <form>
      <TextInput lableInput="Cost type" inputValue={inputData.type} onChangeHandler={costTypeChangeHandler} />

      <TextInput lableInput="Cost amount" inputType="number" inputValue={inputData.amount} onChangeHandler={costAmountChangeHandler} />

      {
        addError ? <div style={{ color: 'red' }}>
          {addError}
        </div> : ''
      }
      <ButtonInput onClickHandler={onClickHandler} />
    </form>
  );
};

export default AddNewItem;
