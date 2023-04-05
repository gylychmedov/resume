import { languageList } from "utilities/data/languageList";

const Language = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 my-4  border border-gray-100">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Languages
      </h1>
      <aside className="grid grid-cols-2 gap-2 xl:gap-4">
        {languageList.map((lng) => (
          <div
            key={lng.name}
            className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg"
          >
            <img
              src={`/images/Languages/${lng.image}.png`}
              alt="Russian"
              width="48px"
              height="48px"
            />
            <p className="font-montserrat-medium mt-2">{lng.name}</p>
            <small className="text-gray-500">{lng.level}</small>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Language;
