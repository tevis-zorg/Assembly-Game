import { useState } from "react";

/**
 * These all might you use while you already undersatnds
 * what's the meaning of using shared custom comopnent states
 * 
 * it is overkill to use it in small project
 */

export const useShareKeyboard = () => {
    const [assembly, setAssembly] = useState()

    return (assembly, setAssembly);
}

export const useShareChips = () => {
    const [chips, setChips] = useState()

    return [chips, setChips];
}

export const useShareWord = () => {
    const [currentWord, setCurrentWord] = useState()

    return [currentWord, setCurrentWord]
}