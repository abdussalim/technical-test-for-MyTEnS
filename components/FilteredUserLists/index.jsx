import Link from "next/link";
import Image from "next/image";

export default function FilteredUserLists({ profile, setUsername }) {
  return (
    <>
      <div className="grid grid-cols-1 divide-y absolute w-64  scroll-ml-2 snap-y mt-14 rounded-lg">
        {profile &&
          profile?.map((item, i) => (
            <Link
              href={`/${item.login}`}
              onClick={() => setUsername("")}
              key={i}
            >
              <div className="flex p-4 scroll-ml-2 snap-center bg-white hover:bg-gray-700 hover:text-white  rounded-lg">
                <Image
                  src={item.avatar_url}
                  width={100}
                  height={100}
                  className={`w-10 h-10 rounded-full mr-5`}
                />
                <span className="pt-2 ">{item.login}</span>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
