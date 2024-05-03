import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
            setServices(data)
        })
    })


    return (
    <div className="my-10">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">Our Service</h1>
        <p className="">
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
          </div>
          
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
           

            <div className="text-center mt-10">
            <button className="btn btn-outline btn-secondary text-[#FF3811] text-[18px] ">More Services</button>
            </div>
    </div>
  );
};

export default Services;
