export type ProductType = 'first-born'

export type AttributeType =
    | 'rare'
    | 'effortless'
    | 'flip'
    | 'discard'
    | 'mine'
    | 'trophy'
    | 're-roll'
    | 're-roll-ranged'
    | 'burst-1'
    | 'burst-2'
    | 'full-charge'
    | 'infinite'
    | 'reliable'
    | 'super-reliable'
    | 'target-lock'
    | 'silent'
    | 'sustained-fire'
    | 'grenade-launcher'
    | 'ammo-returns'
    | 'stim-skill'
    | 'stim-skill-plus'
    | 'stim-heal'
    | 'stim-heal-plus'
    | 'stim-actions'
    | 'reload-ammo'
    | 'freeze'
    | 'timewarp'
    | 'scatter'
    | 'dyson'
    | 'dyson-throw'
    | 'dyson-range'
    | 'boomerang'
    | 'larva'
    | 'repair'
    | 'physical_armour'
    | 'shield_armour'
    | 'phase'
    | 'throw'
    | 'close'
    | 'grenade'
    | 'range'
    | 'short'
    | 'medium'
    | 'long'
    | 'event'
    | 'armour'
    | 'shield'
    | 'mech'
    | 'heavy'
    | 'necro-flask'
    | 'deflect'
    | 'fade-to-black-3'
    | 'blast-2'
    | 'manipulate-3'
    | 'artifact'
    | 'infra-lens'
    | 'scramble'
    | 'move'
    | 'free-close'
    | 'na'
    | 'effortless-reload'
    | 'search'
    | 'pairs'
    | 'key'
    | 'explode'
    | 'swap'
    | 'ammo'
    | 'super-ammo'
    | 'temp-armour'
    | 'objective'
    | 'ignore-armour'
    | 'ignore-shield'
    | 'auto-close-hit'
    | 'breach'

export type CrystalType = 'green' | 'orange' | 'purple'

export type ItemDescription =
    | 'rotating'
    | 'larva'
    | 'mineral'
    | 'dyson-rod'
    | 'detonator'
    | 'mines'
    | 'caaligorn'

export type TokenType = {
    product: ProductType
    slug: string
    name: string
    color:
        | 'blue'
        | 'yellow'
        | 'orange'
        | 'purple'
        | 'green'
        | 'light-green'
        | 'brown'
    size: 'nano' | 'sm' | 'md' | 'lg'
    close?: number
    heavy?: number
    throw?: number
    grenade?: number[]
    explode?: number[]
    range?: 's' | 'm' | 'l'
    short?: number
    medium?: number
    long?: number
    buy?: number | number[]
    crystals?: CrystalType[]
    sell?: number | number[]
    blast?: number[]
    scatter?: number
    phase?: number
    armour?: number
    shield?: number
    dyson?: number
    move?: number
    scramble?: number[]
    heal?: number
    super_heal?: number
    skill?: number
    super_skill?: number
    action?: number
    freeze?: number[]
    description?: ItemDescription[]
    icons?: AttributeType[]
}
