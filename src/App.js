import AppStyle from "./App.module.css";
import LogoSection from "./Components/Main/Logo/Logo";
import FormSection from "./Components/Main/Form/Form";
function App() {
  return (
    <div className={AppStyle.content}>
      <LogoSection />
      <FormSection />
    </div>
  );
}

export default App;
