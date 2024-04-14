import getBillboards from "@/actions/get-billboards";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSearchProducts from "@/actions/get-search-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

// import Filter from "./components/filter";
// import MobileFilters from "./components/mobile-filters";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface ProductsPageProps {
	// params: { categoryId: string };
	searchParams: {
		// size?: string;
		// color?: string;
		q?: string;
	};
	// category: CategoryType;
}

const ProductsPage: React.FC<ProductsPageProps> = async ({
	// params,
	searchParams,
}) => {
	const products = await getSearchProducts({
		// categoryId: params.categoryId,
		// size: searchParams.size,
		// color: searchParams.color,
		q: searchParams.q,
	});

	// console.log("category Product:", products);

	// const sizes = await getSizes();
	// const colors = await getColors();
	// const category = await getCategory(params.categoryId);
	const billboard = await getBillboards(
		"538322ae-f255-477a-9551-12bd49570d8f"
	);

	// console.log("category page,", category)

	return (
		// @ts-ignore
		<div className="bg-white">
			<Container>
				<Billboard data={billboard} />
				<div className="px-4 sm:px-6 lg:px-8 pb-24">
					<div className="lg:grid lg:grid-cols-5 lg:gap-x-8 w-full">
						{/* <MobileFilters colors={colors} sizes={sizes} />
						<div className="hidden lg:block">
							<Filter valueKey="size" name="Size" data={sizes} />
							<Filter
								valueKey="color"
								name="Color"
								data={colors}
							/>
						</div> */}
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

export default ProductsPage;
