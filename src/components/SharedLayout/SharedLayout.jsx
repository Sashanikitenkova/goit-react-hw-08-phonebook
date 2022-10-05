import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Register</Link>
          <Link to="/products">Log in</Link>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};