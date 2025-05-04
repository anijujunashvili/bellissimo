import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/main";
import InnerPagesLayout from "@/layouts/inner-pages";
import { PAGES_ROUTE } from "./pages";
import { INNER_PAGES_ROUTE } from "./pages/inner_pages";

const AppRouts = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<MainLayout />}>{PAGES_ROUTE}</Route>
            <Route element={<InnerPagesLayout />}>{INNER_PAGES_ROUTE}</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouts;
