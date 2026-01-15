import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const navItems = [
	{ label: "L’ergothérapie en pédiatrie", to: "/ergopediatrie" },
	{ label: "Les interventions", to: "/interventions" },
	{ label: "Les approches", to: "/approches" },
	{ label: "A propos", to: "/apropos" },
	{ label: "Contact", to: "/contact" },
]

function HeaderBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 0)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const forceSolidHeaderContact = location.pathname === "/contact"
	const forceSolidHeaderPropos = location.pathname === "/apropos"

	return (
		<header className={`text-white fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || forceSolidHeaderContact || forceSolidHeaderPropos ? "bg-orange-300" : "bg-transparent"}`}>
			<div className="w-full px-3">
				<div className="flex h-18 items-center justify-between">

					{/* LOGO + TITRE */}
					<Link to="/home" className="flex items-center gap-3">
						<p className="font-oswald-bold text-3xl text-white">
							Elise Durand
						</p>
					</Link>


					{/* NAVIGATION DESKTOP */}
					<nav className="hidden md:flex items-center ml-auto">
						<ul className="flex items-center gap-3">
							{navItems.map((item) => (
								<li key={item.label}>
									<Link to={item.to}>
										<p className="font-oswald text-lg lg:text-xl py-2 px-3">
											{item.label}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* BOUTON MENU MOBILE */}
					<button
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen((v) => !v)}
						className="md:hidden p-2 text-white focus:outline-none"
					>
						{!isMenuOpen ? (
							/* ICON BURGER */
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							/* ICON CLOSE */
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M6.225 4.811a.75.75 0 0 1 1.06 0L12 9.525l4.715-4.714a.75.75 0 1 1 1.06 1.06L13.06 10.586l4.715 4.714a.75.75 0 1 1-1.06 1.06L12 11.646l-4.715 4.714a.75.75 0 0 1-1.06-1.06l4.714-4.714-4.714-4.715a.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* MENU MOBILE */}
			{isMenuOpen && (
				<nav className="md:hidden border-t border-white/20 px-3 py-2">
					<ul className="space-y-1">
						{navItems.map((item) => (
							<li key={item.label}>
								<Link to={item.to}>
									<p className="font-oswald text-lg py-2 px-3">
										{item.label}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}

export default HeaderBar
