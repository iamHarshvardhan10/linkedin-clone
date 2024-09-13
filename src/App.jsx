import Homepage from "./components/core/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/page/SignIn";
import JoinNow from "./components/page/JoinNow";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/join-now" element={<JoinNow/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
