import { createContext, useState } from "react"

export const ProgressContext = createContext()

export default function ProgressProvider({ children }) {
    const [progress, setProgress] = useState(0)

    return (
        <ProgressContext.Provider value={{ progress, setProgress }}>
            {children}
        </ProgressContext.Provider>
    )

}