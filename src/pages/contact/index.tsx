import color from "../../assets/styles/color"

function Contact() {
    return (
        <div className={`bg-[${color.primary1}] text-slate-900`}>
            <div className="relative w-full min-h-[calc(100vh-4.5rem)] pt-20 overflow-hidden flex items-center">
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-20 -right-10 size-40 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
                    <div className="bg-white/80 rounded-2xl shadow-sm p-6 md:p-10 border border-white/60">
                        <div className="grid gap-6 text-lg leading-relaxed text-slate-700 md:grid-cols-2">
                            <div>
                                <p className="text-sm font-oswald-bold uppercase tracking-[0.2em] text-slate-900">Telephone</p>
                                <p className="mt-2 text-2xl text-slate-900">06.74.84.39.73</p>
                            </div>
                            <div>
                                <p className="text-sm font-oswald-bold uppercase tracking-[0.2em] text-slate-900">Mail</p>
                                <p className="mt-2 text-2xl text-slate-900">elisedurand.ergo@gmail.com</p>
                            </div>
                            <div>
                                <p className="text-sm font-oswald-bold uppercase tracking-[0.2em] text-slate-900">Adresse</p>
                                <p className="mt-2 text-xl">MSP des Forges</p>
                                <p className="text-xl">69 Boulevard Edison</p>
                                <p className="text-xl">85000 La Roche sur Yon</p>
                            </div>
                            <div>
                                <p className="text-sm font-oswald-bold uppercase tracking-[0.2em] text-slate-900">Horaires</p>
                                <p className="mt-2 text-xl">Du lundi au vendredi</p>
                                <p className="text-xl">de 8h a 18h30</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-lg text-slate-700">
                                Pour toute demande de bilan en ergotherapie, vous pouvez vous inscrire sur la liste
                                d'attente en suivant le lien ci-dessous :
                            </p>
                            <a
                                className="mt-4 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-oswald-bold uppercase tracking-[0.2em] text-white transition hover:bg-orange-600"
                                href="https://www.rdvlive.fr/r/form/EPSPZ4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                S'inscrire
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
