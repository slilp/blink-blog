import IconButton from "@/component/IconButton";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-3 pb-5 border-t-1 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto text-center">
        <div>
          <IconButton path="https://github.com/slilp" icon={FaGithub} />
          <IconButton path="https://github.com/slilp" icon={FaLinkedin} />
        </div>
        <p className="text-sm pt-1">
          © {new Date().getFullYear()} Blink Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
