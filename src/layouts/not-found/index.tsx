import { Outlet } from "react-router-dom";

const NotFoundLayout = () => {
  return (
    <main>
      main layout
      <Outlet />
    </main>
  );
};

export default NotFoundLayout;
