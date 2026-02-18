import CategoryProductsScreen from "@/features/categories/screens/category-products.screen";

type CategoryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;

  return (
    <>
      <CategoryProductsScreen categoryId={id} />
    </>
  );
}
