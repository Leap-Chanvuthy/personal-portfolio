import { Badge } from "flowbite-react";


const BlogCard = ({image , title , subtitle , publisedDate , category , body }) =>{

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div>
            <div className="flex flex-col lg:md:flex-row gap-5 items-start">
                <img src={image} alt="work" className="w-full lg:md:w-64 h-40 object-cover rounded-lg" />
                <div className="flex flex-col gap-2 mt-3">
                    <h2 className="font-bold">{title || "Leap Chanvuthy, Life as a coder" }</h2>
                    <div className="flex items-center flex-wrap gap-2">
                        <span className="text-sm text-gray-500">{publisedDate || "12 January 2023"}</span> | <Badge color="gray">{category || "Category"}</Badge>
                    </div>
                    <p className='text-sm'>
                        {truncateText(subtitle || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur facilisis. Donec euismod, nisi vel consectetur interdum, nisl nisi cursus nunc, eget tincidunt nunc nisl eget nunc.', 200)}
                    </p>
                </div>
            </div>
            <div className="border-[.5px] border-gray-200 dark:border-gray-600 w-full my-5" />
        </div>
    )
}
export default BlogCard;