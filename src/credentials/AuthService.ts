// Sigin and singout controllers doesnt working. 

import axios from "axios";
import cookie from "js-cookie";

const API_URL: string = 'http://3.75.226.182:8080/'
class AuthService {
  login(email: string, password: string) {
    const logindata = {
      email: email,
      password: password,
    };

    return axios
      .post(API_URL + "api/auth/signin", logindata)
      .then((response) => {
        if (response.status === 200) {
          console.log(cookie.get("userInfoToken"))
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  }

  logout() {
    return axios
      .post(API_URL + "api/auth/signout", { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          if (cookie.get("userInfoToken")) {
            cookie.remove("userInfoToken");
          }
          window.location = "/" as unknown as Location;
        } else {
          if (cookie.get("userInfoToken")) {
            cookie.remove("userInfoToken");
          }
          return false;
        }
      })
      .catch(() => {
        if (cookie.get("userInfoToken")) {
          cookie.remove("userInfoToken");
        }
        return false;
      });
  }

  getCurrentUser() {
    if (cookie.get("userInfoToken")) {
      var userprops = cookie.get("userInfoToken");
      return JSON.parse(userprops as string );
    } else {
      return false;
    }
  }

  hasOne(roles: any) {
    const user = this.getCurrentUser();
    var has = false;
    var userRoles = user.roles;
    roles.forEach(function (item: any, idx: any) {
      if (userRoles.includes(item)) {
        has = true;
      }
    });
    return has;
  }

  hasAll(roles: any) {
    const user = this.getCurrentUser();
    var userRoles = user.roles;
    var has = true;
    roles.forEach(function (item: any, idx: any) {
      if (!userRoles.includes(item)) {
        has = false;
      }
    });
    return has;
  }
}

export default new AuthService();
