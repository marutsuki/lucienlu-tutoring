import { routeComponents } from "@/config/routing.config";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";

const Footer: FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="relative bg-gray-800 text-white text-center py-6 px-6 lg:px-24 w-full flex flex-col-reverse lg:flex-row justify-between">
      <section className="my-2">
        <p className="text-xs text-left">Copyright © 2025 Marutsuki.</p>
      </section>
      <div className="text-end text-sm lg:mr-48 flex gap-12 lg:gap-24">
        <section className="text-start">
          <h3>Website Links</h3>
          <ul>
            {routeComponents.map((c) => (
              <li>
                <a
                  key={"footer-item-" + c.href}
                  className="cursor-pointer text-white! underline! text-xs"
                  onClick={() => navigate(c.href)}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <div className="flex gap-4 justify-end mb-4">
            <FaLinkedin
              className="cursor-pointer"
              size={24}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/lucienlu7789/",
                  "_blank"
                )
              }
            />
            <FaGithub
              className="cursor-pointer"
              size={24}
              onClick={() =>
                window.open("https://github.com/marutsuki/", "_blank")
              }
            />
          </div>
          <h3>Contact</h3>
          <ul className="text-xs">
            <li>Phone: +61 468 435 818</li>
            <li>Email: lucienlu2000@gmail.com</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
