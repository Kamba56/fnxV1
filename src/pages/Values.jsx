import OHeadline from "../components/OtherHeadline";
import TwinBtn from "../components/TwinBtn";

const Values = () => {
  return (
    <main>
      <OHeadline image="values" title="Our Values" text="In an industry paralysed by complexity and cost, our values are simple but they are crucial and core to our undertaking." />

      <div className="flex flex-col lg:flex-row gap-14 p-8 py-20 max-w-7xl m-auto">
        <TwinBtn />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium">Simplicity</h2>
            <p className="text-lg">We prioritize straightforward, actionable solutions. We&apos;re mindful of the time and financial implications of our advice, keeping things direct and efficient.</p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium">Integrity</h2>
            <p className="text-lg">Our unwavering commitment to integrity means we&apos;re responsible and accountable to regulators, clients, and ourselves. Transparency and honesty define our approach.</p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium">Respect</h2>
            <p className="text-lg">We deeply respect the time, effort, and commitment of our stakeholders, particularly our clients. We honor their dedication with unwavering support and integrity.</p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-medium">Efficiency</h2>
            <p className="text-lg">We&apos;re fanatical about efficiency, keeping costs low and operations effective. We optimize our services to empower clients in achieving their financial goals.</p>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Values;
