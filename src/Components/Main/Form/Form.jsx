import React from "react";
import FormStyle from "./Form.module.css";
import Button from "../../UI/Button/Button";
const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={FormStyle}>
      <div className={FormStyle.headStyle}>
        <form onSubmit={submitHandler}>
          <div className={FormStyle.inputs}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </form>
        <div className={FormStyle.botOption}>
          <div>
            <a href="asdasd">Forgot password</a>
          </div>
          <div className={FormStyle.line}></div>
          <div className={FormStyle.btn}>
            <button>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
