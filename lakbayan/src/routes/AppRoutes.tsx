import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard.tsx";
import { Reservation } from "../pages/Reservation.tsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element="" />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reservations/manage" element={<Reservation />} />
      <Route path="/drivers" element="" />
      <Route path="/users" element="" />
      <Route path="/settings" element="" />
    </Routes>
  )
}