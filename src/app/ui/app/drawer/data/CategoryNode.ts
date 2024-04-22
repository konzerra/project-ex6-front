

export interface CategoryNode {
  id: number;
  name: string;
  parentId: number | null;
  subCategories: CategoryNode[]
}
