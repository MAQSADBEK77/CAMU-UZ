import rasm1 from "../../public/images/carousel6.jpg";
import rasm2 from "../../public/images/carousel5.jpg";
import rasm3 from "../../public/images/carousel6.jpg";
function YangliliklarCard() {
  return (
    <div className="yangiliklarCard">
      <h1 className="text-5xl font-bold text-center mt-10 mb-8">Yangiliklar</h1>
      <div className="flex justify-center flex-wrap gap-y-11 pb-10">
        <div className="card card-compact w-80 bg-base-100 shadow-xl transition duration-300 hover:scale-105">
          <figure>
            <img src={rasm1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">President tashrifi</h2>
            <p>
              O'zbekiston respublikasi presidenti Shavkat Mirziyoyev
              Miromonovich <span className="camu-text">CAMU</span>{" "}
              universitetiga tashrif buyurdi
            </p>
            <p className="opacity-70 mb-[-20px]">2023.09.17</p>
            <div className="card-actions justify-end">
              <button className="btn btn-md text-white bg-blue-900 transition-all duration-300 hover:bg-slate-300 hover:text-blue-900 hover:outline-blue-900">
                Batafsil
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl transition duration-300 hover:scale-105">
          <figure>
            <img src={rasm2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Yangi universitet</h2>
            <p>
              <span></span>
              Farg'ona shahrida yangi <span className="camu-text">
                CAMU
              </span>{" "}
              universiteti ochildi
            </p>
            <p className="opacity-70 mb-[-20px]">2023.09.17</p>
            <div className="card-actions justify-end">
              <button className="btn btn-md text-white bg-blue-900 transition-all duration-300 hover:bg-slate-300 hover:text-blue-900 hover:outline-blue-900">
                Batafsil
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition duration-300 hover:scale-105">
          <figure>
            <img src={rasm3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">President tashrifi</h2>
            <p>
              O'zbekiston respublikasi presidenti Shavkat Mirziyoyev
              Miromonovich <span className="camu-text">CAMU</span>{" "}
              universitetiga tashrif buyurdi
            </p>
            <p className="opacity-70 mb-[-20px]">2023.09.17</p>
            <div className="card-actions justify-end">
              <button className="btn btn-md text-white bg-blue-900 transition-all duration-300 hover:bg-slate-300 hover:text-blue-900 hover:outline-blue-900">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YangliliklarCard;
