const photos = [
  {
    src: "/images/riverside-controls-panel.jpg",
    alt: "Controls panel at Riverside Engineering",
    caption: "Controls panel design — Riverside Engineering",
  },
  {
    src: "/images/riverside-factory-floor.jpg",
    alt: "Factory floor at a metal recycling center",
    caption: "Metal recycling facility automation",
  },
  {
    src: "/images/riverside-plc-programming.jpg",
    alt: "PLC programming and commissioning",
    caption: "PLC programming & commissioning",
  },
  {
    src: "/images/power-busway-install.jpg",
    alt: "Power busway installation",
    caption: "Power busway installation — data center project",
  },
  {
    src: "/images/power-busway-product.jpg",
    alt: "Power busway product",
    caption: "Power busway product innovation",
  },
  {
    src: "/images/heye-power-site.jpg",
    alt: "High-current systems consulting",
    caption: "High-current ampacity consulting",
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
            Snapshots from the factory floor, job sites, and the work that
            defines my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-bg-card border border-border ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  i === 0 ? "aspect-[4/3]" : "aspect-[3/2]"
                } flex items-center justify-center text-text-muted`}
              >
                <div className="text-center p-6">
                  <svg
                    className="w-12 h-12 mx-auto mb-3 text-border-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs font-mono text-text-muted">
                    {photo.src.split("/").pop()}
                  </p>
                  <p className="text-sm text-text-secondary mt-2">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Caption overlay (visible when real images are added) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-white">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-text-muted mt-8 font-mono">
          Drop your photos into <code className="text-accent">/public/images/</code> with the
          filenames shown above
        </p>
      </div>
    </section>
  );
}
