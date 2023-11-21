import { GrClose } from "react-icons/gr";
import blacklogo from "../assets/images/blacklogo.svg"
import avatar from "../assets/images/avatar.png";

const Player = (props) => {
  const { member, closePop } = props;

  return (
    <main className="fixed top-0 h-auto min-h-screen w-full bg-white z-[10000]">
      <div className="flex justify-between items-center p-8 py-6 lg:py-10 lg:p-16">
        <figure className="w-16">
          <img src={blacklogo} alt="Logo" />
        </figure>

        <button className="" onClick={closePop}>
          <GrClose size={30} />
        </button>
      </div>

      <article className="flex flex-col items-center gap-10 pt-5 px-6 max-w-6xl m-auto overflow-visible">
        <figure className="w-full max-w-md h-auto max-h-[280px] rounded-xl overflow-hidden bg-transparent">
          <img src={avatar} alt="Avatar" />
        </figure>

        <h3 className="font-bold text-2xl">{member.name}</h3>
        <p className="text-lg">{member.position}</p>

        <p className="text-lg">{member.about}</p>

        <h3 className="font-semibold text-xl">Contact Mark</h3>
        <ul className="flex flex-col gap-4 self-start">
          <li className="text-lg underline">{member.mail}</li>
          <li className="text-lg underline">{member.phone}</li>
          <a href={member.linkedin} className="text-lg underline">Linkedin Profile</a>
        </ul>
      </article>
    </main>
  )
};

export default Player;