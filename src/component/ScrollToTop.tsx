"use client";

import { useState, useEffect } from "react";
import { IoMdRocket } from "react-icons/io";

const ScrollToTopLayout = ({ children }: { children: React.ReactNode }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative">
      {showButton && (
        <button
          className="fixed  bottom-9 right-6 z-50 cursor-pointer border hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2"
          onClick={scrollToTop}
        >
          <IoMdRocket style={{ fontSize: "30px" }} />
        </button>
      )}
      {children}
    </section>
  );
};

export default ScrollToTopLayout;
