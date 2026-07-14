const projects = [
  {
    id: 1,
    title: "Archivum Brand Identity",
    category: "Branding & Identity",
    year: "2024",
    img: "https://images.unsplash.com/photo-1770591060040-25fd7d6a4c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 2,
    title: "Vela Product Design",
    category: "Product Design",
    year: "2024",
    img: "https://images.unsplash.com/photo-1559032806-99a331d600b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 3,
    title: "Folio Design System",
    category: "Design System",
    year: "2023",
    img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 4,
    title: "Motif Visual Identity",
    category: "Branding & Strategy",
    year: "2023",
    img: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 5,
    title: "Pines Mobile App",
    category: "UI/UX Design",
    year: "2023",
    img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 6,
    title: "Quorum Dashboard",
    category: "Product Design",
    year: "2022",
    img: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
];

export function SelectedWork() {
  return (
    <section id="work" style={{ backgroundColor: "#F2F1EE", fontFamily: "Manrope, sans-serif" }} className="py-24 px-6 md:px-12">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <p style={{ color: "#E8571E", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }} className="uppercase mb-3">
            Our Portfolio
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
            Selected Work
          </h2>
        </div>
        <a
          href="#"
          style={{ color: "#1A1A1A", fontSize: "13px", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}
          className="self-start md:self-auto"
        >
          View all projects →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm mb-4" style={{ aspectRatio: "4/3" }}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "sepia(0.3) saturate(1.1) brightness(0.95)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
              >
                <span style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 500 }}>View Project →</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-start justify-between">
              <div>
                <p style={{ color: "#1A1A1A", fontSize: "15px", fontWeight: 600 }} className="mb-1">
                  {project.title}
                </p>
                <p style={{ color: "#888888", fontSize: "12px", fontWeight: 400 }}>{project.category}</p>
              </div>
              <span style={{ color: "#AAAAAA", fontSize: "12px", fontWeight: 400 }}>{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
