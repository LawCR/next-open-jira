
interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string;
    createdAt: number;
    status: string;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Aliqua est non proident eu ex nulla dolor.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'InProgress: Elit est fugiat laboris sint sunt.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Finished: Deserunt amet cillum aliqua dolor fugiat commodo.',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
    ]
}