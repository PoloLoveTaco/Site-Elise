import { useState } from "react"
import approchesBanner from "../../assets/baniere-les-approches.png"
import color from "../../assets/styles/color"

function Approches() {
    const approches = [
        {
            id: "approche-1",
            title: "CO-OP",
            summary: "Cognitive Orientation to daily Occupational Performance.",
            content: (
                <>
                    - L’approche CO-OP (Cognitive Orientation to daily Occupational Performance) est <span className="font-semibold">une méthode d’intervention centrée sur l’enfant (ou l’adulte) qui rencontre des difficultés à réaliser certaines activités du quotidien</span> : s’habiller, écrire, faire du vélo, préparer un cartable, etc.
                    <br />
                    <br />
                    - Plutôt que de répéter uniquement la tâche jusqu’à ce qu’elle soit réussie, la CO-OP <span className="font-semibold">aide la personne à trouver ses propres stratégies pour atteindre ses objectifs</span>.
                    <br />
                    <br />
                    - L’enfant va déterminer avec l’ergothérapeute ce qu’il souhaite vraiment apprendre ou améliorer. Grâce à une méthode avec des étapes spécifiques, <span className="font-semibold">l’ergothérapeute accompagne l’enfant à observer, analyser et ajuster sa façon de faire</span>.
                    <br />
                    <br />
                    - Les stratégies trouvées peuvent ensuite être utilisées dans d’autres activités de la vie quotidienne. L’enfant gagne en autonomie et confiance et apprend à résoudre des problèmes par lui-même. Les parents et l’entourage peuvent aussi être impliqués, afin de soutenir les apprentissages dans le quotidien.
                </>
            ),
        },
        {
            id: "approche-2",
            title: "Intégration sensorielle",
            summary: "Approche d’organisation et de régulation des informations sensorielles.",
            content: (
                <>
                    - L’intégration sensorielle est <span className="font-semibold">une approche développée par la Dr A. Jean Ayres, ergothérapeute et psychologue</span>, dans les années 1970.
                    <br />
                    <br />
                    - Elle part du principe que <span className="font-semibold">notre cerveau reçoit en permanence des informations de nos sens</span> (vue, ouïe, toucher, odorat, goût, mais aussi équilibre et sensations du corps), et <span className="font-semibold">qu’il doit les organiser pour nous permettre d’agir, de nous concentrer, d’apprendre et de participer à la vie quotidienne</span>.
                    <br />
                    <br />
                    - Chez certains enfants, ce traitement de l’information sensorielle peut être difficile. Cela peut se manifester par : une <span className="font-semibold">hypersensibilité</span> (certains bruits, textures ou mouvements sont insupportables), une <span className="font-semibold">hyposensibilité</span> (recherche constante de stimulations, besoin de bouger beaucoup), des <span className="font-semibold">difficultés à coordonner ses gestes</span>, à <span className="font-semibold">se concentrer</span> ou à <span className="font-semibold">gérer ses émotions</span>.
                    <br />
                    <br />
                    - <span className="font-semibold">L’ergothérapeute formé à la méthode d’intégration sensorielle propose alors des activités ludiques et adaptées qui stimulent les différents systèmes sensoriels</span> (balancements, sauts, manipulations de textures, jeux moteurs, etc.). Ces expériences, organisées de manière progressive, aident le cerveau à mieux traiter et intégrer les informations reçues.
                    <br />
                    <br />
                    - <span className="font-semibold">L’objectif est donc d’améliorer la régulation sensorielle, la concentration, la motricité, les apprentissages et le bien-être des enfants, pour favoriser son autonomie dans la vie de tous les jours</span>. Elle est particulièrement indiquée pour les enfants présentant : un trouble du spectre de l’autisme (TSA), un trouble développemental de la coordination (TDC), un TDAH, des troubles des apprentissages.
                </>
            )
        },
        {
            id: "approche-3",
            title: "Troubles alimentaires en pédiatrie",
            summary: "Accompagnement global pour diversifier l’alimentation et apaiser les repas.",
            content: ( 
                <>
                    L’alimentation est une activité quotidienne essentielle, mais certains enfants rencontrent des difficultés pour manger : <span className="font-semibold">refus de certains aliments, hypersensibilités aux textures, difficultés à mâcher, à avaler ou à accepter les morceaux, répertoire alimentaire très restreint</span>.
                    <br />
                    <br />
                    Ces situations peuvent générer du stress lors des repas, aussi bien pour l’enfant que pour sa famille.
                    <br />
                    <br />
                    <span className="font-semibold">En ergothérapie, l’accompagnement des troubles alimentaires pédiatriques repose sur une approche globale :</span>
                    <br />
                    <br />
                    - <span className="font-semibold">Évaluation personnalisée</span> pour comprendre les causes des difficultés (sensorielles, motrices, posturales, émotionnelles, environnementales).
                    <br />
                    <br />
                    - <span className="font-semibold">Travail sensoriel et moteur</span> : proposer des jeux et activités pour aider l’enfant à explorer progressivement différentes textures, températures, odeurs et goûts, et renforcer les compétences orales (mâcher, avaler, gérer les morceaux).
                    <br />
                    <br />
                    - <span className="font-semibold">Aménagements</span> : adapter la posture, les ustensiles, l’organisation des repas pour faciliter l’autonomie et le confort.
                    <br />
                    <br />
                    - <span className="font-semibold">Accompagnement</span> : donner des stratégies aux parents pour rendre les repas plus sereins et soutenir la progression de l’enfant. Le but de la rééducation est d’aider l’enfant à diversifier son alimentation, à diminuer les difficultés et à retrouver du plaisir à partager les repas.
                </>
            )
        },
        {
            id: "approche-4",
            title: "Rééducation graphique",
            summary: "Améliorer la fluidité, la lisibilité et le confort de l’écriture.",
            content: (
                <>
                    L’écriture est une compétence essentielle pour la scolarité, mais elle peut être source de difficultés pour certains enfants : <span className="font-semibold">écriture illisible, lenteur, fatigue, douleurs dans la main ou encore manque de motivation face aux tâches scolaires</span>.
                    <br />
                    <br />
                    Ces difficultés peuvent avoir plusieurs origines : motricité fine, posture, tonus musculaire, organisation spatiale, planification ou encore difficultés sensorielles.
                    <br />
                    <br />
                    <span className="font-semibold">En ergothérapie, la rééducation graphique vise à :</span>
                    <br />
                    <br />
                    - <span className="font-semibold">Évaluer les capacités de l’enfant</span> (motricité fine, coordination, posture, tenue du crayon, organisation de l’espace sur la feuille).
                    <br />
                    <br />
                    - <span className="font-semibold">Proposer des exercices ludiques et adaptés</span> pour améliorer la fluidité du geste, renforcer les muscles sollicités par l’écriture et développer la motricité fine.
                    <br />
                    <br />
                    - <span className="font-semibold">Travailler la posture et l’ergonomie</span> : installation à la table, ajustement du matériel scolaire, choix de l’outil scripteur le plus adapté.
                    <br />
                    <br />
                    - <span className="font-semibold">Développer la confiance et le plaisir d’écrire</span>, afin que l’enfant puisse progresser et gagner en autonomie dans ses apprentissages scolaires.
                    <br />
                    <br />
                    Le but de la rééducation graphique est <span className="font-semibold">d’aider l’enfant à écrire de manière plus fluide, lisible et confortable</span>, afin de lui redonner confiance et de favoriser sa réussite scolaire.
                    <br />
                    <br />
                    <span className="font-semibold">Si malgré un accompagnement régulier, l’écriture reste difficile, l’ergothérapeute évalue la pertinence d’un outil de compensation</span> (ordinateur, tablette, logiciels adaptés, etc.) pour pallier les difficultés persistantes : écriture douloureuse, trop lente, illisible, mais aussi fautes d’orthographe ou difficultés du langage écrit.
                </>
            )
        },
        {
            id: "approche-5",
            title: "Réflexes archaïques",
            summary: "Intégration des réflexes primitifs pour soutenir la motricité et l’attention.",
            content: (
                <>
                    - Les réflexes archaïques sont des <span className="font-semibold">mouvements automatiques présents chez le nouveau-né</span> (comme le réflexe de succion ou le réflexe de préhension). Ils jouent un rôle essentiel dans le développement du bébé : <span className="font-semibold">ils l’aident à s’adapter à son environnement, à développer sa motricité, son équilibre et ses premières expériences sensorielles</span>.
                    <br />
                    <br />
                    - <span className="font-semibold">Avec la croissance, ces réflexes devraient progressivement s’intégrer au système nerveux</span>. Cela signifie qu’ils laissent place à des mouvements plus volontaires, fluides et coordonnés.
                    <br />
                    <br />
                    - Cependant, chez certains enfants, <span className="font-semibold">certains réflexes peuvent rester actifs plus longtemps que prévu ou être mal intégrés</span>. Cela peut avoir un impact sur : la posture et l’équilibre, la coordination motrice et la motricité fine (écriture, manipulation d’objets), l’attention, la concentration et l’organisation, la gestion des émotions et le comportement.
                    <br />
                    <br />
                    - <span className="font-semibold">En ergothérapie, le travail autour des réflexes archaïques consiste à proposer des exercices corporels spécifiques qui stimulent le système nerveux pour favoriser leur intégration</span>. Ces mouvements, réalisés de manière ludique et adaptée à l’âge de l’enfant, visent à améliorer la qualité du geste, les apprentissages scolaires et le bien-être au quotidien.
                </>
            )
        },
        {
            id: "approche-6",
            title: "Troubles du calcul",
            summary: "Accompagnement des apprentissages numériques au quotidien.",
            content: (
                <>
                    - Les compétences en calcul ne se limitent pas aux mathématiques scolaires. Elles sont présentes dans de nombreuses activités du quotidien : compter son argent, lire l’heure, mesurer des ingrédients en cuisine, s’orienter dans le temps ou encore comprendre une consigne numérique.
                    <br />
                    <br />
                    - Chez certains enfants, des <span className="font-semibold">difficultés apparaissent dans la manipulation des nombres, la compréhension des quantités ou la résolution de problèmes</span>. Ces difficultés peuvent rendre les apprentissages scolaires et les activités de la vie quotidienne plus complexes.
                    <br />
                    <br />
                    - Les difficultés peuvent concerner : <span className="font-semibold">la reconnaissance et l’écriture des chiffres</span>, le <span className="font-semibold">dénombrement</span> et la <span className="font-semibold">notion de quantité</span>, les <span className="font-semibold">calculs simples</span> (additions, soustractions, multiplications, divisions), la <span className="font-semibold">mémorisation des faits numériques</span> (tables de multiplication, doubles, moitiés), <span className="font-semibold">l’utilisation des mathématiques dans la vie courante</span> (faire ses courses, rendre la monnaie, utiliser une horloge, se repérer dans un planning).
                </>
            )
        },
    ]
    const [selectedId, setSelectedId] = useState(approches[0].id)
    const selected = approches.find((item) => item.id === selectedId) ?? approches[0]

    return (
        <div className={`text-slate-900`}>
            <div className="relative w-full h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-sm"
                    style={{ backgroundImage: `url(${approchesBanner})` }}
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="relative z-[1] flex flex-col text-center justify-center items-center h-full text-white font-bold">
                    <p className="text-6xl">Les approches</p>
                </div>
            </div>

            <section className={`relative overflow-hidden bg-[${color.primary1}]`}>
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-20 -right-10 size-40 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#997f6b] font-leckerli">
                        Les différentes approches
                    </h1>
                    <p className="text-lg text-slate-700 mt-4 max-w-3xl">
                        Consultez une approche en cliquant sur un des boutons ci-dessous
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {approches.map((item) => {
                            const isSelected = item.id === selectedId
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setSelectedId(item.id)}
                                    className={`rounded-xl border p-4 shadow-sm transition hover:-translate-y-1 ${
                                        isSelected
                                            ? "bg-[#FFEFD5] border-[#FFEFD5] text-slate-900"
                                            : "bg-white/90 border-white/70 text-slate-900"
                                    }`}
                                >
                                    <p className="text-sm font-oswald-bold uppercase tracking-[0.10em] font-bold">
                                        {item.title}
                                    </p>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-[#997f6b] font-leckerli">{selected.title}</h2>
                <p className="text-lg text-slate-700 mt-3 text-justify whitespace-pre-line">
                    {selected.content}
                </p>
            </section>
        </div>
    )
}

export default Approches
