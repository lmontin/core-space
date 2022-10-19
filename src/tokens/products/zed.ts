import { TokenType } from '@/tokens/types'

const tokens: TokenType[] = [
    {
        product: 'zed',
        slug: 'ammo-box',
        name: 'Ammo box',
        color: 'orange',
        size: 'sm',
        icons: ['ammo-box', 'flip', 'discard'],
        buy: 5,
        sell: 2,
    },
    {
        product: 'zed',
        slug: 'combat-stim',
        name: 'Combat stim',
        color: 'orange',
        size: 'sm',
        icons: ['effortless', 'discard', 'action-2'],
        buy: 3,
        sell: 1,
    },
    {
        product: 'zed',
        slug: 'combat-vest',
        name: 'Combat vest',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        buy: 7,
        sell: 3,
    },
    {
        product: 'zed',
        slug: 'data-credits-5k',
        name: 'Data credits 5k',
        color: 'purple',
        size: 'sm',
        description: ['credits'],
        sell: 5,
    },
    {
        product: 'zed',
        slug: 'data-pad',
        name: 'Data pad',
        color: 'orange',
        size: 'sm',
        range: 'm',
        description: ['hack'],
        buy: 4,
        sell: 2,
    },
    {
        product: 'zed',
        slug: 'energy-combat-knife',
        name: 'Energy combat knife',
        color: 'blue',
        size: 'sm',
        close: 2,
        throw: 2,
        buy: 4,
        sell: 2,
    },
    {
        product: 'zed',
        slug: 'energy-flask',
        name: 'Energy flask',
        color: 'purple',
        size: 'sm',
        description: ['raw-blue'],
        icons: ['rare'],
    },
    {
        product: 'zed',
        slug: 'grenade-frag-ballistic',
        name: 'Grenade frag ballistic',
        color: 'blue',
        size: 'sm',
        grenade: [5, 3, 2],
        icons: ['reliable', 'discard'],
        buy: 6,
        sell: 3,
    },
    {
        product: 'zed',
        slug: 'grenade-t-port-pulse',
        name: 'Grenade t port pulse',
        color: 'blue',
        size: 'sm',
        scatter: [2, 1],
        icons: ['reliable'],
        buy: 8,
        sell: 5,
    },
    {
        product: 'zed',
        slug: 'laser-cutter',
        name: 'Laser cutter',
        color: 'orange',
        size: 'sm',
        icons: ['breach'],
        buy: 4,
        sell: 2,
    },
    {
        product: 'zed',
        slug: 'magnum-pistol',
        name: 'Magnum pistol',
        color: 'blue',
        size: 'sm',
        short: 3,
        medium: 3,
        long: 1,
        buy: 21,
        sell: 11,
    },
    {
        product: 'zed',
        slug: 'medi-stim',
        name: 'Medi stim',
        color: 'orange',
        size: 'sm',
        heal: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'zed',
        slug: 'military-pistol',
        name: 'Military pistol',
        color: 'blue',
        size: 'sm',
        short: 2,
        medium: 1,
        icons: ['burst-1'],
        buy: 8,
        sell: 4,
    },
    {
        product: 'zed',
        slug: 'outland-hatchet-crafted',
        name: 'Outland hatchet crafted',
        color: 'blue',
        size: 'lg',
        close: 1,
        heavy: 3,
        throw: 3,
        icons: ['rare'],
        sell: 5,
    },
    {
        product: 'zed',
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
        product: 'zed',
        slug: 'power-claw',
        name: 'Power claw',
        color: 'blue',
        size: 'lg',
        close: 2,
        heavy: 4,
        buy: 7,
        sell: 3,
    },
    {
        product: 'zed',
        slug: 'shield-belt-custom',
        name: 'Shield belt custom',
        color: 'yellow',
        size: 'sm',
        shield: 2,
        buy: 7,
        sell: 3,
    },
    {
        product: 'zed',
        slug: 'shield-pod-upgrade',
        name: 'Shield pod upgrade',
        color: 'yellow',
        size: 'sm',
        shield: 1,
        icons: ['mech'],
        buy: 6,
        sell: 4,
    },
    {
        product: 'zed',
        slug: 'ship-parts-2',
        name: 'Ship parts 2',
        color: 'purple',
        size: 'sm',
        description: ['ship-parts'],
        buy: 4,
        sell: 2,
    },
    {
        product: 'zed',
        slug: 'short-sword-crafted',
        name: 'Short sword crafted',
        color: 'blue',
        size: 'sm',
        close: 2,
        heavy: 3,
        throw: 2,
        buy: 7,
        sell: 3,
    },
    {
        product: 'zed',
        slug: 'short-sword',
        name: 'Short sword',
        color: 'blue',
        size: 'sm',
        close: 2,
        heavy: 3,
        buy: 6,
        sell: 3,
    },
    {
        product: 'zed',
        slug: 'thump-knife',
        name: 'Thump knife',
        color: 'blue',
        size: 'sm',
        close: 2,
        heavy: 4,
        throw: 2,
        buy: 8,
        sell: 4,
    },
]
export default tokens
