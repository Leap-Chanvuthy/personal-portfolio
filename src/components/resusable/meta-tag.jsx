// import { Helmet } from "react-helmet";

// const Metatag = ({ title, description }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       {description && <meta name="description" content={description} />}
//     </Helmet>
//   );
// };

// export default Metatag;


import { Helmet } from "react-helmet";

const Metatag = ({ title, description }) => {
  const defaultTitle = "Leap Chanvuthy";
  const defaultDescription = "Welcome to my portfolio website.";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />

    </Helmet>
  );
};

export default Metatag;
