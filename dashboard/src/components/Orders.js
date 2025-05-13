// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = async() => {
//   const response = await fetch("http://localhost:3002/order", {
//     credentials: "include"
//   })
//   const result = await response.json()
 
  
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;



import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://zerodha-clone-oqrc.onrender.com/order", {
          credentials: "include",
        });
        const result = await response.json();
        if(!response.ok) {
          window.location.href = "http://localhost:3000/login"
        }
        setOrders(result);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h2 className="mb-4">Your Orders</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
        </div>
      ) : orders.length === 0 ? (
        <div className="no-orders alert alert-info text-center">
          <p>You haven't placed any orders today.</p>
          <Link to="/" className="btn btn-primary mt-3">
            Get Started
          </Link>
        </div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td>
                  <span
                    className={`badge ${
                      order.mode === "BUY" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;

