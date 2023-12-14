// ActivityArrayDataInterface.ts

// ActivityArrayDataInterface.ts

export interface ActivityData {
    time_bin_midpoint: string;
    taxonID_str: string;
    count: number;
}

export interface ActivityArrayDataInterface {
    activity_array: ActivityData[];
}