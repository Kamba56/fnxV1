import Card from "../components/Card";

const ServiceTwo = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 data-aos="fade-up"  className="text-2xl font-medium">Our Approach</h2>
      <p data-aos="fade-up" className="text-base">Our approach to servicing your needs is characterized by:</p>
      
      <div className="flex flex-wrap gap-6">
        <Card title="Client Centric Solutions" text="We tailor our services to meet your unique requirements, ensuring that your goals are our top priority." />
        <Card title="Strategic Insights" text="Our team of seasoned professionals provides strategic insights and recommendations based on market trends and regulatory changes." />
        <Card title="Transparency" text="We maintain open and clear communication with our clients throughout our partnership, offering complete transparency in all our services." />
      </div>
    </div>
  )
};

export default ServiceTwo;
