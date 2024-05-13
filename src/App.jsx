import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
