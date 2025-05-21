

const GridImage = ({image1 , image2 , image3}) =>{
    return (
        <div className="flex items-center gap-10">
            <img className="w-[146px] h-[261px] lg:md:w-[180px] lg:md:h-[314px] object-cover rounded-lg" src={image1} />
            <div className="flex flex-col gap-10">
                <img className="w-[143px] h-[202px] lg:md:w-[175px] lg:md:h-[244px] object-cover rounded-lg" src={image2} />
                <img className="w-[143px] h-[150px] lg:md:w-[175px] lg:md:h-[180px] object-cover rounded-lg" src={image3} />
            </div>
        </div>
    )
}

export default GridImage;