import avatar from "../assets/images/avatar.png";

const Member = (props) => {
  const { member, handlePop, number } = props;

  return (
    <article className="max-w-[390px] min-w-72 w-full flex-col gap-3 flex cursor-pointer" onClick={() => {handlePop(number)}}>
      <figure className="w-full h-auto max-h-[258px] rounded-xl overflow-hidden bg-transparent">
        <img src={avatar} alt="Avatar" />
      </figure>

      <h3 className="font-bold text-2xl">{member.name}</h3>
      <p className="text-lg">{member.position}</p>
    </article>
  )
};

export default Member;
