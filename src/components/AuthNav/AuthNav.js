import { NavAuth } from "./AuthNav.styled";


export const AuthNav = () => {
  return (
    <div>
      <NavAuth to="/register">Register</NavAuth>
      <NavAuth to="/login">Log In</NavAuth>
    </div>
  );
};