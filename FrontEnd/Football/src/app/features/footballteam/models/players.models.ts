export interface Player{
    id: number;
    name: string;
    number: number,
    age: number,
    rating: number,
    position: string,
    nationality: string,
}

export interface EditPlayerDto{
    name: string;
    number: number,
    age: number,
    rating: number,
    position: string,
    nationality: string,
    team: number
}