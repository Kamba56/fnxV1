import Button from "./Button"

const TwinBtn = () => {
  return (
    <section className="flex order-last lg:order-first flex-col gap-4 items-stretch lg:pt-24 pt-6 min-w-[300px]">
      <Button linkTo="/services/" color="brown" name="Our Comprehensive Service" />
      <Button linkTo="/services/approach" color="white" name="Our Approach" />
    </section>
  )
};

export default TwinBtn;
