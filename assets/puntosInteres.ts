export interface PuntoInteres {
    latitud: number
    longitud: number
    color: string
    imgUrl: string
    nombre: string
    descripcion: string
}

export const puntosInteres: PuntoInteres[] = [
    {
        nombre: "Paseo de la Concha",
        descripcion: "El paseo de la Concha, San Sebastián",
        color: "#4da",
        imgUrl: "https://lh5.googleusercontent.com/p/AF1QipPo8LHlEz_8ffZncUuFy-lqeHwXv7UZ-Ikf8RWG=w408-h306-k-no",
        latitud: 43.3152601049401,
        longitud: -1.9922362934949527
    },
    {
        nombre: "A Cantina Pulpería Luís",
        descripcion: "Donde empieza el camino de Santiago, Sarria",
        color: "#4da",
        imgUrl: "https://lh5.googleusercontent.com/p/AF1QipMVgCeNv_qX358nvW1iklgX5DpJGO3AAT8g-mn7=w408-h306-k-no",
        latitud: 42.779375071862496,
        longitud: -7.410809496437148
    },
    {
        nombre: "Monte Fuji",
        descripcion: "El Monte Fuji, Japón",
        color: "#4da",
        imgUrl: "https://lh5.googleusercontent.com/p/AF1QipN0UpdkyHAkhhuxpTN6z11XVUCQJeeH9Yba-z3I=w408-h272-k-no",
        latitud: 35.36132452953173,
        longitud: 138.72744918413682
    },
    {
        nombre: "Girona",
        descripcion: "Girona, Catalunya",
        color: "#4da",
        imgUrl: "https://lh5.googleusercontent.com/p/AF1QipMTVLr5uUiqYNSTRRPNztXnrQ_wtCZr4mvaaex2=w408-h306-k-no",
        latitud: 41.97928567606253,
        longitud: 2.819181511045517
    }
]