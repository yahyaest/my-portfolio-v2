"use client";
import React from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const setSessionCookie = () => {
  const session = Cookies.get("session");
  if (!session) {
    Cookies.set("session", uuidv4(), { expires: 7 });
  }
};

const getSessionCookie = () => {
  const session = Cookies.get("session");

  return session;
};

const setStats = async () => {
  try {
    const session = getSessionCookie();
    const payload = session ? { sessionId: session } : {};
    // ToDO add base_url
    const response = await fetch(`/api/stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Handle the response data as needed
    return data; // Optionally return data to the caller
  } catch (error) {
    console.error("Error fetching /api/stats:", error);
    // Handle error
    return null; // Optionally return null or handle error
  }
};
const Stats = () => {
  const session = getSessionCookie();
  if (!session) {
    setStats();
  }
  setSessionCookie();
  return <div></div>;
};

export default Stats;
