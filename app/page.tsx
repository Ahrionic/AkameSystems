import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/images/Firefly_Gemini_Flash.png"
          alt="Banner"
          width={1920}
          height={400}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
