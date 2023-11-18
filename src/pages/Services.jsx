import OHeadline from "../components/OtherHeadline"
import TwinBtn from "../components/TwinBtn"

const Services = () => {
  return (<main>
    <OHeadline image="bg-services" title="Our AIFMD Services" text="Expect more from your Management Company" />
    <div className="flex flex-col lg:flex-row gap-14 p-8 py-20 max-w-7xl m-auto">
      <TwinBtn />

      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-medium">Our Comprehensive Services</h2>
          <p className="text-lg">At FNX.IE, we&apos;re committed to providing an extensive range of services to meet the diverse needs of our clients. Our expertise extends to every aspect of managing UCITS and AIF Funds, raising assets, and addressing regulatory matters in key global markets, including the US, UK, and Europe. We offer a comprehensive suite of services tailored to your specific requirements, including:</p>
          <ol className="flex flex-col gap-6 list-decimal list-inside">
            <li className="text-lg">
              <span className="font-bold">Fund Management:</span>Our experienced team offers end-to-end fund management services, ensuring the effective administration and performance optimization of your UCITS and AIF Funds.
            </li>
            <li className="text-lg">
              <span className="font-bold">Asset Raising:</span>
              We specialize in helping you raise assets through strategic marketing, investor relations, and market analysis, enhancing your fund&apos;s growth potential.
            </li>
            <li className="text-lg">
              <span className="font-bold">Regulatory Compliance:</span>
              Stay ahead of evolving regulations with our expert guidance. We provide thorough regulatory compliance services, helping you navigate the complexities of the US, UK, and European regulatory landscape.
            </li>
            <li className="text-lg">
              <span className="font-bold">Global Reach:</span>
              FNX.IE&apos;s international presence and network of industry experts allow us to serve clients globally, facilitating cross-border fund management and asset raising.
            </li>
            <li className="text-lg">
              <span className="font-bold">Agile Solutions:</span>
              We pride ourselves on being an agile and adaptive firm. Our ability to respond swiftly to changing customer demands ensures that your investments remain flexible and future-proof.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-medium">Our Approach</h2>
          <p className="text-lg">Our approach to servicing your needs is characterized by:</p>
          <ol className="flex flex-col gap-6 list-decimal list-inside">
            <li className="text-lg">
              <span className="font-bold">Client-Centric Solutions:</span>
              We tailor our services to meet your unique requirements, ensuring that your goals are our top priority.
            </li>
            <li className="text-lg">
              <span className="font-bold">Strategic Insights:</span>
              Our team of seasoned professionals provides strategic insights and recommendations based on market trends and regulatory changes.
            </li>
            <li className="text-lg">
              <span className="font-bold">Transparency:</span>
              We maintain open and clear communication with our clients throughout our partnership, offering complete transparency in all our services.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </main>)
}

export default Services;
