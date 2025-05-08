import React from "react";

export default function Logoutbtn() {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3002/logout", {
        method: "POST",
        credentials: "include", // Important to send cookies
      });

      if (response.ok) {
        const result = await response.json();
        alert(result); // or show a toast, or redirect
        // Optionally, redirect to login page:
        window.location.href = "http://localhost:3000";
      } else {
        alert("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button className="btn btn-outline-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}