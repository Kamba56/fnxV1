const Contact = () => {
  return (
    <main className="bg-black pt-40 min-h-screen bg-contact pb-16 bg-no-repeat bg-cover bg-left lg:bg-center relative z-[-2]">
      <section className="flex flex-col gap-20 m-auto p-7 z-30 w-full max-w-[1540px] px-[5%]">
        <section className="flex flex-col gap-10 text-white self-center items-center">
          <h1 className="font-medium text-3xl">Contact our FNX team</h1>
          <h3 className="text-lg font-medium">Our team is very happy to answer your questions. <br />Fill out the form and we’ll be in touch as soon as possible</h3>
        </section>

        <section className="flex flex-col gap-20 lg:flex-row lg:justify-evenly">
          <form action="#" className="flex flex-col gap-8 bg-white w-full max-w-3xl p-10 shadow-xl rounded-xl">
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-11 lg:items-center">
              <label className="font-medium text-base lg:w-1/3" htmlFor="name">Your full name</label>
              <input data-aos="fade-up" data-aos-duration="1200" type="text" name="name" className="border border-blue-50 bg-white rounded-md h-14 lg:w-2/3 pl-4" placeholder="Enter your full name" />
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:gap-11 lg:items-center">
              <label className="font-medium text-base lg:w-1/3" htmlFor="email">Your email</label>
              <input data-aos="fade-up" data-aos-duration="1200" type="email" name="email" className="border border-blue-50 bg-white rounded-md h-14 lg:w-2/3 pl-4" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:gap-11 lg:items-center">
              <label className="font-medium text-base lg:w-1/3" htmlFor="website">Company website</label>
              <input data-aos="fade-up" data-aos-duration="1200" type="text" name="website" className="border border-blue-50 bg-white rounded-md h-14 lg:w-2/3 pl-4" placeholder="Enter your company website" />
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:gap-11">
              <label className="font-medium text-base lg:w-1/3 lg:pt-5" htmlFor="message">Message</label>
              <textarea data-aos="fade-up" data-aos-duration="1200" name="message" className="border border-blue-50 pt-2 bg-white rounded-md h-32 lg:w-2/3 pl-4" placeholder="Write your message here"></textarea>
            </div>

            <button data-aos="fade-up" data-aos-duration="1200" type="submit" className="font-medium text-lg bg-brown-50 hover:bg-brown-100 hover:shadow-lg rounded-md py-4 px-10 self-end text-white">Send Message</button>
          </form>
          <article className="flex flex-col gap-5 items-center text-white text-center text-base lg:self-end pb-0">
            <h2 className="font-medium text-xl">FNX Dublin Limited</h2>
            <p>Unit 1, Block 1</p>
            <p>Northwood Court</p>
            <p>Santry, D09 E438</p>
            <p>Ireland</p>
            <p>+353 1963 7090</p>
          </article>
        </section>
      </section>
      <div className="absolute bottom-0 up-0 w-full h-full z-[-1] lg:bg-back bg-contactmd bg-no-repeat bg-contain bg-bottom"></div>
    </main>
  )
};

export default Contact;
