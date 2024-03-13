import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	categoryId?: string;
	color?: string;
	size?: string;
	isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
	const url = queryString.stringifyUrl({
		url: URL,
		query: {
			categoryId: query.categoryId,
			size: query.size,
			color: query.color,
			isFeatured: query.isFeatured,
		},
	});

	const res = await fetch(url);
	return res.json();
};

export default getProducts;
