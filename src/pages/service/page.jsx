import WhyWorkingWithMe from "./_components/why-working-with-me";
import TechStacks from "../../components/resusable/techstacks";

const Service = () => {
    return (
        <div className="flex flex-col gap-10 my-28">
            <WhyWorkingWithMe />
            <TechStacks />
        </div>
    )
}

export default Service;