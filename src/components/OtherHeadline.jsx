const OHeadline = (props) => {
  const {image, title, text} = props;

  return (
    <section className={`w-full -z-10 h-[60vh] lg:h-screen flex justify-center items-center ${image} bg-cover bg-no-repeat bg-center`}>
      <div className="flex flex-col p-1 items-center gap-4">
        <h1 data-aos="fade-up" className="text-xl lg:text-lg text-center leading-[3rem] text-white">{title}</h1>
        <p data-aos="fade-up" className="font-medium text-lg lg:text-xl text-center leading-[1.5rem] md:leading-10 text-white max-w-md">{text}</p>
      </div>
    </section>
  );
};

export default OHeadline;
