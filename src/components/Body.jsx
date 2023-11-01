import Button from "./Button";

const HomeBody = () => {
  return (
    <section className="m-auto py-32 px-7 max-w-7xl flex flex-col gap-16">
      <h2 className="font-semibold text-3xl">How We Manage And Secure Your Investments </h2>

      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between items-start">
        <article className="flex flex-col gap-7 flex-1">
          <h3 className="font-medium text-2xl underline">Expect more from your Management Company</h3>
          <p className="font-normal text-lg">Demand a team which has real and direct experience of managing UCITS and AIF Funds, raising assets, and regulatory matters in the US, UK and Europe. Demand an agile firm which adapts to new customer demands efficiently and effectively</p>

          <div className="w-fit self-start">
            <Button name="Our AIFMD Services" linkTo="services" color="white" />
          </div>
        </article>

        <article className="flex flex-col gap-7 flex-1">
          <h3 className="font-medium text-2xl underline">A partnership that extends beyond management services</h3>
          <p className="font-normal text-lg">Work with a Partner with a background in investor Due Diligence, Fund Structuring, and Operations.</p>

          <div className="w-fit self-start">
            <Button name="Our Values" linkTo="services" color="white" />
          </div>
        </article>
      </div>
    </section>
  )
};

export default HomeBody;
