import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { RecoilRoot } from "recoil";
import ManagerView from "./components/ManagerView";
import AddEmployee from "./components/UserView";
import HrHomePage from "./components/HrHomePage";
import Template1 from "./components/template/Template1";
import Template2 from "./components/template/Template2";
import Template3 from "./components/template/Template3";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
   <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/hrpage" element={<HrHomePage />} />
          <Route path="/" element={<ManagerView />} />
          <Route path="/userView" element={<AddEmployee />} />
          <Route path="/template1" element={<Template1/>}></Route>
          <Route path="/template2" element={<Template2/>}></Route>
          <Route path="/template3" element={<Template3/>}></Route>

        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
