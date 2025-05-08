import React from "react";

export default function Logoutbtn() {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3002/logout", {
        method: "POST",
        credentials: "include", // Send cookies
      });

      if (response.ok) {
        const result = await response.json();
        alert(result);
        window.location.href = "http://localhost:3000";
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
