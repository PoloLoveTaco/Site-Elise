import elisePhoto from '../../assets/Elise.jpg'
import color from '../../assets/styles/color'

function APropos() {
    return (
        <div className={`bg-[${color.primary1}] text-slate-900`}>
            <div className="relative w-full min-h-[calc(100vh-4.5rem)] pt-20 overflow-hidden flex items-center">
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-20 -right-10 size-40 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
                    <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
                        <div className="bg-white/80 h-full rounded-2xl shadow-sm p-6 md:p-10 border border-white/60">
                            <h1 className="text-2xl font-oswald-bold text-slate-900 uppercase font-bold">Presentation</h1>
                            <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                                <p>
                                    Diplomee d'Etat en ergotherapie a l'IFE Paris Adere, j'accompagne les enfants et leurs
                                    familles depuis 2019. Apres plusieurs annees en cabinet liberal specialise en pediatrie
                                    en region parisienne, completees par des experiences en centres de reeducation aupres
                                    d'adultes, j'ai pu developper une pratique riche et diversifiee.
                                </p>
                                <p>
                                    En 2024, j'ai choisi de rejoindre la maison de sante pluriprofessionnelle des forges a
                                    La Roche-sur-Yon, animee par le souhait de revenir a mes racines et de continuer d'offrir
                                    un accompagnement en ergotherapie aux enfants.
                                </p>
                                <p>
                                    Attachee a la qualite de mes prises en soin, je me forme regulierement en pediatrie afin
                                    de proposer un suivi adapte et personnalise.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/80 h-full rounded-2xl shadow-sm p-4 md:p-6 border border-white/60 flex items-center justify-center">
                            <img
                                src={elisePhoto}
                                alt="Portrait d'Elise Durand"
                                className="w-full max-w-sm aspect-[4/5] rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                    <div className="mt-8 bg-white/80 rounded-2xl shadow-sm p-6 md:p-10 border border-white/60">
                        <h2 className="text-2xl font-oswald-bold text-slate-900 uppercase font-bold">Formation</h2>
                        <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                            <p>
                                Tout au long de ma pratique, je realise des formations afin d'enrichir mes competences et
                                de proposer un accompagnement adapte aux besoins specifiques de chaque enfant. J'ai ainsi
                                suivi des formations dans les domaines suivants :
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Integration sensorielle
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Comprendre comment l'enfant percoit et organise les informations sensorielles pour
                                        agir au quotidien, et l'accompagner s'il rencontre des difficultes affectant ses
                                        apprentissages ou son comportement.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Troubles de l'alimentation
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Soutien des enfants presentant des selectivites ou des difficultes alimentaires.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Trouble du spectre de l'autisme (TSA)
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Approches specifiques pour favoriser l'autonomie et la participation au quotidien
                                        des enfants TSA.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Methode CO-OP
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Cognitive Orientation to daily Occupational Performance : accompagnement centre
                                        sur les strategies pour ameliorer l'autonomie dans les activites de vie
                                        quotidienne.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        MCRO
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Mesure Canadienne du Rendement Occupationnel : outil d'evaluation et de suivi
                                        collaboratif pour identifier les activites importantes a ameliorer, puis mesurer
                                        les progres realises.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Motricite fine
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Ameliorer les competences en motrices fine, coordination oeil-main et bi-manuelle,
                                        essentielles pour les gestes precis du quotidien et de l'ecole.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Developpement de l'enfant (0 a 6 ans)
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Acquisition des reperes essentiels sur les etapes cles du developpement moteur,
                                        cognitif, emotionnel et social afin d'identifier precocement d'eventuelles
                                        difficultes et d'adapter les interventions.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Reflexes archaiques
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        Etude des reflexes primitifs du nourrisson et de leur integration. Comprendre
                                        comment certains reflexes persistants peuvent influencer la posture, la motricite,
                                        l'equilibre et l'apprentissage, et adapter les interventions.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className="rounded-xl border p-4 shadow-sm md:col-span-2">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Le trouble du calcul
                                    </h3>
                                    <p className="mt-2 text-slate-700">
                                        L'accompagnement des troubles du calcul vise a ameliorer les apprentissages
                                        mathematiques aux situations de la vie quotidienne, comme gerer son argent, lire
                                        l'heure, mesurer des ingredients.
                                    </p>
                                </div>
                            </div>
                            <p>
                                Ces differentes formations me permettent de proposer une prise en charge globale et
                                personnalisee, en tenant compte des besoins propres a chaque enfant et de leur famille.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APropos
