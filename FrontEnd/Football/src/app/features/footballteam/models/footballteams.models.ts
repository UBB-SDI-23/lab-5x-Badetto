import { NrPlayers } from "./nrplayers.models";
import { Player } from "./players.models";

export interface FootballTeam{
    id: number;
    name: string;
    nickname: string;
    foundingYear: number;
    value: number;
    professionalStatus: string;
    content: Player[];
    nrplayers: number;
}

export interface AddFootballTeamDto{
    name: string;
    nickname: string;
    foundingYear: number;
    value: number;
    professionalStatus: string;
}