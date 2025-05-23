import Image from "next/image";
import Button from "./buttons";

export default function Card({
  title,
  cardInfo,
  image,
  features,
  demo,
  repo,
}: {
  title?: string;
  cardInfo: string;
  image: string;
  features?: string[];
  demo?: string;
  repo?: string;
}) {
  return (
    <section className="w-full mx-auto flex flex-col lg:flex-row items-center bg-gray-300 dark_bg border border-gray-700 rounded-xl sm:p-6 px-2 py-6 shadow-lg hover:border-gray-600 transition-transform duration-300 easeInOut cursor-pointer">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center sm:h-auto h-[300]">
        <Image
          src={image}
          alt="Project image"
          quality={100}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <article className="flex flex-col gap-4 w-full lg:w-1/2 px-4">
        <header className="flex justify-start items-center">
          {title && (
            <h2 className="my-3 sm:text-3xl text-xl font-bold text-[#104455] dark_tx_glow">
              {title}
            </h2>
          )}
        </header>
        <p className="text-lg">{cardInfo}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="list-disc list-inside text-sm">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Live Demo & Repo Links */}
        {(demo || repo) && (
          <div className="flex gap-4 mt-3">
            {demo && <Button path={demo} text="🔗 Demo" />}
            {repo && <Button path={repo} text="💻 Code" />}
          </div>
        )}
      </article>
    </section>
  );
}
