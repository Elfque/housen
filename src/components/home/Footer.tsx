import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const exploreLinks = ["Home", "Properties", "Services", "Insights", "About Us"];
const companyLinks = ["Our Story", "Careers", "Press", "Blog", "Contact"];
const resourceLinks = ["FAQ", "Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                <span className="text-sm font-bold">H</span>
              </div>

              <span className="text-lg font-semibold tracking-widest">
                HOUSEN
              </span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              We design and build spaces that inspire, elevate, and endure.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#" className="rounded-full border border-white/20 p-3">
                <FaFacebook size={16} />
              </a>

              <a href="#" className="rounded-full border border-white/20 p-3">
                <FaInstagram size={16} />
              </a>

              <a href="#" className="rounded-full border border-white/20 p-3">
                <FaXTwitter size={16} />
              </a>

              <a href="#" className="rounded-full border border-white/20 p-3">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 font-semibold">Explore</h3>

            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 font-semibold">Company</h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 font-semibold">Resources</h3>

            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 font-semibold">Newsletter</h3>

            <p className="mb-6 text-sm text-white/60">
              Stay updated with the latest insights and properties.
            </p>

            <div className="flex overflow-hidden rounded-full border border-white/20">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none"
              />

              <button className="bg-[#D9B88C] px-6 text-black">→</button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>© 2026 HOUSEN. All rights reserved.</p>

          <p>Designed with ❤️ for better living.</p>

          <button className="hover:text-white">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
