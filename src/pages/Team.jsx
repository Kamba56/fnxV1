import { useState } from "react";
import Member from "../components/Member";
import OHeadline from "../components/OtherHeadline"
import Player from "../components/Player";
import mark from "../assets/images/mark.jpeg"
import andy from "../assets/images/andy.png"

const Team = () => {
  const [show, setShow] = useState(false);
  const [num, setnum] = useState(0);

  const handlePop = (num) => {
    setnum(num);
    setShow(true);
  }

  const closePop = () => {
    setShow(false);
  }

  const members = [
    {
      name: "Mark Flanagan",
      position: "Co-Founder",
      about: "Mark has been working in Financial Services since 1994 working in senior roles with various investors for Investment Selection and Due Diligence. Prior to FNX, he has overseen hundreds of managers and fund launches across most asset classes. He has acted as COO, Advisor and Non-Executive Director to multiple companies such as Blackstar Asset Management, AON and AXA Investment Managers. Mark is a Fellow of the Institute of Chartered Accountants in Ireland and a Chartered Alternative Investment Analyst.  ",
      mail: "mark.flanagan@fnx.ie",
      linkedin: "#",
      image: mark
    },
    {
      name: "Andrew J.S. Gebhardt",
      position: "Co-Founder",
      about: "Andrew moved into Finance from Civil and Nautical Engineering in 1995. Over the subsequent 20 years Andrew worked for a number of Tier 1 institutions in which he developed and implemented Futures and Options strategies based on Technical and Statistical Methods. During the 2007 Credit Crisis Andrew managed the dismantling of a significant defaulting options positions on behalf of SocGen (Newedge). In 2010 Andrew co-founded Finex LLP and has grown the partnership into a UCITS and AIFM firm. In 2015 Andrew won the Technical Analyst Award. Andrew holds a BEng in Civil Engineering Design and Management from Cardiff University and holds certificates from the FCA in Client dealing and Partner functions.",
      mail: "andrew.gebhardt@fnx.ie",
      linkedin: "",
      image: andy
    },
    {
      name: "Mark Fitzpatrick",
      position: "Co-Founder",
      about: "Having begun his career in 1986 Mark has extensive experience in risk, compliance and operations specializing within both the Irish AIF and UCITS regimes. Mark has a comprehensive knowledge of investment risk and regulatory reporting under ESMA / Annex IV, Form PF and OPERA as well as financial reporting under US GAAP and IFRS. He is an Irish accountant and US CPA.  Mark has previously worked with South Quay Capital, Castille Capital, Aros Capital Management Ltd and Citco Mark holds a degree in Accounting and Finance from Dublin City University and is on the advisory board of the Centre for Talented Youth Ireland.",
      mail: "mark.fitzpatrick@fnx.ie",
      linkedin: ""
    },
    {
      name: "Peter Forsey",
      position: "Co-Founder",
      about: "Peter began his career in 1995 and worked in financial services across high-street banking, commercial banking, asset management, alternative investments, middle-office, custodial and high-intensity front office equity trading. He has specialised within programme project management and business analysis to build, implement and oversee risk, reporting and trading systems. Peter holds a degree in Software Engineering Management and Diploma in Financial Services (UCD).  He is a licentiate member of the Institute of Bankers, holding a Certificate and Diploma in Investment Fund Services.",
      mail: "peter.forsey@fnx.ie",
      linkedin: ""
    },
    {
      name: "Claire O’Doherty",
      position: "Co-Founder",
      about: "Claire began her career in 2011 and has acted as a Risk Officer for several credit unions within Ireland. Claire is the Chief Compliance Officer for FNX Dublin Ltd and is the Risk and Compliance Officer for Whelan Dowling & Associates and Red Flare. She holds a Bachelor of Commerce from University of Galway and is a Certified Chartered Accountant (ACCA), and holds a Diploma in Risk Management, Internal Audit and Compliance with the Institute of Chartered Accountants. ",
      mail: "",
      linkedin: ""
    }
  ];

  

  return (
    <main className="relative pb-20">
      <OHeadline image="bg-team" title="Our Team" text="Our people make our company. They can make yours too." />

      <div className="flex flex-col gap-10 items-center">
        <article className="max-w-[390px] min-w-72 w-full flex-col items-center hover:shadow-lg gap-3 flex cursor-pointer" onClick={() => {handlePop(0)}}>
          <figure className="w-full h-auto max-h-[258px] rounded-xl overflow-hidden bg-transparent">
            {members[0].image ? <img src={members[0].image} alt="Avatar" /> : <img src={avatar} alt="Avatar" />}
          </figure>

          <h3 className="font-bold text-2xl">{members[0].name}</h3>
          <p className="text-lg">{members[0].position}</p>
        </article>

        <div className="p-8 py-20 px-[5%] w-full m-auto flex justify-center gap-6 flex-wrap">
          {
            members.map((member, i) => {
              if (i == 0) {
                return;
              }
              return (
              <Member member={member} number={i} handlePop={handlePop} key={i} />
            )})
          }
        </div>
      </div>

      {
        show && (
          <Player member={members[num]} closePop={closePop} />
        )
      }
    </main>
  )
}

export default Team;
