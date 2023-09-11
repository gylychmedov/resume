import { IRepository } from "@/interfaces/IRepository";
import React from "react";
import { VscGitPullRequestCreate, VscGithubInverted } from "react-icons/vsc";
import { RiRefreshLine } from "react-icons/ri";
import skillList from "utilities/data/skillList";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

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
    <aside className="bg-white group shadow-xl flex flex-col shadow-gray-100 p-6 hover:scale-105 duration-500 rounded-3xl">
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-start  h-full"
      >
        <aside className="between w-full">
          <div className="center-x space-x-4">
            <div className="w-16 h-16 shrink-0 center bg-green-50 rounded-2xl text-green-500">
              <VscGithubInverted size={28} />
            </div>
            <div className="flex flex-col">
              <div className="font-roboto-bold">{name.toUpperCase()}</div>
              <div className="text-gray-500 center-x">
                {language == "Kotlin" ? (
                  <img
                    src={`/images/Logos/Kotlin.png`}
                    className="w-4"
                    alt=""
                  />
                ) : (
                  <img
                    src={`/images/Logos/${
                      skillList.filter((el) =>
                        el.title.includes(String(language))
                      )[0]?.title
                    }.png`}
                    className="w-4"
                    alt=""
                  />
                )}
                <span>{language}</span>
              </div>
            </div>
          </div>

          <div className=" bg-green-50 center-x text-sm text-green-500 py-3 pl-6 pr-3 rounded-full">
            <span>Open</span>

            <BsArrowRightShort size={24} />
          </div>
        </aside>
        <aside className="w-full mt-5">
          <span className="text-gray-700"> {description}</span>
          <div className="pt-4 text-gray-400 text-sm center-x">
            <div className="center-x border-r pr-2">
              <VscGitPullRequestCreate />
              <span>{created_at.slice(0, 10)}</span>
            </div>
            <div className="center-x border-r pr-2">
              <RiRefreshLine className=" group-hover:animate-spin" />
              <span>{pushed_at.slice(0, 10)}</span>
            </div>
            <div className="center-x">
              <AiOutlineUser />
              <span>{owner.login}</span>
            </div>
          </div>
        </aside>
      </a>
    </aside>
  );
};

export default Repository;
