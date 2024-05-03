const ServiceCard = ({ service }) => {
  console.log(service);

  const { img, title, price } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img  src={img} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-[#FF3811]">Price: {price} $</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
