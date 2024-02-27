import { LandData } from "./ILand.interface";


export const landData: LandData[] = [
  {
    id: 1,
    landType: 'Agricultural Land',
    data: [
      {
        id: 1,
        landName: "Unirrigated Rice",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 7.3,
            marketValue2011: 18,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 5.8,
            marketValue2011: 16,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 3.5,
            marketValue2011: 14,
          },
        ],
      },
      {
        id: 2,
        landName: "Corn",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 5.8,
            marketValue2011: 15,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 5.2,
            marketValue2011: 13.5,
          },
          {
            id: 3,
            className: '3rd',
            marketValue2003: 4.5,
            marketValue2011: 12,
          }
        ],
      },
      {
        id: 3,
        landName: "Coconut",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 4.8,
            marketValue2011: 15,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 3.5,
            marketValue2011: 12.75,
          },
          {
            id: 3,
            className: '3rd',
            marketValue2003: 2.8,
            marketValue2011: 10.5,
          }
        ],
      },

      {
        id: 4,
        landName: "Bamboo",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 5.4,
            marketValue2011: 16,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 3.6,
            marketValue2011: 13.6,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 2.8,
            marketValue2011: 11.2,
          },
        ],
      },
      {
        id: 5,
        landName: "Banana",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 3.5,
            marketValue2011: 12,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 2.6,
            marketValue2011: 9,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 1.8,
            marketValue2011: 6,
          },
        ],
      },
      {
        id: 6,
        landName: "Tobacco",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 6.2,
            marketValue2011: 16,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 4.8,
            marketValue2011: 11.97,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 3.3,
            marketValue2011: 7.98,
          },
        ],
      },
      {
        id: 7,
        landName: "Cogon",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 3.2,
            marketValue2011: 8,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 2.4,
            marketValue2011: 6.5,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 1.8,
            marketValue2011: 5,
          },
        ],
      },
      {
        id: 8,
        landName: "Fishpond (mudfish)",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 3.2,
            marketValue2011: 8,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 2.8,
            marketValue2011: 12.6,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 1.545,
            marketValue2011: 11.2,
          },
        ],
      },
    ]
  },
  {
    id: 2,
    landType: 'Urband Land',
    data: [
      {
        id: 1,
        landName: "Residential",
        classes: [
          {
            id: 1,
            className: "1st",
            marketValue2003: 200,
            marketValue2011: 800,
          },
          {
            id: 2,
            className: "2nd",
            marketValue2003: 150,
            marketValue2011: 700,
          },
          {
            id: 3,
            className: "3rd",
            marketValue2003: 100,
            marketValue2011: 600,
          },
          {
            id: 4,
            className: "4th",
            marketValue2003: 80,
            marketValue2011: 500,
          },
        ],
      },
    ]
  },
  {
    id: 3,
    landType: 'Improvements',
    data: [

    ]
  },
]