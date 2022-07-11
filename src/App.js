import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListRS from "pages/ListRS";
import Contents from "./components/Contents";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Contents type="home" />} />
            <Route path='/inventory' element={<Contents type="inventory" />} />
            <Route path='/medical-record' element={<Contents type="medical-record" />} />
            <Route path='/finance' element={<Contents type="finance" />} />
            <Route path='/hr' element={<Contents type="human-resource" />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/list-rs' element={<ListRS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;