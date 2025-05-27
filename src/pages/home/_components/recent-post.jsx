import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../../components/resusable/blog-card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { blogs } from "../../../data/blogs";
import GlobalPagination from "../../../components/resusable/pagination";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};


const RecentPost = () => {

    const { t } = useTranslation("home");

    return (
        <div className="bg-secondary_light dark:bg-dark my-10 p-5">
            <div>
                <div className="p-5">
                    <div className="flex justify-between my-5">
                        <h3 className="text-lg font-bold">{t("recentPost.title")}</h3>
                        <Link to="/blogs">
                            <p className="text-secondary underline">{t("recentPost.view")}</p>
                        </Link>
                    </div>
                    <div>
                        {blogs.slice(-3).map((blog) => (
                            <Link to={`/blog/${blog.id}`}>
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <BlogCard
                                        key={blog.id}
                                        image={blog.image}
                                        title={blog.title}
                                        subtitle={blog.subtitle}
                                        publisedDate={blog.publisedDate}
                                        category={blog.category}
                                    />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentPost;