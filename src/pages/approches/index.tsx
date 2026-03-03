import { useState } from "react"
import approchesBanner from "../../assets/baniere-les-approches.png"
import color from "../../assets/styles/color"

function Approches() {
    const approaches = [
        {
            id: "approche-1",
            title: "CO-OP",
            summary: "Cognitive Orientation to daily Occupational Performance.",
            content:
                "L’approche CO-OP (Cognitive Orientation to daily Occupational Performance) est une méthode d’intervention centrée sur l’enfant (ou l’adulte) qui rencontre des difficultés à réaliser certaines activités du quotidien : s’habiller, écrire, faire du vélo, préparer un cartable, etc. Plutôt que de répéter uniquement la tâche jusqu’à ce qu’elle soit réussie, le CO-OP aide la personne à trouver ses propres stratégies pour atteindre ses objectifs. L’enfant va déterminer avec l’ergothérapeute ce qu’il souhaite vraiment apprendre ou améliorer. Grâce à une méthode avec des étapes spécifiques, l’ergothérapeute accompagne l’enfant à observer, analyser et ajuster sa façon de faire. Les stratégies trouvées peuvent ensuite être utilisées dans d’autres activités de la vie quotidienne. L’enfant gagne en autonomie et confiance et apprend à résoudre des problèmes par lui-même. Les parents et l’entourage peuvent aussi être impliqués, afin de soutenir les apprentissages dans le quotidien.",
        },
        {
            id: "approche-2",
            title: "Intégration sensorielle",
            summary: "Approche d’organisation et de régulation des informations sensorielles.",
            content:
                "L’intégration sensorielle est une approche développée par la Dr A. Jean Ayres, ergothérapeute et psychologue, dans les années 1970. Elle part du principe que notre cerveau reçoit en permanence des informations de nos sens (vue, ouïe, toucher, odorat, goût, mais aussi équilibre et sensations du corps), et qu’il doit les organiser pour nous permettre d’agir, de nous concentrer, d’apprendre et de participer à la vie quotidienne. Chez certains enfants, ce traitement de l’information sensorielle peut être difficile. Cela peut se manifester par : une hypersensibilité (certains bruits, textures ou mouvements sont insupportables), une hyposensibilité (recherche constante de stimulations, besoin de bouger beaucoup), des difficultés à coordonner ses gestes, à se concentrer ou à gérer ses émotions. L’ergothérapeute formé à la méthode d’intégration sensorielle propose alors des activités ludiques et adaptées qui stimulent les différents systèmes sensoriels (balancements, sauts, manipulations de textures, jeux moteurs, etc.). Ces expériences, organisées de manière progressive, aident le cerveau à mieux traiter et intégrer les informations reçues. L’objectif est donc d’améliorer la régulation sensorielle, la concentration, la motricité, les apprentissages et le bien-être des enfants, pour favoriser son autonomie dans la vie de tous les jours. Elle est particulièrement indiquée pour les enfants présentant : un trouble du spectre de l’autisme (TSA), un trouble développemental de la coordination (TDC), un TDAH, des troubles des apprentissages.",
        },
        {
            id: "approche-3",
            title: "Troubles alimentaires en pédiatrie",
            summary: "Accompagnement global pour diversifier l’alimentation et apaiser les repas.",
            content:
                "L’alimentation est une activité quotidienne essentielle, mais certains enfants rencontrent des difficultés pour manger : refus de certains aliments, hypersensibilités aux textures, difficultés à mâcher, à avaler ou à accepter les morceaux, répertoire alimentaire très restreint. Ces situations peuvent générer du stress lors des repas, aussi bien pour l’enfant que pour sa famille. En ergothérapie, l’accompagnement des troubles alimentaires pédiatriques repose sur une approche globale : évaluation personnalisée pour comprendre les causes des difficultés (sensorielles, motrices, posturales, émotionnelles, environnementales). Travail sensoriel et moteur : proposer des jeux et activités pour aider l’enfant à explorer progressivement différentes textures, températures, odeurs et goûts, et renforcer les compétences orales (mâcher, avaler, gérer les morceaux). Aménagements pratiques : adapter la posture, les ustensiles, l’organisation des repas pour faciliter l’autonomie et le confort. Accompagnement familial : donner des stratégies aux parents pour rendre les repas plus sereins et soutenir la progression de l’enfant. Le but de la rééducation est d’aider l’enfant à diversifier son alimentation, à diminuer les difficultés et à retrouver du plaisir à partager les repas.",
        },
        {
            id: "approche-4",
            title: "Rééducation graphique",
            summary: "Améliorer la fluidité, la lisibilité et le confort de l’écriture.",
            content:
                "L’écriture est une compétence essentielle pour la scolarité, mais elle peut être source de difficultés pour certains enfants : écriture illisible, lenteur, fatigue, douleurs dans la main ou encore manque de motivation face aux tâches scolaires. Ces difficultés peuvent avoir plusieurs origines : motricité fine, posture, tonus musculaire, organisation spatiale, planification ou encore difficultés sensorielles. En ergothérapie, la rééducation graphique vise à : évaluer les capacités de l’enfant (motricité fine, coordination, posture, tenue du crayon, organisation de l’espace sur la feuille). Proposer des exercices ludiques et adaptés pour améliorer la fluidité du geste, renforcer les muscles sollicités par l’écriture et développer la motricité fine. Travailler la posture et l’ergonomie : installation à la table, ajustement du matériel scolaire, choix de l’outil scripteur le plus adapté. Développer la confiance et le plaisir d’écrire, afin que l’enfant puisse progresser et gagner en autonomie dans ses apprentissages scolaires. Le but de la rééducation graphique est d’aider l’enfant à écrire de manière plus fluide, lisible et confortable, afin de lui redonner confiance et de favoriser sa réussite scolaire. Si malgré un accompagnement régulier, l’écriture reste difficile, l’ergothérapeute évalue la pertinence d’un outil de compensation (ordinateur, tablette, logiciels adaptés, etc.) pour pallier les difficultés persistantes : écriture douloureuse, trop lente, illisible, mais aussi fautes d’orthographe ou difficultés du langage écrit.",
        },
        {
            id: "approche-5",
            title: "Réflexes archaïques",
            summary: "Intégration des réflexes primitifs pour soutenir la motricité et l’attention.",
            content:
                "Les réflexes archaïques sont des mouvements automatiques présents chez le nouveau-né (comme le réflexe de succion ou le réflexe de préhension). Ils jouent un rôle essentiel dans le développement du bébé : ils l’aident à s’adapter à son environnement, à développer sa motricité, son équilibre et ses premières expériences sensorielles. Avec la croissance, ces réflexes devraient progressivement s’intégrer au système nerveux. Cela signifie qu’ils laissent place à des mouvements plus volontaires, fluides et coordonnés. Cependant, chez certains enfants, certains réflexes peuvent rester actifs plus longtemps que prévu ou être mal intégrés. Cela peut avoir un impact sur : la posture et l’équilibre, la coordination motrice et la motricité fine (écriture, manipulation d’objets), l’attention, la concentration et l’organisation, la gestion des émotions et le comportement. En ergothérapie, le travail autour des réflexes archaïques consiste à proposer des exercices corporels spécifiques qui stimulent le système nerveux pour favoriser leur intégration. Ces mouvements, réalisés de manière ludique et adaptée à l’âge de l’enfant, visent à améliorer la qualité du geste, les apprentissages scolaires et le bien-être au quotidien.",
        },
        {
            id: "approche-6",
            title: "Troubles du calcul",
            summary: "Accompagnement des apprentissages numériques au quotidien.",
            content:
                "Les compétences en calcul ne se limitent pas aux mathématiques scolaires. Elles sont présentes dans de nombreuses activités du quotidien : compter son argent, lire l’heure, mesurer des ingrédients en cuisine, s’orienter dans le temps ou encore comprendre une consigne numérique. Chez certains enfants, des difficultés apparaissent dans la manipulation des nombres, la compréhension des quantités ou la résolution de problèmes. Ces difficultés peuvent rendre les apprentissages scolaires et les activités de la vie quotidienne plus complexes. Les difficultés peuvent concerner : la reconnaissance et l’écriture des chiffres, le dénombrement et la notion de quantité, les calculs simples (additions, soustractions, multiplications, divisions), la mémorisation des faits numériques (tables de multiplication, doubles, moitiés), l’utilisation des mathématiques dans la vie courante (faire ses courses, rendre la monnaie, utiliser une horloge, se repérer dans un planning).",
        },
    ]
    const [selectedId, setSelectedId] = useState(approaches[0].id)
    const selected = approaches.find((item) => item.id === selectedId) ?? approaches[0]

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
                        {approaches.map((item) => {
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
                <p className="text-lg text-slate-700 mt-3 text-justify">{selected.content}</p>
            </section>
        </div>
    )
}

export default Approches
