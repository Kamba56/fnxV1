const Card = (props) => {
  const { title, text } = props;
  return (
    <section className="flex p-6 bg-white flex-col gap-4 shadow-md lg:shadow-none lg:hover:shadow-md w-full mx-auto md:mx-0 max-w-[400px] md:max-w-[300px] lg:max-w-[400px]">
      <h3 data-aos="fade-right" className="font-medium text-2xl">{title}</h3>
      <p data-aos="fade-right" className="font-normal text-lg">{text}</p>
    </section>
  );
};

export default Card;
