import Button from "./Button";

const Headline = () => {
  return (
    <section className="w-full -z-10 h-screen flex justify-center items-center bg-homeheadline bg-cover bg-no-repeat bg-center bg-fixed relative">
      <div className="flex flex-col items-center gap-6 w-fit m-auto p-3">
        <h1 data-aos="fade-right" className="font-medium text-3xl lg:text-4xl text-center leading-[3rem] text-white">AIFMD and Management Company Services,<br /> by Practitioners for Practitioners.</h1>
        <Button name="Get In Touch" color='brown' linkTo="/contact" />
      </div>
    </section>
  );
};

export default Headline;
