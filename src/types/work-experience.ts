export interface WorkExperience {
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  bulletPoints?: string[];
  isActive?: boolean;
  isLast?: boolean;
}
