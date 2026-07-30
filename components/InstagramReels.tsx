export default function InstagramReels() {
  const reels = [
    "https://www.instagram.com/reel/REEL_ID_1/",
    "https://www.instagram.com/reel/REEL_ID_2/",
    "https://www.instagram.com/reel/REEL_ID_3/",
  ]

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-serif text-center mb-10">
          Inside PackedWell Manufacturing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((url, i) => (
            <blockquote
              key={i}
              className="instagram-media"
              data-instgrm-permalink={url}
              style={{ minWidth: "326px" }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
