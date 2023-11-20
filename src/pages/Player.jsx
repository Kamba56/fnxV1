import { GrClose } from "react-icons/gr";
import blacklogo from "../assets/images/blacklogo.svg"
import avatar from "../assets/images/avatar.png";

const Player = () => {
  return (
    <main>
      <div className="flex justify-between items-center p-8 py-6 lg:py-10 lg:p-16">
        <figure className="w-16">
          <img src={blacklogo} alt="Logo" />
        </figure>

        <button className="">
          <GrClose size={30} />
        </button>
      </div>

      <article className="flex flex-col items-center gap-10 pt-5">
        <figure className="w-full max-w-md h-auto max-h-[280px] rounded-xl overflow-hidden bg-transparent">
          <img src={avatar} alt="Avatar" />
        </figure>

        <h3 className="font-bold text-2xl">micemo</h3>
        <p className="text-lg">Co-founder</p>

        <p className="text-lg">Mark has been working in Financial Services since 1994 working in senior roles in AON’s Investment team within Operational Due Diligence, as a Director in the Risk, Structuring and Operations team with AXA Investment Managers and as Deputy Head of Cayman National Fund Services. As such he has overseen hundreds of managers and fund launches across most asset classes. He has acted as COO, Advisor and Non-Executive Director to multiple companies. Mark is a Fellow of the Institute of Chartered Accountants in Ireland and a Chartered Alternative Investment Analyst.</p>

        <h3>Contact Mark</h3>
        <ul className="flex flex-col gap-4">
          <li className="text-lg underline">mark.flanagan@fnx.ie</li>
          <li className="text-lg underline">LinkedIn Profile</li>
          <li className="text-lg underline">+353 1963 7091</li>
        </ul>
      </article>
    </main>
  )
};

export default Player;
