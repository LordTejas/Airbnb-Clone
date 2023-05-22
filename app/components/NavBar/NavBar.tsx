import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Container from "../Container";

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-md">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <SearchBar />
          </div>
        </Container>
      </div>
    </nav>
  );
}
