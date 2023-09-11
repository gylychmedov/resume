import { languageList } from "utilities/data/languageList";

const Language = () => {
  return (
    <section className=" py-20 w-full">
      <div className="container">
        <h1 className="title-xl mb-10 pb-3">Languages</h1>

        <aside className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {languageList.map((lng) => (
            <div
              key={lng.name}
              className="bg-white relative shadow-xl shadow-gray-100 center flex-col overflow-hidden text-center px-4 py-14 rounded-3xl border border-gray-100"
            >
              <div className="absolute top-0 left-0 p-2 rounded-br-xl w-max px-16 -translate-x-14 -rotate-45 bg-green-500 text-white">
                {lng.level}
              </div>
              <img
                src={`/images/Languages/${lng.image}.png`}
                alt="Russian"
                width="64px"
                height="64px"
              />
              <p className="font-roboto-bold text-gray-800 mt-4">{lng.name}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Language;
