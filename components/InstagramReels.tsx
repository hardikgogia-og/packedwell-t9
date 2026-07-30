import Script from "next/script";

export function InstagramReels() {
  const reels = [
    "https://www.instagram.com/reel/DRbe_iBgVdl/",
    "https://www.instagram.com/reel/DbQt5jAh0ga/",
    "https://www.instagram.com/reel/Da0OPR8hG5b/",
  ];

  return (
    <>
      <Script async src="https://www.instagram.com/embed.js" />

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-center mb-4">
            Inside PackedWell Manufacturing
          </h2>

          <p className="text-center text-gray-400 mb-12">
            Watch our premium packaging process, craftsmanship and production journey.
          </p>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {reels.map((url, i) => (
              <blockquote
                key={i}
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  minWidth: "326px",
                  maxWidth: "540px",
                  width: "100%",
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
