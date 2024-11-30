<<<<<<< HEAD
/* import Link from "next/link";
=======
import Link from "next/link";
>>>>>>> restaurantinformation

interface NavbarItemProps {
	navLink: {
		label: string;
		link: string;
	};
}
export default function NavbarItem({ navLink }: NavbarItemProps) {
	return (
		<Link
			key={navLink.label}
			href={navLink.link}
		>
			<button className="mx-2">{navLink.label}</button>
		</Link>
	);
<<<<<<< HEAD
} */
=======
}
>>>>>>> restaurantinformation
