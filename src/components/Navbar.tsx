import Link from "next/link";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
	const navLinks = [
		{ label: "Home", link: "/" },
		{ label: "Support", link: "/support" },
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
}