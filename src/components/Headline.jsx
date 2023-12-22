import Button from "./Button";

const Headline = () => {
  return (
    <section className="w-full lg:h-screen h-[60vh] flex justify-center items-center bg-homeheadline bg-cover bg-no-repeat bg-center bg-fixed relative">
      <div className="flex flex-col items-center gap-6 w-fit m-auto p-3">
        <h1 data-aos="fade-up" className="font-medium text-lg lg:text-xl text-center leading-[1.5rem] md:leading-10 text-white max-w-md">AIFMD and Management Company Services, by Practitioners, for Practitioners.</h1>
        <Button name="Get In Touch" color='brown' linkTo="/contact" />
      </div>
    </section>
  );
};

export default Headline;
