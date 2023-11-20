import Button from "./Button"

const TwinBtn = () => {
  return (
    <section className="flex order-last lg:order-first flex-col gap-4 items-stretch lg:pt-24 pt-6 min-w-[300px]">
      <Button linkTo="/contact" color="brown" name="Contact Us" />
      <Button linkTo="/contact" color="white" name="Request a Consultation" />
    </section>
  )
};

export default TwinBtn;
