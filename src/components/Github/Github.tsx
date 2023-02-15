import Repositories from "./Repositories";

const Github = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 border border-gray-100 w-full mt-4">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Github public repositories
      </h1>
      <Repositories />
    </section>
  );
};

export default Github;
