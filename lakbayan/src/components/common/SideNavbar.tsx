import { useNavigate } from "react-router-dom";
import { COMMON } from "../../constants/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { SIDE_NAVBAR_MENU } from "../../constants/sideNavbarItems";

export const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-56 h-screen shadow-lg bg-white [&.is-dragging]:active:cursor-grabbing">
      {/* Header */}
      <div className="h-12 flex items-center gap-2 px-4 opacity-90 shadow">
        <FontAwesomeIcon icon={faVanShuttle} className="text-black text-xl" />
        <span className="font-semibold text-md text-black">{COMMON.APP_NAME}</span>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center justify-center p-5 border-b border-gray-200">
        <div className="w-20 h-20 rounded-full border border-gray-400 bg-gray-100" />
        <div className="mt-2 text-md font-semibold">John Doe</div>
        <div className="text-sm text-gray-600">User</div>
      </div>

      {/* Menu Sections */}
      <nav className="mt-4">
        {SIDE_NAVBAR_MENU.map((menu, index) => (
          <div key={index} className="px-4 mb-4">
            <div className="text-xs uppercase font-semibold text-gray-500 mb-2">
              {menu.category}
            </div>
            <ul>
              {menu.items.map((item, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-2 text-sm px-2 py-2 rounded hover:bg-gray-200 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
