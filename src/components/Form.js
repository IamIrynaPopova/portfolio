import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section id="form" className="form">
      <div className="form-wrapper container">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <p className="form__title">Напиcати мені можна тут 👇</p>
          <ul className="form__list">
            <li className="form__item">
              <div className="form__wrap">
                <input
                  {...register("name", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Має складатись мінімум з 3x літер",
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
                      value: /^[\d()+]+$/,
                      message: "Ви ввели не вірний номер ",
                    },
                  })}
                  className="form__input"
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Tel"
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
          <button type="submit" className="form__button">
            Відправити
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
