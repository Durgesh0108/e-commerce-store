import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
	const billboards = await getBillboards(
		"538322ae-f255-477a-9551-12bd49570d8f"
	);
	const products = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className="pb-10 space-y-10">
				<Billboard data={billboards} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured Product" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
