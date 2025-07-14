import { useLocation } from "react-router-dom";

export function formatBreadcrumb(): string {
    const location = useLocation();
    const path = location.pathname;
  return path
    .toLowerCase()
    .split("/")
    .filter(Boolean)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" > ");
}