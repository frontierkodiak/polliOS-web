// interfaces/SwarmStatusInterface.ts
export interface DataItem {
    podID: string;
    podOS_version: string;
    pod_address: string;
    connection_status: string;
    rssi: number;
    stream_type: string;
    loc_name: string;
    loc_lat: number;
    loc_lon: number;
    queue_length: number;
    total_frames: number;
    last_S1_class: string;
    last_S2_class: string;
    total_specimens: number;
    last_specimen_created_time: string;  // or Date if it's a Date object
    last_seen: string;
    time_since_last_seen: number;
    time_since_last_specimen: number;
  }
  