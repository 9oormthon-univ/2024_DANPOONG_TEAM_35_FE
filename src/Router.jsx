import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/Layout/index.jsx";
import HomePage from "/src/pages/HomePage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
