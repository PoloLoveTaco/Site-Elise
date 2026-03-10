import color from '../assets/styles/color';

export default function Footer() {
	return (
		<footer style={{ borderColor: color.secondaryG1}} className={`bg-[${color.primary1}] text-[${color.primary2}] py-3 border-t-1`}>
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

				<div>
					<h2 className="text-l leading-relaxed max-w-xl font-semibold">
						<p>Cabinet ergothérapie à la Roche sur Yon</p>
						<p><span className="font-semibold text-[#997f6b]">Elise Durand</span> Ergothérapeute D.E.</p>
					</h2>

					<p className="text-sm opacity-80 mt-2 max-w-sm leading-relaxed">
						MSP des Forges, 69 Boulevard Edison, 85000 La Roche sur Yon.
					</p>
				</div>

				<div className="flex flex-wrap gap-16 md:justify-end">

					<div>
						<h3 className="text-sm uppercase tracking-wide font-semibold mb-2">Contact</h3>
						<ul className="space-y-1 text-sm opacity-90">
							<li>tel: 06.74.84.39.73</li>
							<li>email: elisedurand.ergo@gmail.com</li>
							<li>du lundi au vendredi, 8h a 18h30</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 flex justify-between text-xs mt-2 opacity-80">
				<p>© 2026</p>
			</div>
		</footer>
	)
}
