import Card from "../components/Card";
import OHeadline from "../components/OtherHeadline";

const Values = () => {
  return (
    <main>
      <OHeadline image="bg-values" title="Our Values" text="In an industry paralysed by complexity and cost, our values are simple but they are crucial and core to our undertaking." />

      <div className="px-[4%] py-20 max-w-[1440px] m-auto">
        <div className="flex flex-wrap gap-6">
          <Card title="Simplicity" text="We prioritize straightforward, actionable solutions. We're mindful of the time and financial implications of our advice, keeping things direct and efficient." />
          <Card title="Integrity" text="Our unwavering commitment to integrity means we're responsible and accountable to regulators, clients, and ourselves. Transparency and honesty define our approach." />
          <Card title="Respect" text="We deeply respect the time, effort, and commitment of our stakeholders, particularly our clients. We honor their dedication with unwavering support and integrity." />
          <Card title="Efficiency" text="We're fanatical about efficiency, keeping costs low and operations effective. We optimize our services to empower clients in achieving their financial goals." />
        </div>
      </div>
    </main>
  )
};

export default Values;
