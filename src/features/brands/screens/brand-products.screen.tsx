import { getProductsByBrand } from "@/features/products/server/product.actions";
import { getBrandById } from "@/features/brands/server/brand.action";
import ProductCard from "@/features/products/componants/ProductCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTag } from "@fortawesome/free-solid-svg-icons";

interface BrandProductsScreenProps {
  brandId: string;
}

export default async function BrandProductsScreen({
  brandId,
}: BrandProductsScreenProps) {
  const [productsResponse, brandResponse] = await Promise.all([
    getProductsByBrand(brandId),
    getBrandById(brandId),
  ]);

  const brand = brandResponse.data;
  const products = productsResponse.data;

  return (
    <>
      {/* Brand Header */}
      <section className="bg-linear-to-r from-purple-600 to-purple-400 py-12 text-white">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/brands" className="hover:underline">
              Brands
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{brand.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm shadow-inner hidden sm:block">
                <FontAwesomeIcon icon={faTag} className="text-3xl" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-1">{brand.name}</h1>
                <p className="text-white/80">
                  Showing {products.length} products from {brand.name}
                </p>
              </div>
            </div>

            <Link
              href="/brands"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-lg self-start md:self-auto"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50/50 min-h-[400px]">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} info={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-gray-400 mb-4">
                <FontAwesomeIcon icon={faTag} className="text-6xl opacity-20" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No Products Found
              </h2>
              <p className="text-gray-500 mb-8">
                We couldn't find any products for {brand.name}.
              </p>
              <Link
                href="/brands"
                className="text-purple-600 font-bold hover:underline"
              >
                Browse other brands
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
