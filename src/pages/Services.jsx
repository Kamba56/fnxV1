import { Outlet } from "react-router-dom";
import OHeadline from "../components/OtherHeadline"
import TwinBtn from "../components/TwinBtn"

const Services = () => {
  return (<main>
    <OHeadline image="bg-services" title="Our AIFMD Services" text="Expect more from your Management Company" />
    <div className="flex flex-col lg:flex-row gap-14 px-[4%] py-20 max-w-[1440px] m-auto">
      <TwinBtn />

      <Outlet />
    </div>
  </main>)
}

export default Services;
