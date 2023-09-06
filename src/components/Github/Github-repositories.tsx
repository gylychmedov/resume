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
    <section className="bg-gray-50 min-h-screen py-20 center-x w-full">
      <div className="container">
        <h1 className="title-xl mb-10 pb-3">Github public repositories</h1>

        <aside className="grid grid-cols-12 gap-3 xl:gap-5">
          {repositories &&
            repositories.map((repository) => (
              <Repository key={repository.created_at} data={repository} />
            ))}
        </aside>
      </div>
    </section>
  );
};

export default GithubRepositories;
