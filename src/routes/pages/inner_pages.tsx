import { lazy, Suspense } from "react";
import { APP_PATHS } from "../enum";
import { Route } from "react-router-dom";
import Loader from "../../components/loader";

const GalleryLazy = lazy(() => import("@/pages/gallery"));
const MenuLazy = lazy(() => import("@/pages/menu"));

export const INNER_PAGES_ROUTE = [
  <Route
    path={APP_PATHS.GALLERY}
    element={
      <Suspense fallback={<Loader />}>
        <GalleryLazy />
      </Suspense>
    }
    key={APP_PATHS.GALLERY}
  />,
  <Route
    path={APP_PATHS.MENU}
    element={
      <Suspense fallback={<Loader />}>
        <MenuLazy />
      </Suspense>
    }
    key={APP_PATHS.MENU}
  />,
];
