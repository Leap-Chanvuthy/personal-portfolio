import BlogCard from "../../components/resusable/blog-card";
import BuyMeCoffee from "../../components/resusable/buy-me-coffee";
import GridImage from "../../components/resusable/grid-image";
import Metatag from "../../components/resusable/meta-tag";
import PrimaryBtn from "../../components/resusable/primary-btn"
import SecondaryBtn from "../../components/resusable/secondary-btn"
import SecondaryBtnOutlined from "../../components/resusable/secondary-btn-outlined";
import ServiceCard from "../../components/resusable/service-card";
import Timelines from "../../components/resusable/timeline";
import WorkCard from "../../components/resusable/work-card";
import QuillDashboard from "../../components/resusable/quill-dashboard";
import SpinnerPage from "../../components/resusable/spinner-page";
import MindsetCard from "../../components/resusable/mindset-card";
import TechStacks from "../../components/resusable/techstacks";


const Components = () =>{
    return (
        <div>
            <Metatag title="Components | All Resusable Components" />
            <h1 className="font-bold text-xl">Resuable Components</h1>
            <div className="flex flex-col lg:md:flex-row items-center gap-5 my-5">
                <PrimaryBtn text="Primary Button" />
                <SecondaryBtn text="Secondary Button" />
                <SecondaryBtnOutlined text="Secondary Outlined" />
            </div>
            <div className="flex justify-center items-center gap-5 my-5">
                <WorkCard title="Card heading" subtitle="A Job Title is the name given to a person's designation or position in a company. It is also known as a work title. It indicates your seniority level in a company. The work, roles, and responsibilities of a person depend on the job title he/she/they may have.
" badge="Hello" image="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" />
            </div>

            <div className="my-10">
                <MindsetCard />
            </div>

            <div className="my-10">
                <TechStacks />
            </div>

            {/* <SpinnerPage /> */}

            <div className="my-10">
                <QuillDashboard />
            </div>

            <Timelines />


            <div className="flex flex-col lg:md:flex-row gap-5 my-10">
                <ServiceCard iconColor="#42c2f5" />
                <ServiceCard />
                <ServiceCard />
            </div>

            <div className="my-10">
                <BuyMeCoffee />
            </div>

            <div className="my-10">
                <GridImage />
            </div>

            <BlogCard image="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" />

        </div>
    )
}

export default Components;