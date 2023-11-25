import Button from "./Button";
import vid from "../assets/videos/vid.mp4";

const Headline = () => {
  return (
    <section className="w-full -z-10 h-screen flex justify-center items-center bg-homeheadline bg-cover bg-no-repeat bg-center bg-fixed relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col items-center gap-6 w-fit m-auto bg-[#00000070] rounded-md p-3">
        <h1 data-aos="fade-right" data-aos-duration="1200" className="font-medium text-xl lg:text-2xl text-center leading-[3rem] text-white">Home</h1>
        <h1 data-aos="fade-right" data-aos-duration="1200" className="font-medium text-3xl lg:text-4xl text-center leading-[3rem] text-white">AIFMD and Management Company Services,<br /> by Practitioners for Practitioners.</h1>
        <Button data-aos="fade-left" name="Get In Touch" color='brown' linkTo="/contact" />
      </div>
    </section>
  );
};

export default Headline;
