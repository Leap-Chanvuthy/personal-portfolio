import { Link } from "react-router-dom";
import BlogCard from "../../../components/resusable/blog-card";
import { useTranslation } from "react-i18next";
import GlobalPagination from "../../../components/resusable/pagination";
import { blogs } from "../../../data/blogs";
import { useState } from "react";
import { motion } from "framer-motion";

const AllBlogs = () => {
    const { t } = useTranslation("home");
    const [currentPage, setCurrentPage] = useState(1);

    const itemPerPage = 5;
    const totalPages = Math.ceil(blogs.length / itemPerPage);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    const handlePageChange = (page) => setCurrentPage(page);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="my-10 p-5">
            <div className="flex justify-between my-5">
                <h3 className="text-lg font-bold">{t("recentPost.title")}</h3>
                <Link to="/blogs">
                    <p className="text-secondary underline">{t("recentPost.view")}</p>
                </Link>
            </div>
            <div>
                {currentBlogs.map((blog) => (
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

                {/* Reusable pagination component */}
                <GlobalPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemPerPage={itemPerPage}
                    data={blogs}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default AllBlogs;
