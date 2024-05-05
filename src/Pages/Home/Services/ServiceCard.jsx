import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-[#FF3811]">Price: {price} $</p>

          <Link to={`/checkout/${_id}`}>
        <button className="btn btn-primary">BOOK NOW</button>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
