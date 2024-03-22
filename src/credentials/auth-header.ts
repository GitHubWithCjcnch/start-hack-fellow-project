import AuthService from "./AuthService";

function authHeader() {
  const user = AuthService.getCurrentUser();

  if (user && user.accessToken) {
    return { "Content-Type": "application/json" };
  } else {
    return {};
  }
}

export default authHeader;
