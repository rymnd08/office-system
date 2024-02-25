export interface assessmentLevel {
    id: number
    name: string
    assessmentLevel2003: number
    assessmentLevel2011: number
}

export const assessmentLevel: assessmentLevel[] = [
    {
        id: 1,
        name: 'Residential',
        assessmentLevel2003: .15,
        assessmentLevel2011: .20
    },
    {
        id: 2,
        name: 'Agricultural',
        assessmentLevel2003: .40,
        assessmentLevel2011: .30
    },
    {
        id:3,
        name: 'Commercial/Industrial',
        assessmentLevel2003: .40,
        assessmentLevel2011: .30
    },
    {
        id:4,
        name: 'Industrial',
        assessmentLevel2003: .40,
        assessmentLevel2011: .30
    }
]