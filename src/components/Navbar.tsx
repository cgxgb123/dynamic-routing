import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/blog">Blog</Link>

      {!isAuthenticated ? (
        <Link to="/login">Log In</Link>
      ) : (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </nav>
  );
}
