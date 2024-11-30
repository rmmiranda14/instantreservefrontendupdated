<<<<<<< HEAD
/* import Link from "next/link";
=======
import Link from "next/link";
>>>>>>> restaurantinformation
import NavbarItem from "./NavbarItem";

export default function Navbar() {
	const navLinks = [
		{ label: "Home", link: "/" },
		{ label: "Restaurant-results", link: "/restaurant-results" },
	];
	return (
		<nav>
			{navLinks.map((navLink) => (
				<NavbarItem
					key={navLink.label}
					navLink={navLink}
				/>
			))}
		</nav>
	);
<<<<<<< HEAD
} */
=======
}
>>>>>>> restaurantinformation
