/* eslint-disable @next/next/no-img-element */

const photos = [
  {
    src: "/images/datacenter-power-room.jpg",
    alt: "Data center power room with UPS and switchgear lineups",
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
    src: "/images/busway-tapbox.jpg",
    alt: "Custom busway tap box with cable whip",
    caption: "Custom busway solution — Apple/Flextronics, Austin",
  },
  {
    src: "/images/datacenter-cooling.jpg",
    alt: "Data center cooling plant and generators aerial view",
    caption: "Cooling plant — data center exterior",
  },
  {
    src: "/images/son-fishing.jpg",
    alt: "Fishing rod on the dock in Port Aransas",
    caption: "Next generation — Port Aransas",
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
                  style={{ objectFit: "cover" }}
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
