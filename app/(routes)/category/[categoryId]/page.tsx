import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
// import { Category as CategoryType } from "@/types";
import Filter from "./components/filter";
// import ProductList from "@/components/product-list";
import MobileFilters from "./components/mobile-filters";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface CategoryPageProps {
	params: { categoryId: string };
	searchParams: {
		size?: string;
		color?: string;
	};
	// category: CategoryType;
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
	params,
	searchParams,
}) => {
	const products = await getProducts({
		categoryId: params.categoryId,
		size: searchParams.size,
		color: searchParams.color,
	});

	// console.log("category Product:", products);

	const sizes = await getSizes();
	const colors = await getColors();
	const category = await getCategory(params.categoryId);

	console.log("category page,", category)

	return (
		// @ts-ignore
		<div className="bg-white">
			<Container>
				<Billboard data={category.billboard} />
				<div className="px-4 sm:px-6 lg:px-8 pb-24">
					<div className="lg:grid lg:grid-cols-5 lg:gap-x-8 w-full">
						<MobileFilters colors={colors} sizes={sizes} />
						<div className="hidden lg:block">
							<Filter
								valueKey="size"
								name="Size"
								data={sizes}
							/>
							<Filter
								valueKey="color"
								name="Color"
								data={colors}
							/>
						</div>
						<div className="mt-6 lg:mt-0 lg:col-span-4">
							{products.length === 0 && <NoResults />}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								{products.map((item) => (
									<ProductCard key={item.id} data={item} />
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CategoryPage;
