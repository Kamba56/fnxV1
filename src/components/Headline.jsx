import Button from "./Button";

const Headline = () => {
  return (
    <section className="w-full -z-10 h-screen flex justify-center items-center bg-homeheadline bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="flex-1"></div>
      <div className="flex flex-col p-1 items-center gap-4 flex-1 bg-white h-full text-blue-50 justify-center">
        <h1 data-aos="fade-right" data-aos-duration="2000" className="font-medium text-center text-3xl lg:text-4xl w-fit leading-[3rem] text-blue-50">AIFMD and Management Company Services,<br /> by Practitioners for Practitioners.</h1>
        <Button data-aos="fade-left" name="Get In Touch" color='brown' linkTo="/contact" />
      </div>
    </section>
  );
};

export default Headline;
