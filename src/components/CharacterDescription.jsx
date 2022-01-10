import Card from "../shared/Card"


const CharacterDescription = () => {
    
    return (
        <Card className="description">
            <div className="character-name">
                <span className="emphasis">SEAN</span> IS A
            </div>
            <div className="character-type">
                <span className="emphasis">JACK</span>
            </div>
            <div className="character-focu">
                WHO <span className="emphasis">TAKES NAMES</span>
            </div>
        </Card>
    )
}

export default CharacterDescription
