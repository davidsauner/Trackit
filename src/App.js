import { GlobalStyle } from "./data/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Habits from "./components/Habits/Habits";
import Today from "./components/Today/Today";
import Historic from "./components/Historic/Historic";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/today" element={<Today />} />
          <Route path="/historic" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
