import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGear, faBars, faChartLine } from "@fortawesome/free-solid-svg-icons";
import type { ReactElement } from "react";

interface SideNavbarMenuType {
  category: string;
  items: SideNavbarItemType[];
}

interface SideNavbarItemType {
  name: string;
  path: string;
  icon: ReactElement;
}

export const SIDE_NAVBAR_MENU: SideNavbarMenuType[] = [
  {
    category: "Main",
    items: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <FontAwesomeIcon icon={faChartLine} />
      }
    ]
  },
  {
    category: "Reservations",
    items: [
      {
        name: "Manage",
        path: "/reservations/manage",
        icon: <FontAwesomeIcon icon={faBars} />
      },
    ]
  },
  {
    category: "Drivers",
    items: [
      {
        name: "Manage",
        path: "/drivers",
        icon: <FontAwesomeIcon icon={faBars} />

      }
    ]
  },
  {
    category: "Users",
    items: [
      {
        name: "Manage",
        path: "/users",
        icon: <FontAwesomeIcon icon={faUsers} />

      }
    ]
  },
  {
    category: "Settings",
    items: [
      {
        name: "Change Password",
        path: "/settings/change-password",
        icon: <FontAwesomeIcon icon={faGear} />
      }
    ]
  }
];
