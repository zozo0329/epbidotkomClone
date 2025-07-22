import AppStyle from "./App.module.css";
import LogoSection from "./Components/Main/Logo/Logo";
import FormSection from "./Components/Main/Form/Form";
import { useState } from "react";
function App() {
  const [mainbtn, setMainbtn] = useState(true);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const btn1Handler = () => {
    setBtn1(false);
    setBtn2(true);
  };
  const btn2handler = () => {
    setBtn2(false);
    setMainbtn(true);
  };
  return (
    <div>
      <div className={AppStyle.content}>
        <LogoSection />
        <FormSection
          setBtn1={setBtn1}
          mainbtn={mainbtn}
          setMainbtn={setMainbtn}
        />
      </div>
      <div>
        {btn1 && (
          <button onClick={btn1Handler} className={AppStyle.btns1}>
            Login
          </button>
        )}
        {btn2 && (
          <button onClick={btn2handler} className={AppStyle.btns2}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
