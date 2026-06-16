import { Outlet, Route, Routes, Navigate, Link } from "react-router";
import Layout from "./components/layout";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ClassesList from "./pages/classesList";
import MainSchedule from "./pages/mainSchedule";
import ScheduleDetails from "./pages/scheduleDetails";
import { Authenticated, Unauthenticated } from "convex/react";
import CourseList from "./pages/admin/course-list";
import PeriodList from "./pages/admin/period-list";

export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<AuthenticatedLayout />}>
          <Route path="/classesList" element={<ClassesList />} />
          <Route path="/mainSchedule" element={<MainSchedule />} />
          <Route path="/scheduleDetails" element={<ScheduleDetails />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/course-list" element={<CourseList />} />
            <Route path="/admin/period-list" element={<PeriodList />} />
          </Route>
        </Route>
        
      </Route>
    </Routes>
  );
}

function AuthenticatedLayout() {
  return (
    <>
    <Authenticated>
      <Outlet />
    </Authenticated>
    <Unauthenticated>
      <Navigate to="/login" />
    </Unauthenticated>
    </>
  );
}

function AdminLayout() {

  // TODO: check admin privileges

  return (
    <>
      <div className="flex items-center gap-2">
        <Link to="/admin/course-list" className="btn btn-sm">Courses</Link>
        <Link to="/admin/period-list" className="btn btn-sm">Periods</Link>
      </div>
      <div className="divider"></div>
      <Outlet />
    </>
  );
}
