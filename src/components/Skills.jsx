const Skills = () => {

    return ( 
        <div className="mx-10 my-5 ">
            <h1 className="text-center font-bold text-2xl">Skills & Technologies</h1>
            <div className="mt-5 grid  grid-cols-1 lg:md:grid-cols-2 gap-4">
                {/* Frontend Skill */}
                <div className="  border-2 border-black rounded-md p-4">
                    <h3 className="text-xl font-medium text-center">Frontend</h3>
                    <ul className="mt-5 grid grid-cols-1 lg:md:grid-cols-2 gap-3">
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[30px]" src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png"/>
                            <p className="text-lg">HTML</p>
                        </li>
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
                            <p className="text-lg">JavaScript</p>
                        </li>
                        <li className="flex justify-center items-center gap-5  border-2 border-yel p-2 rounded-sm">
                            <img className="w-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"/>
                            <p className="text-lg">Tailwind CSS</p>
                        </li>
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[30px]" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                            <p className="text-lg">React JS</p>
                        </li>
                    </ul>
                </div>

                {/* Backend Skill */}
                <div className="border-2 border-black rounded-md p-4">
                    <h3 className="text-xl font-medium text-center">Backend APIs</h3>
                    <ul className="mt-5 grid grid-cols-1 lg:md:grid-cols-2 gap-3">
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[30px]" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"/>
                            <p className="text-lg">Node JS</p>
                        </li>
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[80px] bg-white" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/>
                            <p className="text-lg">Express JS</p>
                        </li>
                        <li className="flex justify-center items-center gap-5  border-2 border-yel p-2 rounded-sm">
                            <img className="w-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"/>
                            <p className="text-lg">Laravel</p>
                        </li>
                    </ul>
                </div>

                {/* Database */}
                <div className=" border-2 border-black rounded-md p-4">
                    <h3 className="text-xl font-medium text-center">Database</h3>
                    <ul className="mt-5 grid grid-cols-1 lg:md:grid-cols-2 gap-3">
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[50px]" src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"/>
                            <p className="text-lg">MySQL</p>
                        </li>
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[30px] " src="https://www.gstatic.com/devrel-devsite/prod/v8710cb4731a368cb758d972abd8e9129d9a2b5cf087d107be78174bbc0c595e6/firebase/images/touchicon-180.png"/>
                            <p className="text-lg">Firebase</p>
                        </li>
                    </ul>
                </div>

                {/* Mobile */}
                <div className=" border-2 border-black rounded-md p-4">
                    <h3 className="text-xl font-medium text-center">Mobile Development</h3>
                    <ul className="mt-5 grid grid-cols-1 lg:md:grid-cols-2 gap-3">
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[20px]" src="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"/>
                            <p className="text-lg">Flutter</p>
                        </li>
                        <li className="flex justify-center items-center gap-5 border-2 border-yel p-2 rounded-sm">
                            <img className="w-[20px]" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"/>
                            <p className="text-lg">Dart</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default Skills;