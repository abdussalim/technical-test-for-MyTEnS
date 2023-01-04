import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";
import Profile from "../components/Profile";
import Repositories from "../components/Repositories";

export default function Home() {
  return (
    <>
      <NavigationBar
        id="searchrprofile"
        title=" GitHub Users API Gallery"
        placeholder="Search profile. . ."
        isImage={true}
      />
      <div class="container mx-auto p-6 flex">
        <Profile />
        <Repositories />
      </div>
      <FooterBar />
    </>
  );
}
