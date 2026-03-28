"use client";

import { useState, useRef, useEffect } from "react";

export default function GalleryImage({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      {!error && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={src}
          alt={caption}
          className={`w-full aspect-[16/9] object-cover ${loaded ? "" : "hidden"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {!loaded && (
        <div className="aspect-[16/9] flex items-center justify-center text-text-muted">
          <div className="text-center p-6">
            <svg
              className="w-10 h-10 mx-auto mb-2 text-border-accent"
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
              {src.split("/").pop()}
            </p>
            <p className="text-sm text-text-secondary mt-1">{caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
