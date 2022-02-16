import Tilt from "react-parallax-tilt";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const Header = (): JSX.Element => {
  return (
    <aside className=" mt-4 col-span-12 lg:col-span-5 2xl:col-span-4 h-68 xl:h-96 xl:sticky xl:top-5 ">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor="lightblue"
        glarePosition="all"
      >
        <header className="bg-gray-900 text-gray-100 px-8 lg:px-10 pt-5 pb-10 rounded-xl">
          <section className="flex flex-col justify-center lg:justify-start lg:items-start">
            <aside className="flex items-center">
              <img
                width="80px"
                height="80px"
                className="rounded-lg mr-3"
                src="/images/Dagdan.jpg"
                alt="Ezkahan"
              />
              <section className="flex flex-col items-start">
                <div className="font-montserrat-bold text-2xl">
                  Dagdan Gylychmedov
                </div>
                <div className=" font-montserrat-medium text-sm text-white px-3 p-1 mt-2 rounded-lg bg-gray-700">
                  Fronted developer
                </div>
              </section>
            </aside>

            <main className="flex flex-col">
              <aside className="font-montserrat-medium text-sm flex justify-between mt-10 flex-col">
                <aside className="mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p> Phone: </p>
                    <small className="text-gray-400"> +99361711765 </small>
                  </div>
                </aside>

                <aside className="mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg">
                    <MdEmail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p> Email: </p>
                    <small className="text-gray-400">
                      Gylycmedof@gmail.com
                    </small>
                  </div>
                </aside>

                <aside className="mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg">
                    <SiGithub size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p> Github: </p>
                    <small className="text-gray-400">
                      https://github.com/gylychmedov
                    </small>
                  </div>
                </aside>

                <aside className="mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg">
                    <MdLocationPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p> Location: </p>
                    <small className="text-gray-400">
                      Ashgabat, Turkmenistan
                    </small>
                  </div>
                </aside>

                <aside className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg">
                    <FaTelegramPlane size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p> Telegram: </p>
                    <small className="text-gray-400">t.me/gylychmedov</small>
                  </div>
                </aside>
              </aside>
            </main>
          </section>
          <img
            src="/images/Oguzly.svg"
            alt="Oguzly"
            width="192px"
            height="73px"
            className=" mx-auto p-5 mt-10"
          />
        </header>
      </Tilt>
    </aside>
  );
};

export default Header;
