export interface Player{
    id: number;
    name: string;
    number: number;
    age: number;
    rating: number;
    position: string;
    nationality: string;
}
export interface PlayerDetails{
    id: number;
    name: string;
    number: number;
    age: number;
    rating: number;
    position: string;
    nationality: string;
    team: AddFootballTeamDto;
}

export interface AddPlayerDto{
    name: string;
    number: number;
    age: number;
    rating: number;
    position: string;
    nationality: string;
}

export interface AddFootballTeamDto{
    id: number;
    name: string;
    nickname: string;
    foundingYear: number;
    value: number;
    professionalStatus: string;
}