import Member from "../components/Member";
import OHeadline from "../components/OtherHeadline"

const Team = () => {
  return (
    <main>
      <OHeadline image="bg-team" title="Our Team" text="Our people make our company. They can make yours too." />

      <div className="p-8 py-20 max-w-[1366px] m-auto flex justify-center gap-6 flex-wrap">
        <Member nam="Mark Flanagan" title="Co-Founder " />
        <Member nam="Mark Flanagan" title="Co-Founder " />
        <Member nam="Mark Flanagan" title="Co-Founder " />
        <Member nam="Mark Flanagan" title="Co-Founder " />
        <Member nam="Mark Flanagan" title="Co-Founder " />
        <Member nam="Mark Flanagan" title="Co-Founder " />
      </div>
    </main>
  )
}

export default Team;
