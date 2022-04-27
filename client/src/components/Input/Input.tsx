import React from "react"

type InputProps = {
    type: string,
    placeholder: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    name: string
}

const Input = ({ type, placeholder, value, onChange, name } : InputProps) => {

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    onChange && onChange(event);
  }

  return (
    <>
    <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChangeHandler} />
    </>
  )
}

export default Input