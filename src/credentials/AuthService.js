import axios from "axios";
import cookies from "js-cookies";

class AuthService {
  login(email, password, path) {
    const logindata = {
      email: email,
      password: password,
    };

    return axios
      .post(API_URL + "api/auth/signin", logindata)
      .then((response) => {
        if (response.status == 200) {
          window.location = path;
        } else {
          return false;
        }
      })
      .catch((e) => {
        return false;
      });
  }

  logout() {
    return axios
      .post(API_URL + "api/auth/signout", { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          if (cookies.getItem("userInfoToken")) {
            cookies.removeItem("userInfoToken");
          }
          window.location = "/";
        } else {
          if (cookies.getItem("userInfoToken")) {
            cookies.removeItem("userInfoToken");
          }
          return false;
        }
      })
      .catch((e) => {
        if (cookies.getItem("userInfoToken")) {
          cookies.removeItem("userInfoToken");
        }
        return false;
      });
  }

  getCurrentUser() {
    if (cookies.getItem("userInfoToken")) {
      var userprops = cookies.getItem("userInfoToken").toString();
      return JSON.parse(userprops);
    } else {
      return false;
    }
  }

  hasOne(roles) {
    const user = this.getCurrentUser();
    var has = false;
    var userRoles = user.roles;
    roles.forEach(function (item, idx) {
      if (userRoles.includes(item)) {
        has = true;
      }
    });
    return has;
  }

  hasAll(roles) {
    const user = this.getCurrentUser();
    var userRoles = user.roles;
    var has = true;
    roles.forEach(function (item, idx) {
      if (!userRoles.includes(item)) {
        has = false;
      }
    });
    return has;
  }
}

export default new AuthService();
