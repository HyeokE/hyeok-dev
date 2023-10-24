import imageLoader from "@/src/libs/next/imageLoader";
import CONFIG from "morethan-log.config";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

const ProfileCard: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <div className={`${className}`}>
      <div className="p-1 mb-3 dark:text-white ">💻 Profile</div>
      <div
        className="w-full md:p-4 lg:p-4 rounded-2xl bg-white dark:bg-zinc-700 dark:hover:bg-gray-600 mb-9 hover:bg-gray-200 cursor-pointer transition-all duration-200"
        onClick={() => window.open("https://hyeoke.github.io/resume/")}
      >
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-transparent rounded-t-lg overflow-hidden">
          <Image
            src={CONFIG.profile.image}
            layout="fill"
            loader={imageLoader}
            alt=""
          />
        </div>
        <div className="bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white rounded-b-lg">
          <div className=" text-xl italic font-bold cursor-pointer">
            {CONFIG.profile.name}
          </div>
          <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
