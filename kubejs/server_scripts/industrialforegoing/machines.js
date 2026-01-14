ServerEvents.recipes(event => {
    event.remove({ id: 'industrialforegoing:mob_slaughter_factory' })
    event.shaped(
        Item.of('industrialforegoing:mob_slaughter_factory'),
        [
            'PSP',
            'GMG',
            'PRP'
        ],
        {
            P: '#forge:plastic',
            M: '#desolate_planet:machine_frame',
            G: '#forge:gears/gold',
            R: 'thermal:rf_coil',
            S: 'mob_grinding_utils:spikes'
        }
    ).id('desolate_planet:industrialforegoing/machines/mob_slaughter_factory')

    event.remove({ id: 'industrialforegoing:mob_crusher' })
    event.shaped(
        Item.of('industrialforegoing:mob_crusher'),
        [
            'PSP',
            'GMG',
            'PRP'
        ],
        {
            P: '#forge:plastic',
            M: '#industrialforegoing:machine_frame/advanced',
            G: '#forge:gears/lapis',
            R: 'thermal:rf_coil',
            S: 'mob_grinding_utils:saw'
        }
    ).id('desolate_planet:industrialforegoing/machines/mob_crusher')

    event.remove({ id: 'industrialforegoing:block_breaker' })
    event.shaped(
        Item.of('industrialforegoing:block_breaker'),
        [
            'PSP',
            'GMG',
            'PRP'
        ],
        {
            P: '#forge:plastic',
            M: '#desolate_planet:machine_frame',
            G: '#forge:gears/gold',
            R: 'thermal:rf_coil',
            S: 'thermal:drill_head'
        }
    ).id('desolate_planet:industrialforegoing/machines/block_breaker')

    event.remove({ id: 'industrialforegoing:plant_gatherer' })
    event.shaped(
        Item.of('industrialforegoing:plant_gatherer'),
        [
            'PSP',
            'GMG',
            'PRP'
        ],
        {
            P: '#forge:plastic',
            M: '#desolate_planet:machine_frame',
            G: '#forge:gears/gold',
            R: 'thermal:rf_coil',
            S: 'thermal:saw_blade'
        }
    ).id('desolate_planet:industrialforegoing/machines/plant_gatherer')

    event.remove({ id: 'industrialforegoing:animal_feeder' })
    event.shaped(
        Item.of('industrialforegoing:animal_feeder'),
        [
            'PSP',
            'GBG',
            'PMP'
        ],
        {
            P: '#forge:plastic',
            M: '#desolate_planet:machine_frame',
            G: '#forge:gears/copper',
            B: 'minecraft:bucket',
            S: '#forge:plates/iron'
        }
    ).id('desolate_planet:industrialforegoing/machines/animal_feeder')

    event.remove({ id: 'industrialforegoing:animal_rancher' })
    event.shaped(
        Item.of('industrialforegoing:animal_rancher'),
        [
            'PSP',
            'GBG',
            'PMP'
        ],
        {
            P: '#forge:plastic',
            M: '#desolate_planet:machine_frame',
            G: '#forge:gears/copper',
            B: 'minecraft:bucket',
            S: 'create:brass_hand'
        }
    ).id('desolate_planet:industrialforegoing/machines/animal_rancher')

    event.remove({ id: 'industrialforegoing:hydroponic_bed' })
    event.shaped(
        Item.of('industrialforegoing:hydroponic_bed'),
        [
            'P P',
            'FDF',
            'PMP'
        ],
        {
            P: '#forge:plastic',
            M: '#industrialforegoing:machine_frame/simple',
            F: '#desolate_planet:fluid_pipes',
            D: 'farmersdelight:rich_soil'
        }
    ).id('desolate_planet:industrialforegoing/machines/hydroponic_bed')
})