import { useEffect, useRef } from "react";
import { Badge } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const EnProjectDetail = ({ project }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#project-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => lightbox.destroy();
    }, []);

    return (
        <div className="flex flex-col gap-10">
            {/* Title, subtitle and badges */}
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p>{project.subtitle}</p>
                <div className="flex flex-wrap lg:md:flex-row items-center gap-3">
                    {project.tags?.map((badge, index) => (
                        <div key={index} className="flex flex-wrap gap-2">
                            <Badge color="gray">{badge}</Badge>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main preview image */}
            <img
                className="w-full lg:md:h-[35rem] object-cover rounded-lg"
                src={project.images[0]}
                alt="main"
            />

            {/* GitHub links */}
            <div>
                <h3>Github Repositories</h3>
                <div className="flex flex-col gap-3 mt-5">
                    {project.githubRepo?.map((git, index) => (
                        <a
                            key={index}
                            className="flex gap-3 items-center"
                            href={git.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="text-2xl" />
                            <p>{git.title}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Project body */}
            <div dangerouslySetInnerHTML={{ __html: project.body }} />

            {/* Image Gallery */}
            <h3 className="font-bold">Some images</h3>
            <div
                className="grid bg-gray-100 dark:bg-gray-800 grid-cols-1 lg:md:grid-cols-2 gap-5"
                id="project-gallery"
                ref={galleryRef}
            >
                {project.images.map((img, index) => (
                    <a
                        key={index}
                        href={img}
                        data-pswp-width="1380"
                        data-pswp-height="800"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-full lg:md:h-[20rem] object-cover rounded-lg"
                            src={img}
                            alt={`project-image-${index}`}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default EnProjectDetail;
