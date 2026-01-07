import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header style={{ background: "white", borderBottom: "1px solid #e5e7eb" }}>
      <nav
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/blog" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
          Blog
        </Link>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {!isAuthenticated ? (
            <Link to="/login">Log In</Link>
          ) : (
            <>
              <Link to="/admin">Admin</Link>
              <button onClick={logout}>Log Out</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
