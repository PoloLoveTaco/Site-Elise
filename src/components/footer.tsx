import { Link } from "react-router-dom"
import viteLogo from "../assets/react.svg"

export default function Footer() {
	return (
		<footer className="bg-orange-300 text-white py-14">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

				{/* LEFT SECTION */}
				<div>
					<h2 className="text-xl md:text-2xl leading-relaxed max-w-xl">
						<span className="font-semibold">Lorem ipsum vestibulum</span> ipsum mauris 
						euismod auctor nulla <span className="font-semibold">tempor</span> quis aliquam 
						aliquet mi donec nulla.
					</h2>

					{/* Logo placeholder */}
					<div className="mt-6">
						<img 
							src={viteLogo} 
							alt="Logo" 
							className="w-16 h-16 bg-black rounded-sm object-contain"
						/>
					</div>

					<p className="text-sm opacity-80 mt-6 max-w-sm leading-relaxed">
						Lorem ipsum erat in aliquam laoreet ornare pretium a urna cursus mi.
					</p>
				</div>

				{/* RIGHT SECTION */}
				<div className="flex flex-wrap gap-16 md:justify-end">

					{/* COLUMN 1 */}
					<div>
						<h3 className="text-sm uppercase tracking-wide font-semibold mb-4">Contact us</h3>
						<ul className="space-y-2 text-sm opacity-90">
							<li>lorem ipsum</li>
						</ul>
					</div>

					{/* COLUMN 2 */}
					<div>
						<h3 className="text-sm uppercase tracking-wide font-semibold mb-4">Resources</h3>
						<ul className="space-y-2 text-sm opacity-90">
							<li><Link to="#" className="hover:underline">instagram</Link></li>
							<li><Link to="#" className="hover:underline">facebook</Link></li>
							<li><Link to="#" className="hover:underline">london east</Link></li>
						</ul>
					</div>

					{/* COLUMN 3 */}
					<div>
						<h3 className="text-sm uppercase tracking-wide font-semibold mb-4">Business</h3>
						<ul className="space-y-2 text-sm opacity-90">
							<li><Link to="#" className="hover:underline">About us</Link></li>
							<li><Link to="#" className="hover:underline">Careers</Link></li>
							<li><Link to="#" className="hover:underline">Partners</Link></li>
							<li><Link to="#" className="hover:underline">Privacy policy</Link></li>
						</ul>
					</div>
				</div>
			</div>

			{/* SEPARATOR LINE */}
			<div className="w-full border-t border-white/20 mt-12"></div>

			{/* BOTTOM TEXT */}
			<div className="max-w-7xl mx-auto px-6 flex justify-between text-xs mt-6 opacity-80">
				<p>Lorem ipsum in pretium</p>
				<p>a urna cursus mi.</p>
			</div>
		</footer>
	)
}
