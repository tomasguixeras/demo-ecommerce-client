export enum CategoryStatus {
  ENABLE = "enable",
  DISABLE = "disable",
  DELETED = "deleted",
}

export interface CategoryInterface {
  id: number;
  name: string;
  image: string;
  status: CategoryStatus;
  createdAt: Date;
}

export interface CategoriesGuestState {
  categories: CategoryInterface[];
}
