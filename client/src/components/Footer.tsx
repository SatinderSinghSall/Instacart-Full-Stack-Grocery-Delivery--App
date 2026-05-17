import { BikeIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { footerData } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-app-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* - top -  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BikeIcon className="size-6 text-white" />
              <span className="text-xl font-semibold">
                {footerData.brand.name}
              </span>
            </Link>

            <p className="text-sm text-white/70 mb-4">
              {footerData.brand.description}
            </p>

            <div className="flex gap-3">
              {footerData.brand.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="size-9 rounded-lg bg-white/10 flex-center hover:bg-white/2"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerData.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-white/70 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {footerData.contact.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex gap-3 text-sm text-white/70">
                    <Icon className="size-4 text-white" /> {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">{footerData.bottom.copyright}</p>

          <div className="flex gap-4">
            {footerData.bottom.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs text-white/50 hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
