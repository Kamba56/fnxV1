const Card = (props) => {
  const { title, text } = props;
  return (
    <section className="flex p-6 bg-white flex-col gap-4 shadow-md lg:shadow-none lg:hover:shadow-lg w-full mx-auto md:mx-0 max-w-[400px] md:max-w-[350px] 2xl:max-w-[400px]">
      <h3 data-aos="fade-right" className="font-medium text-xl">{title}</h3>
      <p data-aos="fade-right" className="text-base">{text}</p>
    </section>
  );
};

export default Card;
