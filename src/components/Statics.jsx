import { IoMdSchool } from "react-icons/io";
import { BsWalletFill } from "react-icons/bs";
import { MdDomainAdd, MdOutlineDiversity1 } from "react-icons/md";
function Statics() {
  return (
    <div className="w-full statics flex flex-col gap-5 justify-center text-center">
      <h2>Statistika</h2>
      <div className="flex justify-center mx-auto items-center flex-wrap w-full gap-10">
        <div className=" flex flex-col gap-3" data-aos="fade-left">
          <div className="w-40 flex justify-center items-center">
            <IoMdSchool className="w-12 h-12" />
          </div>
          <h3>99 %</h3>
          <p>Vypuskniki</p>
        </div>
        <div className="flex flex-col gap-3" data-aos="fade-left">
          <div className="w-40 flex justify-center items-center">
            <BsWalletFill className="text-[#0d2d62] w-12 h-12" />
          </div>
          <h3>99 %</h3>
          <p>Vypuskniki</p>
        </div>
        <div className="flex flex-col gap-3" data-aos="fade-right">
          <div className="w-40 flex justify-center items-center">
            <MdDomainAdd className="text-[#0d2d62] w-12 h-12" />
          </div>
          <h3>99 %</h3>
          <p>Vypuskniki</p>
        </div>
        <div className="flex flex-col gap-3" data-aos="fade-right">
          <div className="w-40 flex justify-center items-center">
            <MdOutlineDiversity1 className="text-[#0d2d62] w-12 h-12" />
          </div>
          <h3>99 %</h3>
          <p>Vypuskniki</p>
        </div>
      </div>
    </div>
  );
}

export default Statics;
