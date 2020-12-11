import image from "../joe-woods-4Zaq5xY5M_c-unsplash.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Textured Brick Wall"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-gray-600 font-bold cursive leading-none lg:leading-snug home-name">
          你好！I'm Gaylon.
        </h1>
      </section>
    </main>
  );
}
