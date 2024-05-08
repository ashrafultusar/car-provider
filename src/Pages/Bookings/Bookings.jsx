import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import BookingTable from "./BookingTable";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, [url]);

  const handelDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handelConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const update = bookings.find((booking) => booking._id === id);
          update.status = "confirm";
          const newBooking = [update, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Your Booking: {bookings.length}</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>image</th>
                <th>Service</th>
                <th>Date</th>
                <th>Favourite Color</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingTable
                  key={booking._id}
                  booking={booking}
                  handelDelete={handelDelete}
                  handelConfirm={handelConfirm}
                ></BookingTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
