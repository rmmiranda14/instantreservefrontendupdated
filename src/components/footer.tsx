import Link from "next/link"

export default function Footer() {
  return (

    <footer className="bg-red-600/30 text-white/90 static bottom-0 left-0 right-0 py-4 text-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-3 md:mb-0">
            <h3 className="font-semibold text-base mb-1">Our Address</h3>
            <address className="not-italic text-xs">
              123 Address St<br />
              San Diego, CA 91911 <br />
              United States
            </address>
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-xs">
            <Link href="/contactus" className="hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
            <Link href="/about-us" className="hover:text-gray-900 transition-colors">
              About Us
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
