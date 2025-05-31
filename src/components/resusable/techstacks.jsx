const TechStacks = () => {
    const images = [
        "/images/techstacks/chatgpt.svg",
        // "/images/techstacks/copilot.svg",
        "/images/techstacks/firebase.svg",
        "/images/techstacks/github.svg",
        "/images/techstacks/js.svg",
        "/images/techstacks/laravel.svg",
        "/images/techstacks/mongodb.svg",
        "/images/techstacks/mysql.svg",
        "/images/techstacks/node.svg",
        "/images/techstacks/php.svg",
        "/images/techstacks/postman.svg",
        "/images/techstacks/react-native.svg",
        "/images/techstacks/react.svg",
        "/images/techstacks/tailwind.svg",
        "/images/techstacks/ts.svg",
        "/images/techstacks/vscode.svg",
    ];

    return (
        <div className="mx-10 lg:md:mx-0">
            <h3 className="font-bold text-2xl lg:md:text-4xl">What I'm working with.</h3>
            <div className="h-40 flex items-center overflow-hidden relative">
                <div
                    className="flex animate-[marquee_10s_linear_infinite] whitespace-nowrap"
                    style={{ minWidth: "200%" }}
                >
                    {[...images, ...images].map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt="tech"
                            className="h-16 w-16 mx-4 inline-block select-none"
                            draggable={false}
                        />
                    ))}
                </div>
                <style>
                    {`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    `}
                </style>
            </div>
        </div>
    );
};

export default TechStacks;