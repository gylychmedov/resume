import Tilt from "react-parallax-tilt";

const Header = (): JSX.Element => {
  return (
    <aside className=" mt-4 col-span-12 lg:col-span-5 2xl:col-span-4 h-68 xl:h-96 xl:sticky xl:top-0 ">
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
                className="h-20 rounded-lg mr-3"
                src="/images/Dagdan.jpg"
                alt="Ezkahan"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-montserrat-bold text-2xl">
                  Dagdan Gylychmedov
                </h1>
                <h3 className=" font-montserrat-medium text-sm text-white px-3 p-1 mt-2 rounded-lg bg-gray-700">
                  Fronted developer
                </h3>
              </div>
            </aside>

            <main className="flex flex-col">
              <aside className="font-montserrat-medium text-sm flex justify-between mt-10 flex-col">
                <div>
                  <p> Phone: </p>
                  <small className="text-gray-400"> +99361711765 </small>
                </div>

                <div className="mt-4">
                  <p> Email: </p>
                  <small className="text-gray-400">
                    {" "}
                    Gylycmedof@gmail.com{" "}
                  </small>
                </div>
                <div className="mt-4">
                  <p> Github: </p>
                  <small className="text-gray-400">
                    https://github.com/gylychmedov
                  </small>
                </div>

                <div className="mt-4">
                  <p> Location: </p>
                  <small className="text-gray-400">
                    Ashgabat, Turkmenistan
                  </small>
                </div>
              </aside>
            </main>
          </section>
          <img
            src="/images/Oguzly.svg"
            alt="Oguzly"
            className="w-48 mx-auto p-5 mt-10"
          />
        </header>
      </Tilt>
    </aside>
  );
};

export default Header;
