import React from "react";
import { message } from "antd";

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
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log("data", data);
    } else if (response.status === 400 || response.status === 500) {
      const dataError = await response.text();
      console.log("data", dataError);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
