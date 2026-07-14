export function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#F2F1EE", fontFamily: "Manrope, sans-serif" }}
      className="py-28 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p
          style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }}
          className="uppercase mb-8 text-center"
        >
          About the Studio
        </p>

        {/* Big quote-style text */}
        <p
          className="text-center mb-16"
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            lineHeight: 1.25,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
          }}
        >
          TRD Creative Studio is an independent design studio based in Indonesia. We work closely with designers and product teams to transform ideas, requirements, and challenges into practical digital experiences.
        </p>

        {/* Founder row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Founder */}
          <div className="flex items-center gap-4">
            <div
              className="rounded-full overflow-hidden flex-shrink-0"
              style={{ width: "56px", height: "56px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p style={{ color: "#1A1A1A", fontSize: "14px", fontWeight: 600 }}>Trisna Raditya</p>
              <p style={{ color: "#888888", fontSize: "12px", fontWeight: 400 }}>Founder & Lead Designer</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-12">
            {[
              { value: "2016", label: "Founded" },
              { value: "IDN", label: "Based in Indonesia" },
              { value: "Global", label: "Clients Served" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "Archivo, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#1A1A1A",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ color: "#888888", fontSize: "11px", fontWeight: 400, marginTop: "2px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
