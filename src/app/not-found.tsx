import MainButton from "@/component/MainButton";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex h-[65dvh]">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-gray-800 dark:text-gray-200">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6 text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <MainButton title="Back to Home" icon={FaHome} path="/" />
      </div>
    </div>
  );
}
