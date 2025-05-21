import { useTranslation } from "react-i18next";
import Metatag from "../../components/resusable/meta-tag";
import AllBlogs from "./_components/all-blogs";

const Blog = () => {

    const {t} = useTranslation('meta');

    return (
        <div>
            <Metatag title={t('blog.title')} description={t('blog.description')} />
            <AllBlogs />
            
        </div>
    );
}

export default Blog;