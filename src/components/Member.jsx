import avatar from "../assets/images/avatar.png";

const Member = (props) => {
  const { nam, title } = props;

  return (
    <article className="max-w-[390px] min-w-72 w-full flex-col gap-3 flex">
      <figure className="w-full h-auto max-h-[258px] rounded-xl overflow-hidden bg-transparent">
        <img src={avatar} alt="Avatar" />
      </figure>

      <h3 className="font-bold text-2xl">{nam}</h3>
      <p className="text-lg">{title}</p>
    </article>
  )
};

export default Member;
