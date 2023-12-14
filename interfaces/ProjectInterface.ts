// interfaces/ProjectInterface.ts
export interface ProjectDataInterface {
    id: string;
    projectName: string;
    projectAvatar: string | JSX.Element;
    adminName: string;
    adminAvatar: string | JSX.Element;
    status: 'Active' | 'Archived';
    swarms: string[];
    scans: string[];
    targets: string[];
    startDate: Date;
    endDate: Date;
  }