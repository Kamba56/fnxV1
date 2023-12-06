import Card from "../components/Card";

const ServiceOne = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 data-aos="fade-right" className="text-2xl font-medium">Our Comprehensive Services</h2>
      <p data-aos="fade-right" className="text-base">At FNX.IE, we&apos;re committed to providing an extensive range of services to meet the diverse needs of our clients. Our expertise extends to every aspect of managing UCITS and AIF Funds, raising assets, and addressing regulatory matters in key global markets, including the US, UK, and Europe. We offer a comprehensive suite of services tailored to your specific requirements, including:</p>
      <div className="flex flex-wrap gap-6">
        <Card title="Fund Management" text="Our experienced team offers end-to-end fund management services, ensuring the effective administration and performance optimization of your UCITS and AIF Funds." />
        <Card title="Asset Raising" text="We specialize in helping you raise assets through strategic marketing, investor relations, and market analysis, enhancing your fund's growth potential." />
        <Card title="Regulatory Compliance" text="Stay ahead of evolving regulations with our expert guidance. We provide thorough regulatory compliance services, helping you navigate the complexities of the US, UK, and European regulatory landscape" />
        <Card title="Agile Solutions" text="We pride ourselves on being an agile and adaptive firm. Our ability to respond swiftly to changing customer demands ensures that your investments remain flexible and future-proof." />
        <Card title="Global Reach" text="FNX Dublin's international presence and network of industry experts allow us to serve clients globally, facilitating cross-border fund management and asset raising." />
      </div>
    </div>
  )
};

export default ServiceOne;
