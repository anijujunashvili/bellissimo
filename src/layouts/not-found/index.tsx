import { Outlet } from "react-router-dom";
import { PropsWithChildren } from "react";

const NotFoundLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      not found layout
      {children || <Outlet />}
    </main>
  );
};

export default NotFoundLayout;
