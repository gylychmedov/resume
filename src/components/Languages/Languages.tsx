import { languages } from "data/Languages";

const Languages = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 border border-gray-100 w-2/4">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Languages
      </h1>
      <aside className="grid grid-cols-2 gap-2 xl:gap-4">
        {languages.map((lang, key) => (
          <div
            key={key}
            className="bg-white shadow-xl relative overflow-hidden shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg"
          >
            <img
              src={`/images/Languages/${lang.key}.png`}
              alt="Russian"
              width="48px"
              height="48px"
            />
            <p className="font-montserrat-medium mt-2">{lang.name}</p>
            <small className="absolute top-0 right-0 bg-gray-200 text-gray-700 px-2 py-1 rounded-bl-xl">
              {lang.level}
            </small>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Languages;
