import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "../layouts/main";
import InnerPagesLayout from "@/layouts/inner-pages";
import { PAGES_ROUTE } from "./pages";
import { INNER_PAGES_ROUTE } from "./pages/inner_pages";
import { DefaultLang } from "@/locale";

const AppRouts = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path=":lang">
            <Route element={<MainLayout />}>{PAGES_ROUTE}</Route>
            <Route element={<InnerPagesLayout />}>{INNER_PAGES_ROUTE}</Route>
          </Route>
          <Route path="*" element={<Navigate to={`/${DefaultLang}`} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouts;
