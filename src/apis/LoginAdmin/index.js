import React from "react";
import { message } from "antd";
import Cookies from "js-cookie";

export const cookieValue = Cookies.get("QLNT_Cookie");

export const login = async (staffLogin) => {
  const loginAdminUrl =
    "https://qlnt-api.azurewebsites.net/api/auth/staff/login";
  try {
    const response = await fetch(loginAdminUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staffLogin),
      withCredentials: true,
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json();
      // Check for Set-Cookie header
      const setCookieHeader = response.headers.get("Set-Cookie");
      if (setCookieHeader) {
        // Process the cookie header as needed
        console.log("Set-Cookie Header:", setCookieHeader);
      }
      // console.log("response.headers", response.headers);
      // if (response.headers.containsKey("set-cookie")) {
      //   let rawCookie = response.headers["set-cookie"];
      //   let cookies = rawCookie
      //     .split(",")
      //     .map((c) => {
      //       return c.split(";")[0];
      //     })
      //     .toList();
      //   console.log("Cookies:", cookies);

      //   // Store cookies
      //   await prefs.setString("cookies", cookies.join("; "));
      // } else {
      //   console.log("No cookies found in response");
      // }
      return 1;
    } else if (response.status === 400 || response.status === 500) {
      const dataError = await response.text();
      console.log("data", dataError);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getCookie = async () => {
  const getCookieUrl = "https://qlnt-api.azurewebsites.net/api/auth/check-auth";
  console.log("getCookieUrl", cookieValue);
  try {
    const response = await fetch(getCookieUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieValue,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log("data", data);
      return 1;
    } else if (response.status === 400 || response.status === 500) {
      const dataError = await response.text();
      console.log("data", dataError);
    } else if (response.status === 404) {
      console.log("404");
    } else if (response.status === 401) {
      console.log("401");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
