// components
import ButtonSecondary from "./ButtonSecondary";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-[80px] bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6 xl:px-0">
        {/* logo */}
        <Logo />
        {/* btn */}
        <ButtonSecondary btnText="Rejoigner-nous" />
      </div>
    </header>
  );
};

export default Header;
