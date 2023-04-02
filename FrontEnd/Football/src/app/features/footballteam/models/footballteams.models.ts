import { Player } from "./players.models";

export interface FootballTeam{
    id: number;
    name: string;
    nickname: string;
    foundingYear: number;
    value: number;
    professionalStatus: string;
    content: Player[];
}