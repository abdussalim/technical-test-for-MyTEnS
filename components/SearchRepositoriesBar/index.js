import { Navbar, TextInput } from "flowbite-react";

export default function SearchRepositoriesBar() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Repository
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <TextInput id="usersearch" placeholder="Search repository . . ." />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
