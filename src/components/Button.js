import React from "react";

const Button = ({ onLoadMore }) => {
  return (
    <div className="container">
      <button onClick={onLoadMore} type="button" className="button">
        Показати ще
      </button>
    </div>
  );
};

export default Button;
