import elisePhoto from '../../assets/Elise.jpg'
import color from '../../assets/styles/color'

function APropos() {
    return (
        <div className={`text-slate-900`}>
            <div className="relative w-full min-h-[calc(100vh-4.5rem)] pt-20 overflow-hidden flex items-center">
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-20 -right-10 size-40 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
                    <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
                        <div className="h-full rounded-2xl shadow-sm p-6 md:p-10 border " style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                            <h1 className="text-2xl font-oswald-bold text-slate-900 uppercase font-bold">Présentation</h1>
                            <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                                <p className='text-justify'>
                                    Diplômée d’État en ergothérapie à l’IFE Paris Adere, j’accompagne les enfants et leurs
                                    familles depuis 2019. Après plusieurs années en cabinet libéral spécialisé en pédiatrie
                                    en région parisienne, complétées par des expériences en centres de rééducation auprès
                                    d’adultes, j’ai pu développer une pratique riche et diversifiée.
                                </p>
                                <p className='text-justify'>
                                    En 2024, j’ai choisi de rejoindre la maison de santé pluriprofessionnelle des Forges à
                                    La Roche-sur-Yon, animée par le souhait de revenir à mes racines et de continuer d’offrir
                                    un accompagnement en ergothérapie aux enfants.
                                </p>
                                <p className='text-justify'>
                                    Attachée à la qualité de mes prises en soin, je me forme régulièrement en pédiatrie afin
                                    de proposer un suivi adapté et personnalisé.
                                </p>
                            </div>
                        </div>
                        <div className="h-full rounded-2xl shadow-sm p-4 md:p-6 border flex items-center justify-center" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                            <img
                                src={elisePhoto}
                                alt="Portrait d'Elise Durand"
                                className="w-full max-w-sm aspect-[4/5] rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                    <div className="mt-8 rounded-2xl shadow-sm p-6 md:p-10 border" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                        <h2 className="text-2xl font-oswald-bold text-slate-900 uppercase font-bold">Formation</h2>
                        <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                            <p className='text-justify'>
                                Tout au long de ma pratique, je réalise des formations afin d’enrichir mes compétences et
                                de proposer un accompagnement adapté aux besoins spécifiques de chaque enfant. J’ai ainsi
                                suivi des formations dans les domaines suivants :
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Intégration sensorielle
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Comprendre comment l’enfant perçoit et organise les informations sensorielles pour
                                        agir au quotidien, et l’accompagner s’il rencontre des difficultés affectant ses
                                        apprentissages ou son comportement.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Troubles de l’alimentation
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Soutien des enfants présentant des sélectivités ou des difficultés alimentaires.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Trouble du spectre de l’autisme (TSA)
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Approches spécifiques pour favoriser l’autonomie et la participation au quotidien
                                        des enfants TSA.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Méthode CO-OP
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Cognitive Orientation to daily Occupational Performance : accompagnement centré
                                        sur les stratégies pour améliorer l’autonomie dans les activités de vie
                                        quotidienne.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        MCRO
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Mesure Canadienne du Rendement Occupationnel : outil d’évaluation et de suivi
                                        collaboratif pour identifier les activités importantes à améliorer, puis mesurer
                                        les progrès réalisés.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Motricité fine
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Améliorer les compétences en motricité fine, coordination œil-main et bimanuelle,
                                        essentielles pour les gestes précis du quotidien et de l’école.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Développement de l’enfant (0 à 6 ans)
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Acquisition des repères essentiels sur les étapes clés du développement moteur,
                                        cognitif, émotionnel et social afin d’identifier précocement d’éventuelles
                                        difficultés et d’adapter les interventions.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className=" rounded-xl border p-4 shadow-sm">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Réflexes archaïques
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        Étude des réflexes primitifs du nourrisson et de leur intégration. Comprendre
                                        comment certains réflexes persistants peuvent influencer la posture, la motricité,
                                        l’équilibre et l’apprentissage, et adapter les interventions.
                                    </p>
                                </div>
                                <div style={{ backgroundColor: color.primary1, borderColor: color.primary1 }} className="rounded-xl border p-4 shadow-sm md:col-span-2">
                                    <h3 className="font-oswald-bold text-slate-900 uppercase">
                                        Le trouble du calcul
                                    </h3>
                                    <p className="mt-2 text-slate-700 text-justify">
                                        L’accompagnement des troubles du calcul vise à améliorer les apprentissages
                                        mathématiques aux situations de la vie quotidienne, comme gérer son argent, lire
                                        l’heure, mesurer des ingrédients.
                                    </p>
                                </div>
                            </div>
                            <p className='text-justify'>
                                Ces différentes formations me permettent de proposer une prise en charge globale et
                                personnalisée, en tenant compte des besoins propres à chaque enfant et de leur famille.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APropos
