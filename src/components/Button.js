import React from "react";

const Button = ({ onLoadMore }) => {
     
  return (
    <button onClick={onLoadMore} type="button" className="button">
      Показати ще
    </button>
  );
};

export default Button;
