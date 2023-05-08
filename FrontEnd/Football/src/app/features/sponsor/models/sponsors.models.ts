export interface Sponsor{
    id: number;
    name: string;
    foundingYear: number;
    nationality: string;
    netWorth: number;
    domain: string;
}

export interface SponsorDetails{
    name: string;
    foundingYear: number;
    nationality: string;
    netWorth: number;
    domain: string;
    sponsors: HasDeals[];
}

export interface HasDeals{
    id: number;
    dealValue: number;
    type: string;
    team: number;
    sponsor: number;
}
    
export interface AddSponsor{
    name: string;
    foundingYear: number;
    nationality: string;
    netWorth: number;
    domain: string;
}