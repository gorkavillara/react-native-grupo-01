import { useState, useEffect } from "react"

const useContador = (valorInicial: number = 0) => {
    const [contador, setContador] = useState(valorInicial)

    useEffect(() => {
        if (contador !== 0) return

        console.log("El contador vale 0")
    }, [contador])

    const incrementaValor = () => setContador((prev) => prev + 1)
    const decrementaValor = () => setContador((prev) => prev - 1)
    const resetValor = () => setContador(0)

    return {
        contador,
        incrementaValor,
        decrementaValor,
        resetValor,
    }
}

export default useContador
