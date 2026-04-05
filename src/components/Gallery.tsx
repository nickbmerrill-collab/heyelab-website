/* eslint-disable @next/next/no-img-element */

const photos = [
  {
    src: "/images/datacenter-panorama.jpg",
    alt: "Data center electrical room with UPS and switchgear",
    caption: "First data center — Microsoft, 2018",
    span: true,
  },
  {
    src: "/images/2m-team.jpg",
    alt: "The 2M Electrical Reps team in San Antonio",
    caption: "The 2M team — San Antonio",
  },
  {
    src: "/images/plc-cabinet.jpg",
    alt: "PLC cabinet with Allen-Bradley controller and terminal blocks",
    caption: "PLC cabinet — designed, wired, programmed, commissioned",
  },
  {
    src: "/images/datacenter-switchgear.jpg",
    alt: "Switchgear lineup in a data center electrical room",
    caption: "Switchgear lineup — data center",
  },
  {
    src: "/images/datacenter-cooling.jpg",
    alt: "Data center cooling and power equipment",
    caption: "Data center electrical infrastructure",
  },
  {
    src: "/images/son-fishing.jpg",
    alt: "Nick's son holding a fishing rod in Port Aransas",
    caption: "Next generation — Port Aransas",
  },
  {
    src: "/images/factory-floor.jpg",
    alt: "Factory floor with industrial automation equipment",
    caption: "Factory floor — automation & controls",
  },
  {
    src: "/images/plc-cabinet-2.jpg",
    alt: "PLC cabinet interior with wiring and I/O modules",
    caption: "Controls panel — built from scratch",
  },
  {
    src: "/images/datacenter-ups.jpg",
    alt: "UPS systems in a data center power room",
    caption: "UPS lineup — data center power room",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-accent mb-4 tracking-wider uppercase">
            Gallery
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">From the field</h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Snapshots from the factory floor, job sites, and the work
            we do every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-bg-card border border-border ${
                photo.span ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  photo.span ? "aspect-[4/3]" : "aspect-[3/2]"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-white">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
