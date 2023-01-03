import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Repositories from "../components/Repositories";

export default function Home() {
  return (
    <>
      <Navbar />
      <div class="container flex">
        <Profile />
        <Repositories />
      </div>
    </>
  );
}
