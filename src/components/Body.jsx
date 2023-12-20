import Card from "./Card";

const HomeBody = () => {
  return (
    <section className="m-auto py-28 px-[4%] max-w-[1440px] flex flex-col gap-14">
      <h2 data-aos="fade-up" className="font-medium text-3xl">How We Manage And Secure Your Investments </h2>

      <div className="flex flex-wrap gap-6 w-fit m-auto">
        <Card title="Expect more from your Management Company" text="Demand a team which has real and direct experience of managing UCITS and AIF Funds, raising assets, and regulatory matters in the US, UK and Europe. Demand an agile firm which adapts to new customer demands efficiently and effectively" />
        <Card title="The right Provider for your current business needs" text="Firms most often fail due to high fixed costs, take full advantage of our network of providers selected to offer the right service for each stage of the firm’s growth." />
        <Card title="A partnership that extends beyond management services" text="Work with a Partner with a background in investor Due Diligence, Fund Structuring, and Operations." />
      </div>
    </section>
  )
};

export default HomeBody;
