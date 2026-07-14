export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Studio: ["Work", "Services", "About", "Pricing"],
    Connect: ["LinkedIn", "Dribbble", "Behance", "Instagram"],
    Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  };

  return (
    <footer style={{ backgroundColor: "#1A1A1A", fontFamily: "Manrope, sans-serif" }} className="px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-12" style={{ borderBottom: "1px solid #2A2A2A" }}>
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span style={{ color: "#E8571E", fontSize: "10px", fontWeight: 700 }}>●</span>
              <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em" }}>
                TRD Creative Studio
              </span>
            </div>
            <p style={{ color: "#555555", fontSize: "13px", fontWeight: 400, lineHeight: 1.75, maxWidth: "280px" }}>
              An independent design studio crafting clear digital experiences from complex ideas.
            </p>
            <p style={{ color: "#E8571E", fontSize: "13px", fontWeight: 500, marginTop: "16px" }}>
              hello@trdcreative.studio
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                style={{
                  color: "#555555",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  marginBottom: "16px",
                }}
                className="uppercase"
              >
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ color: "#888888", fontSize: "13px", fontWeight: 400 }}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: "#444444", fontSize: "12px", fontWeight: 400 }}>
            © {currentYear} TRD Creative Studio. All rights reserved.
          </p>
          <p style={{ color: "#444444", fontSize: "12px", fontWeight: 400 }}>
            Designed with care in Indonesia 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
