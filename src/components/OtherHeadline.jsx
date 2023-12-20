const OHeadline = (props) => {
  const {image, title, text} = props;

  return (
    <section className={`w-full -z-10 h-screen flex justify-center items-center ${image} bg-cover bg-no-repeat bg-center bg-fixed`}>
      <div className="flex flex-col p-1 items-center gap-4">
        <h1 data-aos="fade-up" className="text-xl lg:text-lg text-center leading-[3rem] text-white">{title}</h1>
        <p data-aos="fade-up" className="font-medium text-white text-center max-w-5xl text-xl lg:text-2xl">{text}</p>
      </div>
    </section>
  );
};

export default OHeadline;
