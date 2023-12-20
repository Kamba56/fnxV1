import { IoMdClose } from "react-icons/io";

const Player = (props) => {
  const { member, closePop } = props;

  return (
    <main data-aos="fade-down-left" className="fixed top-0 h-screen w-full text-white overflowy-auto bg-blue-50 px-[5%] flex items-center flex-col lg:flex-row text-center gap-8 lg:text-left lg:py-12 pt-20 z-[10000]">
      <button onClick={closePop} className="absolute top-8 right-10 !text-white">
          <IoMdClose size={30} className="!text-white" />
        </button>
      <div className="flex flex-col gap-2 lg:w-1/4">
        <h3 className="font-medium text-xl">{member.name}</h3>
        <p className="font-normal text-base">{member.position}</p>
      </div>

      <div className="flex flex-col gap-6 lg:w-3/4">
        <p className="text-lg mb-4">{member.about}</p>

        <h3 className="font-medium text-xl">Contact {member.name.split(" ")[0]}</h3>
        <ul className="flex flex-col gap-3 text-base">
          <li>
            <a href={`mailto:${member.mail}`}>{member.mail}</a>
          </li>
          <li>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
          </li>
        </ul>
      </div>
    </main>
  )
};

export default Player;