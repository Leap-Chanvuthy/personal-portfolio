import { Link } from "react-router-dom";
import BlogCard from "../../../components/resusable/blog-card";
import { useTranslation } from "react-i18next";


const RecentPost = () =>{

    const {t} = useTranslation('home')

    return (
        <div className="bg-secondary_light dark:bg-dark my-10 p-5">
            <div className="flex justify-between my-5">
                <h3 className="text-lg font-bold">{t('recentPost.title')}</h3>
                <Link to="/blogs">
                    <p className="text-secondary underline">{t('recentPost.view')}</p>
                </Link>
            </div>
            <div>
                <BlogCard image="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" />
                <BlogCard image="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" />
            </div>
        </div>
    );
}

export default RecentPost;