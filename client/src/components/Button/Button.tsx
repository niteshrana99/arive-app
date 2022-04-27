import React from "react";

type ButtonProps = {
    children: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({children, onClick}: ButtonProps) => {

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
  }

  return (
    <button className="btn" onClick={handleButtonClick}>
        {children}
    </button>
  )
}

export default Button