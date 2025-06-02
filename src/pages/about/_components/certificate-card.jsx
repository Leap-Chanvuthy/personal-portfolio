import { motion } from "framer-motion";

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
};

const CertificateCard = () => {
    const certificates = [
        {
            title: "Prometeus Internship",
            body: "Successfully completed a 4 months software engineering internship at Prometeus, where I gained hands-on experience in full-stack web development, agile methodologies, and collaborative teamwork. Contributed to real-world projects using React, Node.js, and modern JavaScript frameworks, while enhancing my problem-solving, communication, and project management skills in a dynamic tech environment.",
            image: "/images/certificates/internship-prometeus.svg",
        },
        {
            title: "I4D 2.0 Internship by GIZ Cambodia",
            body: "After successfully finished this internship, I get a certificate of internship that is signed and approved by CADT and GIZ Cambodia for comtributed I4D program (Innovation for Development) that help Banana Center Cambodia digitalized their company.",
            image: "/images/certificates/internship-giz.jpeg",
        },
                {
            title: "I4D 2.0 Internship by GIZ Cambodia",
            body: "After successfully finished this internship, I get a certificate of internship that is signed and approved by CADT and GIZ Cambodia for comtributed I4D program (Innovation for Development) that help Banana Center Cambodia digitalized their company.",
            image: "/images/certificates/internship-giz.jpeg",
        },
    ];

    return (
        <div className="mx-10 lg:md:mx-0 scroll-mt-32" id="certificates">
            <h3 className="font-bold text-2xl lg:md:text-2xl mb-6">Certificates</h3>
            <div className="space-y-6">
                {certificates.map((cert, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={fadeInLeft}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                                        >
                    <Card
                        key={idx}
                        title={cert.title}
                        body={cert.body}
                        src={cert.image}
                        reverse={idx % 2 === 1}
                    />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CertificateCard;

const Card = ({ title, body, src, reverse }) => {
    return (
        <div className={`flex gap-10 items-center ${reverse ? "flex-row-reverse" : ""}`}>
            <img
                src={src}
                alt={title}
                className="w-72 h-48 object-contain mb-4 select-none"
                draggable={false}
            />
            <div className="flex flex-col items-start max-w-xl">
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
};