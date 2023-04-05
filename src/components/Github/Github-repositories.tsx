import { IRepository } from "@/interfaces/IRepository";
import { getRepositories } from "@/services/Github";
import { useEffect, useState } from "react";
import Repository from "./Repository";

const GithubRepositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>();

  useEffect(() => {
    getRepositories().then((res) => setRepositories(res.data));
  }, []);
  return (
    <section className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Github public repositories
      </h1>
      <aside className="grid grid-cols-12 gap-3 xl:gap-5">
        {repositories &&
          repositories.map((repository) => (
            <Repository key={repository.created_at} data={repository} />
          ))}
      </aside>
    </section>
  );
};

export default GithubRepositories;
