import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { Navbar, PageNotFound, Footer } from './components';
import { AboutPage, LandingPage, PeoplePage, AcademicsPage, ActivitiesPage, ContactPage, PlacementsPage, ResourcesPage, AchievementsPage, ClubsPage, FacilitiesPage, FacilitiesAdmin, ClubProfilePage, FacultyProfilePage } from './pages';
import Login from "./pages/Admin/Auth/Login/Login";
import Profile from "./pages/Admin/Profile/Profile";
import Register from "./pages/Admin/Auth/Register/Register";


import ScrollToTop from "./utils/ScrollToTop"
import ProtectedRoutes from "./components/Admin/ProtectedRoutes";
import FacultyUpdate from "./components/People/Faculty/FacultyProfileUpdate/FacultyUpdate";
import FacultyLogin from "./components/People/Faculty/FacultyLogin/FacultyLogin";
import FacultyProtectedRoutes from "./components/People/Faculty/FacultyProtectedRoutes";
import ClubLogin from "./components/Activities/ClubProfile/ClubLogin/ClubLogin";
import FacultyChangePassword from "./components/People/Faculty/FacultyChangePassword";
import ClubProtectedRoutes from "./components/Activities/ClubProfile/ClubProtectedRoutes";
import ClubUpdate from "./components/Activities/ClubProfile/ClubUpdate/ClubUpdate";
import ClubChangePassword from "./components/Activities/ClubProfile/ClubChangePassword/ClubChangePassword";
import EventAdd from "./components/Activities/Events/EventAdd/EventAdd";
// import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="placements" element={<PlacementsPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="clubs/:id" element={<ClubProfilePage />} />
          <Route path="faculty/:id" element={<FacultyProfilePage />} />

          <Route path="*" element={<PageNotFound />} />

          {/* ------- ADMIN ROUTES ------ */}
          <Route path="admin-register" element={<Register />} />
          <Route path="admin-login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="admin-profile" element={<Profile />} />
            <Route path="admin-achievements" element={<AchievementsPage />} />
            <Route path="admin-facilities" element={<FacilitiesAdmin />} />
            <Route path="admin-clubs" element={<ClubsPage />} />
          </Route>

          {/* ------- FACULTY AUTH ROUTES ------ */}
          <Route path="faculty/login" element={<FacultyLogin />} />

          <Route element={<FacultyProtectedRoutes />}>
            <Route path="faculty/:id/update" element={<FacultyUpdate />} />
            <Route path="faculty/:id/change-password" element={<FacultyChangePassword />} />
          </Route>

          {/* ------- CLUB AUTH ROUTES ------ */}
          <Route path="clubs/login" element={<ClubLogin />} />

          <Route element={<ClubProtectedRoutes />}>
            <Route path="clubs/:id/update" element={<ClubUpdate />} />
            <Route path="clubs/:id/change-password" element={<ClubChangePassword />} />
            <Route path="clubs/:id/add-event" element={<EventAdd />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
