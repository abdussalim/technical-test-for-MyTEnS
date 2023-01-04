import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import FooterBar from "../components/FooterBar";
import Repositories from "../components/Repositories";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import { getProfile } from "../redux/actions/profileActions";
import { getRepositories } from "../redux/actions/repositoriesActions";

export default function MyProfile() {
  const dispatch = useDispatch();
  const myusername = "abdussalim";
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProfile(myusername));
    dispatch(getRepositories(myusername, currentPage));
  }, [dispatch, currentPage]);

  const { profile } = useSelector((state) => state.profile);
  const { repositories } = useSelector((state) => state.repositories);

  const totalPerPage = 12;
  const totalPages = Math.ceil(profile.public_repos / totalPerPage);

  const onPageChange = () => {
    if (currentPage < 1) return setCurrentPage(1);
    if (currentPage >= totalPages) return setCurrentPage(totalPages);
    currentPage >= 1
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <NavigationBar
        id="searchrprofile"
        title=" GitHub Users API Gallery"
        placeholder="Search profile. . ."
        isSearch={true}
        isImage={true}
        isProfilePhoto={true}
      />
      <div class="container mx-auto p-6 flex">
        <Profile profile={profile} />
        <Repositories
          repositories={repositories}
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </div>
      <FooterBar />
    </>
  );
}
