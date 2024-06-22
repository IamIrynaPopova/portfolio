import React from "react";
import { useState } from "react";

const Button = ({ onLoadMore, onClick }) => {
  return (
    <div className="container">
      <button
        onClick={onLoadMore}
        type="button"
        className={onClick ? "button button-clicked" : "button"}
      >
        Показати ще
      </button>
    </div>
  );
};

export default Button;
