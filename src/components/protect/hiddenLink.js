import { Link } from "react-router-dom";

const { useSelector } = require("react-redux");
const {
  selectIsLoggedIn,
  selectUser,
} = require("../../redux/features/auth/authSlice");

const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export const AdminOnlyLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.role === "admin") {
    return children;
  }
  return null;
};

export const AdminOnlyPage = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.role === "admin") {
    return children;
  }
  return (
    <div className="--center-all" style={{ minHeight: "80vh" }}>
      <h2>Unauthorised Access</h2>
      <p style={{ width: "500px" }}>
        "Oops, your current credentials do not allow you to view this page
        content. Contact Admin for authorisation."
      </p>
      <br />
      <Link to={"/"}>
        <button className="--btn --btn-primary">Back To Menu</button>
      </Link>
    </div>
  );

  return null;
};

export const RestrictSuspendedUser = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.role === "suspended") {
    return (
      <div className="--center-all" style={{ minHeight: "80vh" }}>
        <h2>Account Suspended!</h2>
        <p style={{ width: "500px" }}>
          "Oops, your account is under suspension. Contact Admin for
          authorisation."
        </p>
        <br />
        <Link to={"/"}>
          <button className="--btn --btn-primary">Back To Menu</button>
        </Link>
      </div>
    );
  }
  return children;
};

export default ShowOnLogin;
