import FormStyle from "./Form.module.css";
import Button from "../../UI/Button/Button";
const Form = ({ setBtn1, mainbtn, setMainbtn }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const clickHandler = () => {
    setBtn1(true);
    setMainbtn(false);
  };
  return (
    <div className={FormStyle}>
      <div className={FormStyle.headStyle}>
        <form onSubmit={submitHandler}>
          <div className={FormStyle.inputs}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div>{mainbtn && <Button onClick={clickHandler}>Login</Button>}</div>
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
