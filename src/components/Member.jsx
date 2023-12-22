import avatar from "../assets/images/avatar.png";

const Member = (props) => {
  const { member, handlePop, number } = props;

  return (
    <article data-aos="fade-up" data-aos-duration="1200" className="max-w-[260px] p-2 m-auto pb-8 min-w-72 w-full flex-col gap-3 flex cursor-pointer items-center shadow-md lg:shadow-none lg:hover:shadow-md" onClick={() => {handlePop(number)}}>
      <figure className="w-full h-[160px] rounded-lg shadow-md overflow-hidden bg-transparent">
        {member.image ? <img src={member.image} alt="Avatar" /> : <img src={avatar} alt="Avatar" />}
      </figure>

      <h3 className="font-medium text-xl">{member.name}</h3>
      <p className="text-base">{member.position}</p>
    </article>
  )
};

export default Member;
