import { SideNavbar } from "../components/common/SideNavbar"
import { COMMON } from "../constants/common"
import { formatBreadcrumb } from "../utils/formatBreadcrumb";

export const Dashboard = () => {
  const breadcrumb = formatBreadcrumb();

  return (
    <div className="w-screen h-screen flex">
      <SideNavbar />

      {/* RESERVATION TABLE */}
            <div className="w-full h-full py-12 px-5">
              <div className="shadow-xl border border-gray-100">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h1 className="text-sm font-semibold">{breadcrumb}</h1>
                </div>
      
                {/* Table Placeholder */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm">{COMMON.DASHBOARD_EMPTY_STATE}</p>
                </div>
              </div>
      
            </div>
    </div>
  )
}