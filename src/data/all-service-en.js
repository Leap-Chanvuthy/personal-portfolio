import { TbWorldWww , TbBrandFigma } from "react-icons/tb";
import { GrSystem , GrArticle } from "react-icons/gr";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GrVmMaintenance } from "react-icons/gr";

export const enAllServices = [
  {
    slug: "professional-web-design",
    icon: TbBrandFigma,
    title: "Professional Web Design",
    description: "Creating visually appealing and user-friendly websites tailored to your brand identity and target audience.",
  },
  {
    slug: "website-development",
    icon: TbWorldWww,
    title: "Responsive Website Development",
    description: "Developing websites that provide an optimal viewing experience across a wide range of devices.",
  },
  {
    slug: "custom-web-application-development",
    icon: GrSystem,
    title: "Custom Web Application Development",
    description: "Building scalable and robust web applications.",
  },
  {
    slug: 'custom-cms-development',
    icon: GrArticle,
    title: "Custom CMS Development",
    description: "Custom CMS for easy content management.",
  },
  {
    slug: 'mobile-app-development',
    icon: HiDevicePhoneMobile,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android.",
  },
  {
    slug: 'website-maintenance-and-support',
    icon: GrVmMaintenance,
    title: "Website Maintenance and Support",
    description: "Ongoing support and website maintenance.",
  },
];
