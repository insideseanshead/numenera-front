import { createContext, useState } from "react";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characterDescription, setCharacterDescription] = useState([
        {
            name: 'Sean',
            type: 'Jack',
            focus: 'Takes Names'
        }
    ]);



    return (
        <CharacterContext.Provider
            value={{
                characterDescription,
            }}
            >
                {children}
            </CharacterContext.Provider>
    )
}

export default CharacterContext