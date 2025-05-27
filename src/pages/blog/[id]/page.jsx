import { useTranslation } from "react-i18next";
import Metatag from "../../../components/resusable/meta-tag";
import NavigationButton from "../../../components/resusable/navigation-button";
import { useParams } from "react-router-dom";
import { blogs } from "../../../data/blogs";
import { Badge } from "flowbite-react";

const BlogDetail = () => {

    const { i18n } = useTranslation('meta');
    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id === parseInt(id));
    if (!blog) {
        return <div className="text-center my-10">Blog not found</div>;
    }

    return (
        <div className="mx-5 lg:md:mx-auto">
            {i18n.language == "en" ?
                <Metatag title={`${blog.category} | Leap Chanvuthy`} description={blog.subtitle} />
                :
                <Metatag title={`${blog.category} | លាភ​ ច័ន្ទវុទ្ធី`} description={blog.subtitle} />
            }
            <div className="my-10">
                <NavigationButton />
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                    <p>{blog.subtitle} | {blog.publisedDate}</p>
                    <div className="flex flex-wrap gap-2">
                        <Badge color="gray">{blog.category}</Badge>
                    </div>
                </div>
                <img className="w-full h-[35rem] object-cover rounded-lg" src={blog.image} />
                <div dangerouslySetInnerHTML={{ __html: blog.body }} />
            </div>
        </div>
    )
}

export default BlogDetail;