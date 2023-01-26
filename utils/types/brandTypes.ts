export enum BrandStatus {
  ENABLE = "enable",
  DISABLE = "disable",
  DELETED = "deleted",
}

export interface BrandInterface {
  id: number;
  name: string;
  image: string;
  status: BrandStatus;
  createdAt: Date;
}
