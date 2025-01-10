/** @interface CardProps */
export interface CardProps {
    card: string,
    modal?: string,
    link?: string
}

/** @interface DataProps */
export interface DataProps {
    year: number,
    date: string,
    space: string,
    cards: CardProps[]
}