import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HistoryPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProvider from "./contexts/UserContext"
import ProgressProvider from "./contexts/ProgressContext"

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </UserProvider>
      </ProgressProvider>
    </BrowserRouter>
  )
}