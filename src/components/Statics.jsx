import { IoMdSchool } from "react-icons/io";
import { BsWalletFill } from "react-icons/bs";
import { MdDomainAdd, MdOutlineDiversity1 } from "react-icons/md";
function Statics() {
  return (
    <div className="w-full statics flex flex-col mx-auto gap-16 justify-center text-center pb-12">
      <h2 className="text-4xl md:text-6xl font-bold capitalize">Statistika</h2>
      <div className="flex justify-between mx-auto items-center flex-wrap w-11/12 gap-12">
        <div className="flex flex-col gap-2 " data-aos="fade-left">
          <div className="statistic w-28 h-28 flex justify-center items-center m-auto bg-slate-300 rounded-full hover:bg-[#0d2d62]">
            <IoMdSchool className="text-[#0d2d62] w-14 h-14" />
          </div>
          <h3 className="text-2xl font-bold">99 %</h3>
          <p className="text-2xl font-bold">Vypuskniki</p>
        </div>
        <div className="flex flex-col gap-3 " data-aos="fade-left">
          <div className="statistic w-28 h-28 flex justify-center items-center m-auto bg-slate-300 rounded-full hover:bg-[#0d2d62]">
            <BsWalletFill className="text-[#0d2d62] w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold">30+</h3>
          <p className="text-2xl font-bold">Профессоры</p>
        </div>
        <div className="flex flex-col gap-3 " data-aos="fade-left">
          <div className="statistic3 w-28 h-28 flex justify-center items-center m-auto bg-slate-300 rounded-full hover:bg-[#0d2d62]">
            <MdDomainAdd className="text-[#0d2d62] w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold">2</h3>
          <p className="text-2xl font-bold">Студенческие Города</p>
        </div>
        <div className="flex flex-col gap-3 " data-aos="fade-left">
          <div className="statistic4 w-28 h-28 flex justify-center items-center m-auto bg-slate-300 rounded-full hover:bg-[#0d2d62]">
            <MdOutlineDiversity1 className="text-[#0d2d62] w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-2xl font-bold">Количество Студентов</p>
        </div>
      </div>
    </div>
  );
}

export default Statics;
