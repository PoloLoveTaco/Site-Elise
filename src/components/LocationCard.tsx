function LocationCard() {
    return (
        <div className="flex justify-center py-14 px-4">
            <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">

                {/* MAP AREA / Left */}
                <div className="w-full md:w-1/2 h-96 md:h-auto">
                    <iframe
                        className="w-full h-full"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.6127560372326!2d-1.435909!3d46.670522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4804308d648a5247%3A0x7c81c51cd15ca785!2s69%20Boulevard%20Edison%2C%2085000%20La%20Roche-sur-Yon!5e0!3m2!1sfr!2sfr!4v1700000000000"
                    ></iframe>
                </div>

                {/* TEXT AREA / Right */}
                <div className="bg-gray-200 p-10 md:w-1/2 text-gray-900 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4 leading-tight">
                        Maison de santé
                        <br />
                        pluriprofessionnelle des Forges
                    </h2>

                    <div className="flex items-start gap-3 mb-5">
                        <div className="text-black text-2xl mt-1">📍</div>

                        <p className="text-base">
                            <span className="font-semibold">
                                69 Boulevard Edison 85000 <br />
                                La Roche sur Yon
                            </span>
                        </p>
                    </div>

                    <p className="text-base leading-relaxed">
                        Le cabinet d’ergothérapie est situé à 10 minutes à pied de la gare <span className="font-semibold">SNCF</span>,
                        il est accessible par <span className="font-semibold">bus (7B, 7 et 6)</span>. 
                        Il dispose d’une salle d’attente et des toilettes avec 
                        <span className="font-semibold"> accès handicapé</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;
