import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Logoutbtn() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("accessToken");
  const handleLogout = async () => {
    try {
      const response = await fetch("https://zerodha-clone-oqrc.onrender.com/logout", {
        method: "POST",
        credentials: "include", // Send cookies
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const result = await response.json();


        localStorage.removeItem("accessToken");
        dispatch(logout())
        alert(result);
        
        window.location.href = "https://zerodha-clone-r7g5.vercel.app";
      } else {
        alert("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      className="btn btn-link bg-white text-black text-decoration-none"
      style={{ fontSize: "1rem" }}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
