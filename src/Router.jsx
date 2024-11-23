import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/Layout/index.jsx";
import HomePage from "/src/pages/HomePage.jsx";
import ExperienceSheetPage from "./pages/ExperienceSheetPage";
import WriteLetterPage from "/src/pages/WriteLetterPage.jsx";
import CompleteLetterPage from "/src/pages/CompleteLetterPage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience-sheet" element={<ExperienceSheetPage />} />
          <Route path="/write-letter" element={<WriteLetterPage />} />
          <Route path="/complete-letter" element={<CompleteLetterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
