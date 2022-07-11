import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate, } from "react-router-dom";
import ListRS from "pages/ListRS";
import Contents from "./components/Contents";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App flex">
      <BrowserRouter basename="/">
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
            <Route path='/404' element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;