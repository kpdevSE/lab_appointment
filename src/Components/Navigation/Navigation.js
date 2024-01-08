import navLogo from "../../assets/logo dark.png";
import hamburgerMenu from "../../assets/bx_bx-menu-alt-right.png";

export default function Navigation() {
  return (
    <div className="bg-black w-full h-16 md:h-20 md:pt-2 sticky top-0">
      <div className="flex flex-row item-center justify-around p-3">
        <img
          src={navLogo}
          alt=""
          className="w-36 relative bottom-2 md:h-20 md:w-48 md:bottom-6"
        />
        <button className=" w-24 h-10 bg-black text-white rounded-sm border border-white">
          LOG IN
        </button>
        <img src={hamburgerMenu} alt="" className="h-10 md:hidden" />
        <div className="mobile-view ">
          <ul className="md:flex md:flex-row md:items-center md:justify-around md:text-white md:gap-16 hidden md:p-2">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Product</li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
