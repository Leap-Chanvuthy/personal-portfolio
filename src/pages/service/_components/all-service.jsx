import { enAllServices } from "../../../data/all-service-en"
import { TbWorldWww , TbBrandFigma } from "react-icons/tb";
import { GrSystem , GrArticle } from "react-icons/gr";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GrVmMaintenance } from "react-icons/gr";


const AllServices = () => {
  return (
    <div>
      {enAllServices.map((service , index) => (
        <div key={index}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
      
    </div>
  )
}

export default AllServices
