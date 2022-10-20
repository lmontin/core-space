import { TokenType } from '@/tokens/types'

const tokens: TokenType[] = [
    {
        product: 'poseidon',
        slug: 'ammo',
        name: 'Ammo mag',
        color: 'orange',
        size: 'sm',
        icons: ['ammo-7', 'discard'],
        buy: 2,
        sell: 1,
    },
    {
        product: 'poseidon',
        slug: 'combat-axe',
        name: 'Combat axe',
        color: 'blue',
        size: 'sm',
        close: 1,
        heavy: 3,
        throw: 2,
        buy: 4,
        sell: 2,
    },
    {
        product: 'poseidon',
        slug: 'flack-jacket-shiny',
        name: 'Flack jacket shiny',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        buy: 8,
        sell: 7,
    },
    {
        product: 'poseidon',
        slug: 'grenade-time-pulse',
        name: 'Grenade time pulse',
        color: 'blue',
        size: 'sm',
        icons: ['time-pulse', 'reliable', 'discard'],
        buy: 4,
        sell: 1,
    },
    {
        product: 'poseidon',
        slug: 'havoc-pistol-chemical',
        name: 'Havoc pistol chemical',
        color: 'blue',
        size: 'sm',
        short: 4,
        icons: ['rare'],
        sell: 9,
    },
    {
        product: 'poseidon',
        slug: 'jump-pack',
        name: 'Jump pack',
        color: 'orange',
        size: 'sm',
        buy: 5,
        sell: 4,
        scramble: [3, 5],
        icons: ['effortless', 'flip'],
    },
    {
        product: 'poseidon',
        slug: 'military-pistol-enhanced',
        name: 'Military pistol enhanced',
        color: 'blue',
        size: 'sm',
        short: 2,
        medium: 1,
        long: 1,
        icons: ['burst-1'],
        buy: 9,
        sell: 4,
    },
    {
        product: 'poseidon',
        slug: 'outland-pistol-custom',
        name: 'Outland pistol custom',
        color: 'blue',
        size: 'sm',
        short: 1,
        icons: ['burst-1'],
        buy: 3,
        sell: 1,
    },
    {
        product: 'poseidon',
        slug: 'shock-assault-tonfa',
        name: 'Shock assault tonfa',
        color: 'blue',
        size: 'lg',
        close: 3,
        heavy: 4,
        buy: 15,
        sell: 7,
    },
]
export default tokens
