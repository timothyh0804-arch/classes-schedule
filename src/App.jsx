import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ClassesList from "./pages/classesList";
import MainSchedule from "./pages/mainSchedule";
import ScheduleDetails from "./pages/scheduleDetails";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/classesList" element={<ClassesList />} />
        <Route path="/mainSchedule" element={<MainSchedule />} />
        <Route path="/scheduleDetails" element={<ScheduleDetails />} />
      </Route>
    </Routes>
  );
}
