import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id ,price,img} = service;
  const { user } = useContext(AuthContext)

  console.log(service)
  
  const handelBookService = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email.value;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service:title,
      service_id: _id,
      price: price
    }
    console.log(order)
    
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('successfully added')
        }
    })

  }



  return (
    <div>
      <h2>BOOK SERVICES: {title}</h2>

      <div>
        <form onSubmit={handelBookService} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
             name="name" defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email" defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Dew amount</span>
            </label>
            <input
              type="text"
              placeholder="password" defaultValue={price}
              className="input input-bordered"
              required
            />
          </div>

            
        
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
