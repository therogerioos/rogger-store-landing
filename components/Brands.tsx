import Image from "next/image";

const brands = [
  "/mercado-livre-logo-vertical-2.svg",
  "/shopee-logo.svg",
  "/magalu-logo.svg",
  "/logo-amazon.svg",
  "/aliexpress-logo.svg",
];

export function Brands() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Marcas divulgadas
        </h2>

        <div className="
          mt-12
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          gap-6
        ">

          {brands.map((brand) => (
            <div
              key={brand}
              className="
                bg-white
                rounded-2xl
                p-6
                flex
                items-center
                justify-center
                aspect-square
                w-full
                hover:scale-105
                transition
              "
            >
              <Image src={brand} alt="Marca" width={80} height={80} className="object-contain w-full h-full"/>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}