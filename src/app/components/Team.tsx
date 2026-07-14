const members = [
  {
    id: 1,
    name: "Trisna Raditya",
    role: "Founder & Lead Designer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 2,
    name: "Anisa Wardani",
    role: "UX Researcher",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 3,
    name: "Sari Permata",
    role: "Brand Designer",
    img: "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

export function Team() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", fontFamily: "Manrope, sans-serif" }} className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }}
            className="uppercase mb-3"
          >
            Our Team
          </p>
          <h2
            style={{
              fontFamily: "Archivo, sans-serif",
              fontWeight: 200,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            The people behind <br className="hidden md:block" />
            TRD Creative Studio
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              <div
                className="overflow-hidden rounded-2xl mb-5"
                style={{ width: "100%", aspectRatio: "3/4" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "sepia(0.15) saturate(1.05) brightness(0.97)" }}
                />
              </div>
              <p style={{ color: "#1A1A1A", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>
                {member.name}
              </p>
              <p style={{ color: "#888888", fontSize: "12px", fontWeight: 400 }}>{member.role}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p
          className="text-center mt-14"
          style={{ color: "#AAAAAA", fontSize: "13px", fontWeight: 400, lineHeight: 1.8, maxWidth: "480px", margin: "56px auto 0" }}
        >
          We're a small and focused team that works closely with every client. No hand-offs to juniors — you always work directly with us.
        </p>
      </div>
    </section>
  );
}
