import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTelChange = (e) => {
    const value = e.target.value;
    const arrayValue = value.split("");
    const defaultValue = e.target.defaultValue;

    for (let i = 0; i < arrayValue.length; i++) {
      if (value === "" || arrayValue.length < 4) {
        e.target.value = defaultValue;
      } else if (arrayValue[7] === ")") {
        arrayValue.splice(7, 1);
        return arrayValue;
      } else if (i === 7) {
        arrayValue.splice(7, 0, ")");
        const newValue = arrayValue.join("");
        e.target.value = newValue;
        return;
      }
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
        <p className="form__title">
          Напиши мені, якщо тобі сподобались мої роботи 😉
        </p>
        <ul className="form__list">
          <li className="form__item">
            <div className="form__wrap">
              <input
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "Має складатись мінімум з 4x літер",
                  },
                })}
                className="form__input"
                type="text"
                name="name"
                id="name"
                placeholder="Ім'я"
              />
              <p className="form__message">{errors.name?.message}</p>
            </div>
          </li>
          <li className="form__item">
            <div className="form__wrap">
              <input
                {...register("tel", {
                  required: true,
                  pattern: {
                    value: /^\+\d{2}\(\d{3}\)\d{7}$/,
                    message: "Ви ввели не вірний номер ",
                  },
                })}
                className="form__input"
                type="tel"
                id="tel"
                name="tel"
                defaultValue="+38("
                onChange={handleTelChange}
              />
            </div>
            <p className="form__message">{errors.tel?.message}</p>
          </li>
          <li className="form__item">
            <div className="form__wrap">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Введіть пошту в форматі example@gmail.com ",
                  },
                })}
                className="form__input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <p className="form__message">{errors.email?.message}</p>
          </li>
          <div className="form__wrap">
            <li className="form__item">
              <textarea
                {...register("feedback")}
                className="form__textarea"
                name="feedback"
                id="feedback"
                placeholder="Введіть текст"
              ></textarea>
            </li>
          </div>
        </ul>
        <button type="submit" className="button">
          Відправити
        </button>
      </form>
    </div>
  );
};

export default Form;
