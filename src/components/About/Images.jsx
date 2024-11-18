import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

const Image = () => {
  const images = [
    { src: "images/activity2.jpg", span: "col-span-2 row-span-2" },
    { src: "images/activity1.jpg", span: "col-span-2 row-span-1" },
    { src: "images/activity3.jpg", span: "col-span-1 row-span-2" },
    { src: "images/activity4.jpg", span: "col-span-2 row-span-1" },
    { src: "images/activity5.jpg", span: "col-span-2 row-span-1" },
    { src: "https://via.placeholder.com/300", span: "col-span-2 row-span-1" },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Some of My Hobby Beside Coding
      </h1>
      <div className="grid grid-cols-1 lg:md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md`}
          >
            <img
              src={image.src}
              alt={`Grid Image ${index + 1}`}
              className="w-full h-[20rem] object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
      <p className="my-10 uppercase"> </p>
      <List>
      <List.Item >🏞️ I spend most of my time for adventure and enjoy nature when I have a free time.</List.Item>
      <List.Item >🌌🪐💫☄️ I've always been fascinated by the mysteries of the universe. I find endless wonder in the stars, planets, and the vastness of the cosmos.</List.Item>
      <List.Item >🤖👨🏻‍💻 I have a passion for learning new things, especially when it comes to science and technology.</List.Item>
    </List>
    </div>
  );
};

export default Image;
