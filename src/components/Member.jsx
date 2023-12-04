import avatar from "../assets/images/avatar.png";

const Member = (props) => {
  const { member, handlePop, number } = props;

  return (
    <article data-aos="flip-right" data-aos-duration="1200" className="max-w-[260px] pb-8 min-w-72 w-full flex-col gap-3 flex cursor-pointer items-center hover:shadow-lg" onClick={() => {handlePop(number)}}>
      <figure className="w-full h-[172px] rounded-lg shadow-md overflow-hidden bg-transparent">
        {member.image ? <img src={member.image} alt="Avatar" /> : <img src={avatar} alt="Avatar" />}
      </figure>

      <h3 className="font-medium text-2xl">{member.name}</h3>
      <p className="text-lg">{member.position}</p>
    </article>
  )
};

export default Member;
