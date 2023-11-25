import Button from "./Button";

const HomeBody = () => {
  return (
    <section className="m-auto py-28 px-7 max-w-[1440px] flex flex-col gap-16">
      <h2 className="font-semibold text-4xl">How We Manage And Secure Your Investments </h2>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 lg:justify-between items-stretch">
        <article data-aos="flip-right" data-aos-duration="1200" className="flex flex-col gap-7 flex-1 justify-between">
          <div className="flex flex-col gap-7">
            <h3 className="font-medium text-2xl border-b border-blue-50 w-fit">Expect more from your Management Company</h3>
            <p className="text-lg">Demand a team which has real and direct experience of managing UCITS and AIF Funds, raising assets, and regulatory matters in the US, UK and Europe. Demand an agile firm which adapts to new customer demands efficiently and effectively</p>
          </div>

          <div data-aos="flip-up" data-aos-duration="2000" className="w-fit self-start">
            <Button name="Our AIFMD Services" linkTo="services" color="white" />
          </div>
        </article>

        <article data-aos="flip-right" data-aos-duration="1200" className="flex flex-col gap-7 flex-1 justify-between">
          <div className="flex flex-col gap-7">
            <h3 className="font-medium text-2xl border-b border-blue-50 w-fit">A partnership that extends beyond management services</h3>
            <p className="text-lg">Work with a Partner with a background in investor Due Diligence, Fund Structuring, and Operations.</p>
          </div>

          <div data-aos="flip-down" data-aos-duration="2000" className="w-fit self-start">
            <Button name="Our Values" linkTo="values" color="white" />
          </div>
        </article>
      </div>
    </section>
  )
};

export default HomeBody;
