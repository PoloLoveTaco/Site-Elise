import { useState } from "react"

function Approches() {
    const approaches = [
        {
            id: "approche-1",
            title: "CO-OP",
            summary: "Cognitive Orientation to daily Occupational Performance.",
            content:
                "L'approche CO-OP (Cognitive Orientation to daily Occupational Performance) est une methode d'intervention centree sur l'enfant (ou l'adulte) qui rencontre des difficultes a realiser certaines activites du quotidien : s'habiller, ecrire, faire du velo, preparer un cartable, etc. Plutot que de repeter uniquement la tache jusqu'a ce qu'elle soit reussie, le CO-OP aide la personne a trouver ses propres strategies pour atteindre ses objectifs. L'enfant va determiner avec l'ergotherapeute ce qu'il souhaite vraiment apprendre ou ameliorer. Grace a une methode avec des etapes specifiques, l'ergotherapeute accompagne l'enfant a observer, analyser et ajuster sa facon de faire. Les strategies trouvees peuvent ensuite etre utilisees dans d'autres activites de la vie quotidienne. L'enfant gagne en autonomie et confiance et apprend a resoudre des problemes par lui-meme. Les parents et l'entourage peuvent aussi etre impliques, afin de soutenir les apprentissages dans le quotidien.",
        },
        {
            id: "approche-2",
            title: "Integration sensorielle",
            summary: "Approche d'organisation et de regulation des informations sensorielles.",
            content:
                "L'integration sensorielle est une approche developpee par la Dr A. Jean Ayres, ergotherapeute et psychologue, dans les annees 1970. Elle part du principe que notre cerveau recoit en permanence des informations de nos sens (vue, ouie, toucher, odorat, gout, mais aussi equilibre et sensations du corps), et qu'il doit les organiser pour nous permettre d'agir, de nous concentrer, d'apprendre et de participer a la vie quotidienne. Chez certains enfants, ce traitement de l'information sensorielle peut etre difficile. Cela peut se manifester par : une hypersensibilite (certains bruits, textures ou mouvements sont insupportables), une hyposensibilite (recherche constante de stimulations, besoin de bouger beaucoup), des difficultes a coordonner ses gestes, a se concentrer ou a gerer ses emotions. L'ergotherapeute forme a la methode d'integration sensorielle propose alors des activites ludiques et adaptees qui stimulent les differents systemes sensoriels (balancements, sauts, manipulations de textures, jeux moteurs, etc.). Ces experiences, organisees de maniere progressive, aident le cerveau a mieux traiter et integrer les informations recues. L'objectif est donc d'ameliorer la regulation sensorielle, la concentration, la motricite, les apprentissages et le bien-etre des enfants, pour favoriser son autonomie dans la vie de tous les jours. Elle est particulierement indiquee pour les enfants presentant : un trouble du spectre de l'autisme (TSA), un trouble developpemental de la coordination (TDC), un TDAH, des troubles des apprentissages.",
        },
        {
            id: "approche-3",
            title: "Troubles alimentaires en pediatrie",
            summary: "Accompagnement global pour diversifier l'alimentation et apaiser les repas.",
            content:
                "L'alimentation est une activite quotidienne essentielle, mais certains enfants rencontrent des difficultes pour manger : refus de certains aliments, hypersensibilites aux textures, difficultes a mastiquer, a avaler ou a accepter les morceaux, repertoire alimentaire tres restreint. Ces situations peuvent generer du stress lors des repas, aussi bien pour l'enfant que pour sa famille. En ergotherapie, l'accompagnement des troubles alimentaires pediatriques repose sur une approche globale : evaluation personnalisee pour comprendre les causes des difficultes (sensorielles, motrices, posturales, emotionnelles, environnementales). Travail sensoriel et moteur : proposer des jeux et activites pour aider l'enfant a explorer progressivement differentes textures, temperatures, odeurs et gouts, et renforcer les competences orales (macher, avaler, gerer les morceaux). Amenagements pratiques : adapter la posture, les ustensiles, l'organisation des repas pour faciliter l'autonomie et le confort. Accompagnement familial : donner des strategies aux parents pour rendre les repas plus sereins et soutenir la progression de l'enfant. Le but de la reeducation est d'aider l'enfant a diversifier son alimentation, a diminuer les difficultes et a retrouver du plaisir a partager les repas.",
        },
        {
            id: "approche-4",
            title: "Reeducation graphique",
            summary: "Ameliorer la fluidite, la lisibilite et le confort de l'ecriture.",
            content:
                "L'ecriture est une competence essentielle pour la scolarite, mais elle peut etre source de difficultes pour certains enfants : ecriture illisible, lenteur, fatigue, douleurs dans la main ou encore manque de motivation face aux taches scolaires. Ces difficultes peuvent avoir plusieurs origines : motricite fine, posture, tonus musculaire, organisation spatiale, planification ou encore difficultes sensorielles. En ergotherapie, la reeducation graphique vise a : evaluer les capacites de l'enfant (motricite fine, coordination, posture, tenue du crayon, organisation de l'espace sur la feuille). Proposer des exercices ludiques et adaptes pour ameliorer la fluidite du geste, renforcer les muscles sollicites par l'ecriture et developper la motricite fine. Travailler la posture et l'ergonomie : installation a la table, ajustement du materiel scolaire, choix de l'outil scripteur le plus adapte. Developper la confiance et le plaisir d'ecrire, afin que l'enfant puisse progresser et gagner en autonomie dans ses apprentissages scolaires. Le but de la reeducation graphique est d'aider l'enfant a ecrire de maniere plus fluide, lisible et confortable, afin de lui redonner confiance et de favoriser sa reussite scolaire. Si malgre un accompagnement regulier, l'ecriture reste difficile, l'ergotherapeute evalue la pertinence d'un outil de compensation (ordinateur, tablette, logiciels adaptes, etc.) pour pallier les difficultes persistantes : ecriture douloureuse, trop lente, illisible, mais aussi fautes d'orthographe ou difficultes du langage ecrit.",
        },
        {
            id: "approche-5",
            title: "Reflexes archaiques",
            summary: "Integration des reflexes primitifs pour soutenir la motricite et l'attention.",
            content:
                "Les reflexes archaiques sont des mouvements automatiques presents chez le nouveau-ne (comme le reflexe de succion ou le reflexe de prehension). Ils jouent un role essentiel dans le developpement du bebe : ils l'aident a s'adapter a son environnement, a developper sa motricite, son equilibre et ses premieres experiences sensorielles. Avec la croissance, ces reflexes devraient progressivement s'integrer au systeme nerveux. Cela signifie qu'ils laissent place a des mouvements plus volontaires, fluides et coordonnes. Cependant, chez certains enfants, certains reflexes peuvent rester actifs plus longtemps que prevu ou etre mal integres. Cela peut avoir un impact sur : la posture et l'equilibre, la coordination motrice et la motricite fine (ecriture, manipulation d'objets), l'attention, la concentration et l'organisation, la gestion des emotions et le comportement. En ergotherapie, le travail autour des reflexes archaiques consiste a proposer des exercices corporels specifiques qui stimulent le systeme nerveux pour favoriser leur integration. Ces mouvements, realises de maniere ludique et adaptee a l'age de l'enfant, visent a ameliorer la qualite du geste, les apprentissages scolaires et le bien-etre au quotidien.",
        },
        {
            id: "approche-6",
            title: "Troubles du calcul",
            summary: "Accompagnement des apprentissages numeriques au quotidien.",
            content:
                "Les competences en calcul ne se limitent pas aux mathematiques scolaires. Elles sont presentes dans de nombreuses activites du quotidien : compter son argent, lire l'heure, mesurer des ingredients en cuisine, s'orienter dans le temps ou encore comprendre une consigne numerique. Chez certains enfants, des difficultes apparaissent dans la manipulation des nombres, la comprehension des quantites ou la resolution de problemes. Ces difficultes peuvent rendre les apprentissages scolaires et les activites de la vie quotidienne plus complexes. Les difficultes peuvent concerner : la reconnaissance et l'ecriture des chiffres, le denombrement et la notion de quantite, les calculs simples (additions, soustractions, multiplications, divisions), la memorisation des faits numeriques (tables de multiplication, doubles, moities), l'utilisation des mathematiques dans la vie courante (faire ses courses, rendre la monnaie, utiliser une horloge, se reperer dans un planning).",
        },
    ]
    const [selectedId, setSelectedId] = useState(approaches[0].id)
    const selected = approaches.find((item) => item.id === selectedId) ?? approaches[0]

    return (
        <div className="bg-[#FAEEDA] text-slate-900">
            <div className="relative w-full h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-sm"
                    style={{ backgroundImage: "url(/baniere-les-approches.png)" }}
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="relative z-[1] flex flex-col text-center justify-center items-center h-full text-white font-bold">
                    <p className="text-6xl">Les approches</p>
                </div>
            </div>

            <section className="relative overflow-hidden bg-gradient-to-b from-[#F7E9D6] to-[#FAEEDA]">
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-20 -right-10 size-40 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                    <h1 className="text-3xl md:text-4xl font-oswald-bold text-slate-900 font-bold">
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
                                            ? "bg-orange-300 border-orange-300 text-white"
                                            : "bg-white/90 border-white/70 text-slate-900"
                                    }`}
                                >
                                    <p className="text-sm font-oswald-bold uppercase tracking-[0.10em] font-bold">
                                        {item.title}
                                    </p>
                                    <p className={`mt-2 ${isSelected ? "text-white/90" : "text-slate-700"}`}>
                                        {item.summary}
                                    </p>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 max-w-6xl mx-auto">
                <h2 className="text-2xl font-oswald-bold text-slate-900 font-bold">{selected.title}</h2>
                <p className="text-lg text-slate-700 mt-3">{selected.content}</p>
            </section>
        </div>
    )
}

export default Approches
