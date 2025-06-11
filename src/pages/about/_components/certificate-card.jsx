// import { motion } from "framer-motion";

// const fadeInLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
// };

// const CertificateCard = () => {
//     const certificates = [
//         {
//             title: "Prometeus Internship",
//             body: "Successfully completed a 4 months software engineering internship at Prometeus, where I gained hands-on experience in full-stack web development, agile methodologies, and collaborative teamwork. Contributed to real-world projects using React, Node.js, and modern JavaScript frameworks, while enhancing my problem-solving, communication, and project management skills in a dynamic tech environment.",
//             image: "/images/certificates/internship-prometeus.svg",
//         },
//         {
//             title: "I4D 2.0 Internship by GIZ Cambodia",
//             body: "After successfully finished this internship, I get a certificate of internship that is signed and approved by CADT and GIZ Cambodia for comtributed I4D program (Innovation for Development) that help Banana Center Cambodia digitalized their company.",
//             image: "/images/certificates/internship-giz.jpeg",
//         },
//         {
//             title: "I4D 2.0 Internship by GIZ Cambodia",
//             body: "After successfully finished this internship, I get a certificate of internship that is signed and approved by CADT and GIZ Cambodia for comtributed I4D program (Innovation for Development) that help Banana Center Cambodia digitalized their company.",
//             image: "/images/certificates/internship-giz.jpeg",
//         },
//     ];

//     return (
//         <div className="mx-4 md:mx-10 lg:md:mx-0 scroll-mt-32" id="certificates">
//             <h3 className="font-bold text-2xl lg:md:text-2xl mb-6">Certificates</h3>
//             <div className="space-y-8">
//                 {certificates.map((cert, idx) => (
//                     <motion.div
//                         key={idx}
//                         variants={fadeInLeft}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.2 }}
//                         transition={{ duration: 0.5, delay: idx * 0.15 }}
//                     >
//                         <Card
//                             key={idx}
//                             title={cert.title}
//                             body={cert.body}
//                             src={cert.image}
//                             reverse={idx % 2 === 1}
//                         />
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CertificateCard;

// const Card = ({ title, body, src, reverse }) => {
//     return (
//         <div
//             className={`
//                 flex flex-col md:flex-row
//                 ${reverse ? "md:flex-row-reverse" : ""}
//                 gap-6 md:gap-10 items-center md:items-start
//                 bg-white dark:bg-dark rounded-lg  p-4
//             `}
//         >
//             <img
//                 src={src}
//                 alt={title}
//                 className="w-40 h-28 md:w-72 md:h-48 object-contain mb-4 md:mb-0 select-none"
//                 draggable={false}
//             />
//             <div className="flex flex-col items-center md:items-start max-w-xl">
//                 <h4 className="font-semibold text-lg mb-2 text-center md:text-left">{title}</h4>
//                 <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">{body}</p>
//             </div>
//         </div>
//     );
// };


import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css"; // Required PhotoSwipe styles

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

    const certificates = [
        {
            title: "Prometeus Internship",
            body: "Successfully completed a 4 months software engineering internship at Prometeus, where I gained hands-on experience in full-stack web development, agile methodologies, and collaborative teamwork. Contributed to real-world projects using React, Node.js, and modern JavaScript frameworks, while enhancing my problem-solving, communication, and project management skills in a dynamic tech environment.",
            image: "/images/certificates/internship-prometeus.svg",
            width: 1200,
            height: 800,
        },
        {
            title: "I4D 2.0 Internship by GIZ Cambodia",
            body: "After successfully finished this internship, I get a certificate of internship that is signed and approved by CADT and GIZ Cambodia for comtributed I4D program (Innovation for Development) that help Banana Center Cambodia digitalized their company.",
            image: "/images/certificates/internship-giz.jpeg",
            width: 1200,
            height: 800,            
        },
        {
            title: "I4D 2.0 Internship by GIZ Cambodia",
            body: "After successfully finished this internship, I get a certificate of internship that is signed and approved by CADT and GIZ Cambodia for comtributed I4D program (Innovation for Development) that help Banana Center Cambodia digitalized their company.",
            image: "/images/certificates/internship-giz.jpeg",
            width: 1200,
            height: 800,
        },
    ];

const CertificateCard = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#certificates-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <div className="mx-4 md:mx-10 lg:mx-0 scroll-mt-32" id="certificates">
            <h3 className="font-bold text-2xl lg:text-2xl mb-6">Certificates</h3>

            <div
                className="space-y-8"
                id="certificates-gallery"
                ref={galleryRef}
            >
                {certificates.map((cert, idx) => (
                    <motion.a
                        key={idx}
                        href={cert.image}
                        data-pswp-width={cert.width}
                        data-pswp-height={cert.height}
                        target="_blank"
                        rel="noreferrer"
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="block"
                    >
                        <Card
                            title={cert.title}
                            body={cert.body}
                            src={cert.image}
                            reverse={idx % 2 === 1}
                        />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default CertificateCard;

const Card = ({ title, body, src, reverse }) => {
    return (
        <div
            className={`
                flex flex-col md:flex-row
                ${reverse ? "md:flex-row-reverse" : ""}
                gap-6 md:gap-10 items-center md:items-start
                bg-white dark:bg-dark rounded-lg p-4
            `}
        >
            <img
                src={src}
                alt={title}
                className="w-40 h-28 md:w-72 md:h-48 object-contain mb-4 md:mb-0 select-none"
                draggable={false}
            />
            <div className="flex flex-col items-center md:items-start max-w-xl">
                <h4 className="font-semibold text-lg mb-2 text-center md:text-left">
                    {title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
                    {body}
                </p>
            </div>
        </div>
    );
};
