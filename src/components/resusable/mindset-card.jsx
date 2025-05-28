

const MindsetCard = ({title , body , img}) =>{
    return (
        <div className="flex flex-col lg:md:flex-row justify-between gap-10 hover:bg-secondary_light cursor-pointer p-5 rounded-md hover:text-dark">
            <img className="w-36 rounded-sm" src={img || "/images/why-choose-me/fullstack-development.svg"} />
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg text-secondary">{title || 'Reliable and Easy Going'}</h1>
                <p className="text-start lg:md:text-justify">{body || "I offer a hands-on, client-focused web development service — from frontend design to backend logic — making me your one-stop solution for building responsive websites, web apps, and management systems. With strong problem-solving skills, adaptability, and a full-stack approach, I bring reliability, flexibility, and modern tech expertise to every project."}</p>
            </div>
        </div>
    )
}

export default MindsetCard;