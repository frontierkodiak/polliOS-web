// interfaces.MinorInterfaces.ts

//    endpoint: /podIDs
export type PodIDsInterface = string[];

//    endpoint: /locations
export interface LocationsInterface {
    locations: string[];
}

//    endpoint: /swarms
export interface SwarmsInterface {
    swarms: string[];
}

//    endpoint: /runs
export type RunsInterface = string[];

//    endpoint: /dates
export type DatesInterface = string[];
