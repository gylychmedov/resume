import { IRepository } from "@/interfaces/IRepository";
import { getRepositories } from "@/services/Github";
import { useEffect, useState } from "react";
import Repository from "./Repository";

const Repositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    getRepositories().then((res) => setRepositories(res.data));
  }, []);
  return (
    <aside className="grid grid-cols-12 gap-3 xl:gap-5">
      {repositories.length
        ? repositories.map((repository, key) => (
            <Repository key={key} data={repository} />
          ))
        : ""}
    </aside>
  );
};

export default Repositories;
