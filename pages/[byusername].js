import { useRouter } from "next/router";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import FooterBar from "../components/FooterBar";
import Repositories from "../components/Repositories";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import { getProfile } from "../redux/actions/profileActions";
import {
  getRepositories,
  getRepositoriesLength,
} from "../redux/actions/repositoriesActions";

export default function UserAccountData() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { byusername } = router.query;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const totalPerPage = 12;

  useEffect(() => {
    setTotalPages(Math.ceil(repositoriesLength.length / totalPerPage));
    dispatch(getRepositories(byusername, currentPage, totalPerPage));
    dispatch(getRepositoriesLength(byusername, currentPage));
    dispatch(getProfile(byusername));
  }, [byusername, currentPage, totalPages]);

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
        title=" GitHub Users API Gallery"
        isImage={true}
        isSearch={true}
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
