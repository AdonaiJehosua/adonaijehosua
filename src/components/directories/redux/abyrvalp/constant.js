export const productTypes = [
    {
        id: 1,
        name: 'Листовая печать',
        bleeds: {
            outside: 1,
            inside: 1,
            upside: 1,
            downside: 1
        },
        trims: {
            outside: 1,
            inside: 1,
            upside: 1,
            downside: 1
        }
    },
    {
        id: 2,
        name: 'Скрепка',
        bleeds: {
            outside: 5,
            inside: 0,
            upside: 5,
            downside: 5
        },
        trims: {
            outside: 5,
            inside: 0,
            upside: 5,
            downside: 5
        }
    },
    {
        id: 3,
        name: 'КБС',
        bleeds: {
            outside: 5,
            inside: -2,
            upside: 5,
            downside: 5
        },
        trims: {
            outside: 5,
            inside: 0,
            upside: 5,
            downside: 5
        }
    },
    {
        id: 4,
        name: 'КШС',
        bleeds: {
            outside: 5,
            inside: 0,
            upside: 5,
            downside: 5
        },
        trims: {
            outside: 5,
            inside: 0,
            upside: 5,
            downside: 5
        }
    }
]


export const paperFormats = [
    {
        id: 1,
        name: '102x72',
        width: 1020,
        length: 720
    },
    {
        id: 2,
        name: '52x72',
        width: 520,
        length: 720
    }
]

export const paperTypes = [
    {
        id: 1,
        name: 'Простая'
    },
    {
        id: 2,
        name: 'Мелаттизированная'
    }
]

export const machines = [
    {
        id: 1,
        name: 'CD-102',
        speed: 10000,
        formats: [paperFormats.find(elem => elem.name === 'CD-102')],
        firstAdjustment: 0.33,
        otherAdjustment: 0.15,
        wdVarnishAdjustment: 0.65,
    },
    {
        id: 2,
        name: 'CD-74',
        speed: 10000,
        formats: [paperFormats.find(elem => elem.name === 'CD-74')],
        firstAdjustment: 0.25,
        otherAdjustment: 0.12,
        wdVarnishAdjustment: 0.65,
    }
]
