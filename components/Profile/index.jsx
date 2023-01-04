import Image from "next/image";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import LocationIcon from "../../public/location.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/profileActions";

export default function Profile({ username }) {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  console.log(profile.avatar_url);

  useEffect(() => {
    dispatch(getProfile(username));
  }, []);

  return (
    <div class=" w-1/4 bg-red-400 ">
      <div class="w-full h-full bg-white border-2 border-gray-700 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10 mt-10">
          <h5 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
            {profile.name}
          </h5>
          <Image
            src={profile.avatar_url}
            width={200}
            height={200}
            className={`${styles.img} rounded-full mx-auto mt-10 mb-5`}
            alt="Profile Avatar"
          />
          <span class="text-md text-gray-500 dark:text-gray-400 mb-4 inline-flex">
            <Image
              src={LocationIcon}
              width={12}
              height={12}
              alt="User Location Icon"
            />
            {profile.location}
          </span>
          <h5 class="mb-1 text-md font-small italic text-center text-gray-900 dark:text-white px-10">
            {profile.bio}
          </h5>
          <div class="flex w-5/8 mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex w-full border-emerald-400 self-center px-4 py-2 text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Repository ({profile.public_repos})
            </a>
          </div>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              {profile.followers} Followers
            </a>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              {profile.following} Following
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
