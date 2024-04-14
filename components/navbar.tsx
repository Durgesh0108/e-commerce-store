import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { SearchInput } from "./ui/search_input";

const Navbar = async () => {
	const categories = await getCategories();

	return (
		<div>
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-4 flex h-16 items-center">
					<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
						<p className="font-bold text-xl">STORE</p>
					</Link>
					<MainNav data={categories} />
					<SearchInput/>
					<NavbarActions/>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
