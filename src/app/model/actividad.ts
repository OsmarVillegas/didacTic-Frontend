export interface Tema{
    _id?: number,
    Nombre: string,
    Descripcion: string,
    TemaBase: string
}

export interface Actividad{
    _id?: number,
    _id_tema: number,
    Nombre: string,
    Valor: number,
    TipoActividad: string,
    TemaPrerrequisito: string,
    Intentos: number
}

export interface Laboratorio{
    _id?: number,
    file?: string
}

export interface Quiz{
    _id?: number
}

export interface Pregunta{
    _id?: number,
    _id_quiz?: number,
    Pregunta: string,
    TipoPregunta: string,
    Nivel: string,
    Valor: number,
    Respuesta: string
}