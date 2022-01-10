const CharacterStats = () => {
    return (
        <div className="stats">
            {/* Might */}
            <div className="might">
                <div className="mods">
                    <div className="pool">
                        12
                    </div>
                    <div className="edge">
                        0
                    </div>
                </div>
                <div className="characterSt">
                    12
                </div>
            </div>
            {/* speed */}
            <div className="speed">
                <div className="mods">
                    <div className="pool">
                        16
                    </div>
                    <div className="edge">
                        2
                    </div>
                </div>
                <div className="characterSt">
                    16
                </div>
                <div className="armor">
                    <div className="cost">1</div>
                    <div className="armor-value">2</div>
                </div>
            </div>
            {/* Intellect */}
            <div className="intellect">
                <div className="mods">
                    <div className="pool">
                        13
                    </div>
                    <div className="edge">
                        0
                    </div>
                </div>
                <div className="characterSt">
                    13
                </div>
            </div>
            
        </div>
    )
}

export default CharacterStats
