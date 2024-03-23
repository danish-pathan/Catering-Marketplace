import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Delicious Catering",
  description:
    "Delight your guests with our catering services. From corporate events to weddings, we provide delicious and beautifully presented meals tailored to your needs.",
  keywords:
    "catering, catering services, event catering, wedding catering, corporate catering, gourmet catering",
};

export default Meta;
