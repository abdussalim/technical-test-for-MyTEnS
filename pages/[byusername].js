import { useEffect } from "react";
import { useRouter } from "next/router";
import Profile from "../components/Profile";
import FooterBar from "../components/FooterBar";
import Repositories from "../components/Repositories";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import { getProfile } from "../redux/actions/profileActions";
import { getRepositories } from "../redux/actions/repositoriesActions";

export default function UserAccountData() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { byusername } = router.query;

  useEffect(() => {
    dispatch(getProfile(byusername));
    dispatch(getRepositories(byusername, 1));
  }, [byusername, dispatch]);

  const { profile } = useSelector((state) => state.profile);
  const { repositories } = useSelector((state) => state.repositories);

  return (
    <>
      <NavigationBar
        title=" GitHub Users API Gallery"
        isImage={true}
        isSearch={true}
        isProfilePhoto={true}
      />
      <div class="container mx-auto p-6 flex">
        <Profile profile={profile} />
        <Repositories profile={profile} repositories={repositories} />
      </div>
      <FooterBar />
    </>
  );
}
