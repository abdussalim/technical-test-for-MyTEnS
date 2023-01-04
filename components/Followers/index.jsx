import NavigationBar from "../NavigationBar";

export default function Followers() {
  return (
    <>
      <div class="grow h-full bg-blue-200 p-4">
        <div>
          <NavigationBar
            id="searchfollowers"
            title="Your Followers"
            placeholder="Search followers. . ."
            isImage={false}
          />
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-3 sm:gap-y-3 md:gap-8 my-5">
          {repositories.map((repository, index) => {
            return (
              <div
                key={index}
                class="w-full max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="flex flex-col items-center py-5">
                  <h5 class="mb-1 text-md font-medium text-gray-900 dark:text-white">
                    {repository.name}
                  </h5>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                  </span>
                  <div class="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add friend
                    </a>
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      Message
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
            layout="pagination"
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={totalPages}
            previousLabel=""
            nextLabel=""
          />
        </div>
      </div>
    </>
  );
}
