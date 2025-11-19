type CardProps = {
    titre       : string;
    description : string;
    lien        : string;
    style      ?: React.CSSProperties;
};

function Card({ titre, description, lien, style }: CardProps) {
    return (
        <div style={style} className="bg-white">
            <p className="text-center font-bold pt-5">{titre}</p>
            <p className="text-center pt-10">{description} + {lien}</p>
        </div>
    );
}

export default Card;
