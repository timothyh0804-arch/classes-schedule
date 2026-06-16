import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { useAuthActions } from "@convex-dev/auth/react";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Layout() {
  const navigate = useNavigate();
  const user = useQuery(api.users.getUser);
  const { signOut } = useAuthActions();

  return (
    <div className="h-screen flex flex-col" data-theme="light">
      <nav className="bg-base-300 p-4 flex justify-between">
        {/* menus */}
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Home
          </NavLink>
        </div>

        {/* user info */}
        <div>
          <Authenticated>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-primary">
                🧑‍🦱 {user?.email.split("@")[0]}
              </span>
              {user?.isAdmin && (
                <Link to="/admin/course-list" className="text-xs bg-primary text-primary-content px-2 py-1 rounded">
                  Admin
                </Link>
              )}
              <button className="btn btn-sm" onClick={() => signOut()}>
                Logout
              </button>
            </div>
          </Authenticated>
          <Unauthenticated>
            <NavLink to="/login">
              <button className="btn btn-sm">Login</button>
            </NavLink>
          </Unauthenticated>
        </div>
      </nav>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
