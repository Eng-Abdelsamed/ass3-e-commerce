import { getAllBrands } from "@/features/brands/server/brand.action";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default async function BrandScreen() {
  const response = await getAllBrands();

  return (
    <>
      {/* Purple Header Banner */}
      <section className="bg-linear-to-r from-purple-600 to-purple-400 py-16 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Brands</span>
          </nav>

          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-md shadow-lg border border-white/20">
              <FontAwesomeIcon icon={faTag} className="text-4xl" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
                Top Brands
              </h1>
              <p className="text-purple-100 text-lg font-medium">
                Shop from your favorite brands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section id="brands" className="py-20 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {response.data.map((brand) => (
              <Link
                href={`/brands/${brand._id}`}
                key={brand._id}
                className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 group ring-1 ring-gray-200/50 flex flex-col items-center"
              >
                <div className="aspect-square w-full relative overflow-hidden rounded-2xl bg-gray-50/50 mb-4 group-hover:scale-105 transition-transform duration-500 ease-out">
                  <Image
                    fill
                    src={brand.image}
                    alt={brand.name}
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 15vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-purple-600/5 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                  {brand.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
