import BrandProductsScreen from "@/features/brands/screens/brand-products.screen";

type BrandPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BrandPage({ params }: BrandPageProps) {
  const { id } = await params;

  return (
    <>
      <BrandProductsScreen brandId={id} />
    </>
  );
}
