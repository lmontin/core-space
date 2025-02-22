import { TokenType } from '@/tokens/types'

const tokens: TokenType[] = [
    {
        product: 'shift-change',
        slug: 'ammo-box',
        name: 'Ammo box large',
        color: 'orange',
        size: 'sm',
        description: ['rotating'],
        icons: ['ammo-box', 'discard'],
        buy: 14,
        sell: 8,
    },
    {
        product: 'shift-change',
        slug: 'bio-tag-blade',
        name: 'Bio tag blade',
        color: 'blue',
        size: 'sm',
        close: 3,
        throw: 3,
        icons: ['boomerang'],
        buy: 19,
        sell: 8,
    },
    {
        product: 'shift-change',
        slug: 'breach-rifle',
        name: 'Breach rifle',
        color: 'blue',
        size: 'lg',
        short: 3,
        medium: 2,
        icons: ['burst-2'],
        buy: 37,
        sell: 21,
    },
    {
        product: 'shift-change',
        slug: 'burst-vest',
        name: 'Burst vest',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        description: ['rotating'],
        icons: ['effortless', 'flip', 'discard'],
        buy: 14,
        sell: 8,
    },
    {
        product: 'shift-change',
        slug: 'combat-stim',
        name: 'Combat stim',
        color: 'orange',
        size: 'nano',
        action: 2,
        icons: ['effortless', 'discard'],
        buy: 3,
        sell: 1,
    },
    {
        product: 'shift-change',
        slug: 'cyclone-rifle',
        name: 'Cyclone rifle',
        color: 'blue',
        size: 'md',
        short: 2,
        medium: 1,
        icons: ['burst'],
    },
    {
        product: 'shift-change',
        slug: 'detonator-l',
        name: 'Detonator',
        color: 'blue',
        size: 'nano',
        range: 'l',
        description: ['detonator'],
        icons: ['effortless'],
        buy: 21,
        sell: 13,
    },
    {
        product: 'shift-change',
        slug: 'detonator-m',
        name: 'Detonator',
        color: 'blue',
        size: 'nano',
        range: 'm',
        description: ['detonator'],
        icons: ['effortless'],
        buy: 15,
        sell: 9,
    },
    {
        product: 'shift-change',
        slug: 'flash-bomb',
        name: 'Flash bomb',
        color: 'blue',
        size: 'sm',
        icons: ['flash', 'reliable'],
        buy: 3,
        sell: 1,
    },
    {
        product: 'shift-change',
        slug: 'grenade',
        name: 'Grenade',
        color: 'blue',
        size: 'nano',
        grenade: [4, 3, 1],
        icons: ['discard'],
        buy: 5,
        sell: 4,
    },
    {
        product: 'shift-change',
        slug: 'medi-stim',
        name: 'Medi stim',
        color: 'orange',
        size: 'nano',
        heal: 2,
        icons: ['effortless', 'discard'],
        buy: 2,
        sell: 1,
    },
    {
        product: 'shift-change',
        slug: 'mine',
        name: 'Mine',
        color: 'blue',
        size: 'nano',
        explode: [5, 3, 1],
        description: ['mines'],
        icons: ['effortless', 'discard'],
        buy: 4,
        sell: 1,
    },
    {
        product: 'shift-change',
        slug: 'n-ammo',
        name: 'Ammo clip',
        color: 'orange',
        size: 'nano',
        icons: ['effortless', 'ammo', 'discard'],
        buy: 4,
        sell: 2,
    },
    {
        product: 'shift-change',
        slug: 'n-key',
        name: 'Mission key',
        color: 'orange',
        size: 'nano',
        icons: ['mission-key', 'effortless', 'rare'],
        sell: 2,
    },
    {
        product: 'shift-change',
        slug: 'n-poison',
        name: 'Toxic Blade',
        color: 'blue',
        size: 'nano',
        throw: 2,
        icons: ['toxic', 'effortless'],
        buy: 7,
        sell: 5,
    },
    {
        product: 'shift-change',
        slug: 'n-reroll',
        name: 'Ranged Re-roll',
        color: 'orange',
        size: 'nano',
        buy: 18,
        sell: 11,
        icons: ['re-roll-ranged'],
    },
    {
        product: 'shift-change',
        slug: 'n-rock',
        name: 'Rock',
        color: 'purple',
        size: 'nano',
        description: ['rock'],
        buy: 10,
        sell: 10,
    },
    {
        product: 'shift-change',
        slug: 'n-walkie',
        name: 'Walkie',
        color: 'orange',
        size: 'nano',
        buy: 5,
        sell: 3,
        icons: ['swap'],
    },
    {
        product: 'shift-change',
        slug: 'objective',
        name: 'Objective',
        color: 'green',
        size: 'nano',
        icons: ['objective'],
    },
    {
        product: 'shift-change',
        slug: 'ptd-vest',
        name: 'Ptd vest',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        description: ['rotating'],
        icons: ['scatter', 'effortless', 'flip', 'discard'],
        buy: 14,
        sell: 8,
    },
    {
        product: 'shift-change',
        slug: 'quell-fury-chemical',
        name: "Quell's fury chemical",
        color: 'blue',
        size: 'sm',
        short: 3,
        medium: 2,
        icons: ['fire'],
        buy: 31,
        sell: 18,
    },
    {
        product: 'shift-change',
        slug: 'ship-parts-4',
        name: 'Ship parts 4',
        color: 'purple',
        size: 'sm',
        description: ['ship-parts'],
        icons: ['rare'],
        sell: 8,
    },
    {
        product: 'shift-change',
        slug: 'skill-stim',
        name: 'Skill stim',
        color: 'orange',
        size: 'nano',
        skill: 2,
        icons: ['effortless', 'discard'],
        buy: 4,
        sell: 1,
    },
    {
        product: 'shift-change',
        slug: 'stim-vest',
        name: 'Stim vest',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        move: 1,
        close: 3,
        icons: ['effortless', 'flip', 'heal-2'],
        buy: 31,
        sell: 12,
    },
    {
        product: 'shift-change',
        slug: 'tactical-rifle',
        name: 'Tactical rifle',
        color: 'blue',
        size: 'md',
        short: 3,
        medium: 2,
        icons: ['reliable', 'burst-1'],
        buy: 32,
        sell: 14,
    },
    {
        product: 'shift-change',
        slug: 'target-laser',
        name: 'Target laser',
        color: 'orange',
        size: 'nano',
        icons: ['target-lock'],
        buy: 15,
        sell: 8,
    },
    {
        product: 'shift-change',
        slug: 'temp-shield',
        name: 'Temporary shield',
        color: 'orange',
        size: 'nano',
        icons: ['effortless', 'temp-armour', 'discard'],
        buy: 4,
        sell: 2,
    },
    {
        product: 'shift-change',
        slug: 'timewarp-nade',
        name: 'Timewarp nade',
        color: 'blue',
        size: 'nano',
        icons: ['timewarp', 'discard'],
    },
]
export default tokens
