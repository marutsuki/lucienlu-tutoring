import { routeComponents } from "@/app/routes";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 px-24 w-full flex justify-between">
      <section>
        <p className="text-xs">Copyright © 2025 Marutsuki.</p>
      </section>
      <div className="text-end text-sm mr-48 flex gap-24">
        <section className="text-start">
          <h3>Website Links</h3>
          <ul>
            {routeComponents.map((c) => (
              <li>
                <a
                  key={"footer-item-" + c.href}
                  className="cursor-pointer text-white! underline! text-xs"
                  href={c.href}
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
