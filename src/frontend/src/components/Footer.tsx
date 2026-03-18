import { Facebook, Instagram, MapPin, Mountain, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Places to Visit", href: "#places" },
  { label: "Hotels & Stays", href: "#hotels" },
  { label: "Local Guides", href: "#guides" },
  { label: "Travel Tips", href: "#tips" },
  { label: "Emergency", href: "#emergency" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative text-white"
      style={{
        background: "linear-gradient(to bottom, #1B1B1B 0%, #111 100%)",
      }}
    >
      {/* Mountain silhouette accent */}
      <div
        className="h-16 w-full"
        style={{
          background: "#1B1B1B",
          clipPath:
            "polygon(0 100%, 10% 40%, 25% 70%, 40% 20%, 55% 60%, 70% 10%, 85% 50%, 100% 30%, 100% 100%)",
          marginTop: "-1px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-nepal-orange flex items-center justify-center">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                Nepal<span className="text-nepal-orange-light">Yatra</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your complete guide to exploring Nepal. Discover ancient temples,
              stunning peaks, and vibrant culture.
            </p>
            <div className="flex items-center gap-1 text-white/50 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              Kathmandu, Nepal
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-nepal-orange-light text-sm transition-colors"
                    data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-white/80 mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-nepal-orange transition-colors flex items-center justify-center cursor-pointer"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
            <div className="text-white/40 text-xs space-y-1">
              <p>Open daily: 8:00 AM – 8:00 PM NPT</p>
              <p>+977-1-4444-555 (Tourist Helpline)</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {year}. Built with ❤️ for Nepal travelers using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nepal-orange-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-white/30 text-xs">
            Made with love for travelers worldwide 🏔️
          </p>
        </div>
      </div>
    </footer>
  );
}
