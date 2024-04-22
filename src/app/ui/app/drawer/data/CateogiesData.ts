import {CategoryNode} from "./CategoryNode";

export const categoriesData: CategoryNode[] = [
  {
    id: 1,
    name: "Electronics",
    parentId: null,
    subCategories: [
      {
        id: 1,
        name: "GPU",
        parentId: 1,
        subCategories: []
      },
      {
        id: 3,
        name: "Headphones",
        parentId: 1,
        subCategories: []
      },
      {
        id: 5,
        name: "Router",
        parentId: 1,
        subCategories: []
      },
      {
        id: 6,
        name: "Laptops",
        parentId: 1,
        subCategories: []
      },
      {
        id: 7,
        name: "Displays",
        parentId: 1,
        subCategories: []
      },
      {
        id: 8,
        name: "Motherboards",
        parentId: 1,
        subCategories: []
      },
      {
        id: 9,
        name: "Mouses",
        parentId: 1,
        subCategories: []
      },
      {
        id: 10,
        name: "RAM",
        parentId: 1,
        subCategories: []
      },
      {
        id: 11,
        name: "iPhone",
        parentId: 1,
        subCategories: []
      },
      {
        id: 12,
        name: "Android",
        parentId: 1,
        subCategories: []
      }
    ]
  },
  {
    id: 2,
    name: "Cloths",
    parentId: null,
    subCategories: [
      {
        id: 1,
        name: "Jackets",
        parentId: 2,
        subCategories: []
      },
      {
        id: 2,
        name: "Coats",
        parentId: 2,
        subCategories: []
      },
      {
        id: 3,
        name: "Trousers",
        parentId: 2,
        subCategories: []
      },
      {
        id: 4,
        name: "T-shirts",
        parentId: 2,
        subCategories: []
      },
      {
        id:5,
        name: "Shoes",
        parentId: 2,
        subCategories: []
      },
    ]
  },
  {
    id: 3,
    name: "Car parts and accessories",
    parentId: null,
    subCategories: [
      {
        id: 1,
        name: "Scooter parts",
        parentId: 3,
        subCategories: []
      },
      {
        id: 2,
        name: "Car accessories",
        parentId: 3,
        subCategories: []
      },
      {
        id: 3,
        name: "Car parts",
        parentId: 3,
        subCategories: []
      }
    ]
  },
  {
    id: 4,
    name: "Cosmetics",
    parentId: null,
    subCategories: [
      {
        id: 2,
        name: "Personal care",
        parentId: 4,
        subCategories: []
      }
    ]
  },
  {
    id: 5,
    name: "Pets goods",
    parentId: null,
    subCategories: [
      {
        id: 1,
        name: "Food",
        parentId: 5,
        subCategories: []
      },
      {
        id: 2,
        name: "Pet care",
        parentId: 5,
        subCategories: []
      }
    ]
  },
  {
    id: 6,
    name: "Musical instruments",
    parentId: null,
    subCategories: [
      {
        id: 1,
        name: "Stringed instruments",
        parentId: 6,
        subCategories: []
      },
      {
        id: 2,
        name: "Wind instruments",
        parentId: 6,
        subCategories: []
      },
      {
        id: 3,
        name: "Keyboards",
        parentId: 6,
        subCategories: []
      },
      {
        id: 4,
        name: "Percussion",
        parentId: 6,
        subCategories: []
      },
    ]
  },
  {
    id: 7,
    name: "Sports goods",
    parentId: null,
    subCategories: [
      {
        id: 1,
        name: "Football",
        parentId: 7,
        subCategories: []
      },
      {
        id: 2,
        name: "Basketball",
        parentId: 7,
        subCategories: []
      },
      {
        id: 3,
        name: "Tennis",
        parentId: 7,
        subCategories: []
      },
      {
        id: 5,
        name: "Swimming",
        parentId: 7,
        subCategories: []
      },
      {
        id: 6,
        name: "Gym",
        parentId: 7,
        subCategories: []
      },
       {
        id: 7,
        name: "Extreme sports",
        parentId: 7,
        subCategories: []
      },
    ]
  },
]
