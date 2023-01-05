import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import FooterBar from "../components/FooterBar";
import Repositories from "../components/Repositories";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import { getProfile } from "../redux/actions/profileActions";
import {
  getRepositories,
  getRepositoriesLength,
} from "../redux/actions/repositoriesActions";

export default function MyProfile() {
  const dispatch = useDispatch();
  const myusername = "abdussalim";
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const totalPerPage = 12;

  useEffect(() => {
    setTotalPages(Math.ceil(repositoriesLength.length / totalPerPage));
    dispatch(getRepositories(myusername, currentPage, totalPerPage));
    dispatch(getRepositoriesLength(myusername, currentPage));
    dispatch(getProfile(myusername));
  }, [currentPage, totalPages]);

  const { profile } = useSelector((state) => state.profile);
  const { repositories } = useSelector((state) => state.repositories);
  const { repositoriesLength } = useSelector(
    (state) => state.repositoriesLength
  );

  const onPageChange = (event) => {
    setCurrentPage(event);
  };

  return (
    <>
      <NavigationBar
        id="searchrprofile"
        title=" GitHub Users API Gallery"
        placeholder="Search profile. . ."
        isSearch={true}
        isImage={true}
        isProfilePhoto={false}
        isNavbarToggle={true}
      />
      <div class="container mx-auto p-6 flex flex-col lg:flex-row">
        <Profile profile={profile} />
        <Repositories
          repositories={repositories}
          repositoriesLength={repositoriesLength}
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </div>
      <FooterBar />
    </>
  );
}
