import { useTranslation } from "react-i18next";
import { enAllServices } from "../../../data/all-service-en"
import {kmAllServices}  from "../../../data/all-services-km"


const AllServices = () => {

  const { t, i18n } = useTranslation("service");

  return (
    <section>

      {i18n.language == 'km' ? (
        <div className="font-kh">
          <h2 className="font-bold text-4xl mb-10 text-primary text-center">សេវាកម្មស្នូលរបស់ខ្ញុំ</h2>
          <div className="grid grid-cols-1 lg:md:grid-cols-3 gap-10 justify-items-center">
            {kmAllServices.map((service, index) => (
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (

        <div>
          <h2 className="font-bold text-4xl mb-10 text-primary text-center">My Core Services</h2>
          <div className="grid grid-cols-1 lg:md:grid-cols-3 gap-10 justify-items-center">
            {enAllServices.map((service, index) => (
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                key={index}
              />
            ))}
          </div>
        </div>
      )}


    </section>
  )
}


const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="hover:bg-gray-50 hover:text-primary cursor-pointer p-10 rounded-lg mx-10 lg:md:mx-0">
      <Icon size={40} className="mb-5 " />
      <h3 className="font-bold my-5">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default AllServices
