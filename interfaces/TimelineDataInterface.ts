// TimelineDataInterface.ts

export interface TimelineDataInterface {
    timestamp: string;
    podID: string;
    swarm_name: string;
    run_name: string;
    loc_name: string;
    latitude: number;
    longitude: number;
    S2_taxonID_str: string;
    S2_taxonID_common_str: string;
    S2_taxonID_score: number; 
    S2_taxonRank: string; // refactor from taxonRank
    S2a_score: number; // new. don't implement until this model works
    S1_class: string;
    date?: Date;
}
