// import { Link } from "react-router-dom";
// import BlogCard from "../../../components/resusable/blog-card";
// import { useTranslation } from "react-i18next";
// import GlobalPagination from "../../../components/resusable/pagination";
// import { blogs } from "../../../data/blogs";


// const AllBlogs = () =>{

//     const {t} = useTranslation('home')

//     return (
//         <div className=" my-10 p-5">
//             <div className="flex justify-between my-5">
//                 <h3 className="text-lg font-bold">{t('recentPost.title')}</h3>
//                 <Link to="/blogs">
//                     <p className="text-secondary underline">{t('recentPost.view')}</p>
//                 </Link>
//             </div>
//             <div>
//                 {blogs && blogs.map((blog) =>(
//                     <BlogCard 
//                         image={blog.image}
//                         title={blog.title}
//                         subtitle={blog.subtitle}
//                         publisedDate={blog.publisedDate}
//                         category={blog.category}
//                     />
//                 ))}
//                 {/* <BlogCard image="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" />
//                 <BlogCard image="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" /> */}
//                 <GlobalPagination />
//             </div>
//         </div>
//     );
// }

// export default AllBlogs;


import { Link } from "react-router-dom";
import BlogCard from "../../../components/resusable/blog-card";
import { useTranslation } from "react-i18next";
import GlobalPagination from "../../../components/resusable/pagination";
import { blogs } from "../../../data/blogs"; // static array
import { useState } from "react";

const AllBlogs = () => {
  const { t } = useTranslation("home");
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;
  const totalPages = Math.ceil(blogs.length / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);

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
              <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                subtitle={blog.subtitle}
                publisedDate={blog.publisedDate}
                category={blog.category}
              />
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
