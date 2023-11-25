import { GrClose } from "react-icons/gr";
import blacklogo from "../assets/images/blacklogo.svg"
import avatar from "../assets/images/avatar.png";

const Player = (props) => {
  const { member, closePop } = props;

  return (
    <main className="fixed top-0 h-screen w-full overflow-scroll bg-[rgba(0,_0,_0,_0.40)] px-[4%] py-12 z-[10000]">
      <div data-aos="flip-right" data-aos-duration="1200" className="bg-white max-w-6xl m-auto">
        <div className="flex justify-between items-center p-8 py-6 lg:py-10 lg:p-16">
          <figure className="w-16">
            <img src={blacklogo} alt="Logo" />
          </figure>

          <button className="" onClick={closePop}>
            <GrClose size={30} />
          </button>
        </div>

        <article className="flex flex-col items-center gap-10 pt-5 px-6 max-w-5xl h-auto pb-14 m-auto">
          <figure className="w-full max-w-md h-auto max-h-[280px] rounded-xl overflow-hidden bg-transparent">
            {member.image ? <img src={member.image} alt="Avatar" /> : <img src={avatar} alt="Avatar" />}
          </figure>
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-medium text-2xl">{member.name}</h3>
            <p className="text-lg">{member.position}</p>
          </div>

          <p className="text-lg">{member.about}</p>

          
          <ul className="flex flex-col gap-4 self-start">
            <li data-aos="fade-right" data-aos-duration="1700"><h3 className="font-semibold text-xl self-start">Contact</h3></li>
            <li data-aos="fade-right" data-aos-duration="1700" className="text-lg underline">{member.mail}</li>
            <a data-aos="fade-right" data-aos-duration="1700" href={member.linkedin} className="text-lg underline">Linkedin Profile</a>
          </ul>
        </article>
      </div>
    </main>
  )
};

export default Player;