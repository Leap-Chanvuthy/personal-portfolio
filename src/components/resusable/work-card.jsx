import { Badge } from "flowbite-react";


const WorkCard = ({image , title , badge , subtitle}) =>{

    return (
        <div className="flex gap-5 items-start">
            <img src={image} alt="work" className="w-56 h-40 object-cover rounded-lg" />
            <div className="flex flex-col gap-2 mt-3">
                <h2 className="font-bold">{title}</h2>
                <div className="flex flex-wrap gap-2">
                    <Badge>{badge}</Badge>
                </div>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}


export default WorkCard;