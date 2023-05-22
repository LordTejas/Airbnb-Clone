import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Container from "../Container";
import UserMenu from "./UserMenu";

export default function NavBar() {
    
  return (
    <nav className="fixed w-full bg-white z-10 shadow-md">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <SearchBar />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
}
