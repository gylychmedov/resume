import { IRepository } from "@/interfaces/IRepository";
import React from "react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { RiRefreshLine } from "react-icons/ri";

const Repository = ({ data }: { data: IRepository }) => {
  const {
    name,
    owner,
    created_at,
    pushed_at,
    description,
    language,
    html_url,
  } = data;
  return (
    <aside className="bg-white group shadow-xl flex flex-col shadow-gray-100 col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-4 p-4 hover:bg-indigo-50 hover:scale-95 select-none duration-500 rounded-lg">
      <a
        href={owner.html_url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center w-full pb-3 border-b border-gray-100"
      >
        <img
          src={owner.avatar_url}
          width="30px"
          height="30px"
          className="rounded-xl"
          alt={owner.login}
        />
        <div className="flex flex-col ml-3">
          <span>{owner.login}</span>
        </div>
      </a>

      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-start pt-3 justify-between h-full"
      >
        <div className=" flex flex-col items-start">
          <p className="font-montserrat-bold">{name}</p>
          {language && (
            <p className="  font-montserrat-medium text-sm my-2 bg-gray-500 text-white rounded-lg px-2 py-1">
              {language}
            </p>
          )}
        </div>
        <aside className="w-full">
          <span className="text-sm text-gray-600"> {description}</span>
          <div className="pt-4 text-gray-400 text-sm flex justify-between">
            <div className="flex items-center space-x-2">
              <VscGitPullRequestCreate />
              <span>{created_at.slice(0, 10)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <RiRefreshLine className=" group-hover:animate-spin" />
              <span>{pushed_at.slice(0, 10)}</span>
            </div>
          </div>
        </aside>
      </a>
    </aside>
  );
};

export default Repository;
