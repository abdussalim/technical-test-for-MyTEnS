import { Pagination } from "flowbite-react";
import NavigationBar from "../NavigationBar";

export default function Repositories({
  repositories,
  currentPage,
  onPageChange,
  totalPages,
}) {
  return (
    <>
      <div class="grow h-full p-4">
        <div className="border-2 border-gray-700 rounded-lg">
          <NavigationBar
            title="Repository"
            currentPage={currentPage}
            isImage={false}
            isSearch={false}
            isPaginate={true}
            isNavbarToggle={false}
          />
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-3 sm:gap-y-3 md:gap-8 my-5">
          {repositories.map((repository, index) => {
            return (
              <div
                key={index}
                class="w-full h-full bg-white border-2 border-gray-700 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="flex flex-col items-center my-10">
                  <h5 class="mb-1 text-md font-medium text-gray-900 dark:text-white">
                    {repository.name}
                  </h5>
                  <span class="text-md font-medium text-gray-500 dark:text-gray-400 mt-5">
                    {repository.language
                      ? `[ ${repository.language} ]`
                      : `[ Unidentified ]`}
                  </span>
                  <div class="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href={repository.html_url}
                      class="inline-flex items-center px-4 py-2 text-md font-small text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center text-center">
          <Pagination
            currentPage={currentPage}
            layout="navigation"
            onPageChange={onPageChange}
            totalPages={totalPages}
            showIcons={true}
            previousLabel=""
            nextLabel=""
          />
        </div>
      </div>
    </>
  );
}
