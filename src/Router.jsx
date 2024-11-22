import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/Layout/index.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import ExperienceSheetPage from "./pages/ExperienceSheetPage";
import LoginPage from "./pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sheet-list" element={<ExperienceSheetPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
