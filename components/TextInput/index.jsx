import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../redux/actions/profileActions";

export default function TextInput({ username, setUsername, setProfile }) {
  const dispatch = useDispatch();
  const {
    searchProfile: { items },
  } = useSelector((state) => state.searchProfile);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchUser(username));
    setProfile(items);
  };

  return (
    <>
      <form>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative w-full md:w-96">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search user..."
            required
          />
          <button
            onClick={handleSearch}
            class="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:cursor-pointer hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
