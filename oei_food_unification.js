// 文件路径: kubejs/server_scripts/oei_food_unification.js
// 规则: 有农夫乐事（farmersdelight）优先选择，否则选择作物盛景（croptopia），都没有则选择农夫乐事附属或其他mod

ServerEvents.highPriorityData(event => {
    
    // 添加一个 OEI 规则文件，用于统一各种 Mod 的作物
    event.addJson("oneenoughitem:replacements/food_unification.json", [

    // 蔬菜

        // 规则：统一所有番茄
        {
            // 匹配来自各个 Mod 的番茄物品ID
            "matchItems": [
                "croptopia:tomato",
                "minecolonies:tomato",
                "thermal:tomato",
                "crockpot:tomato",
                "kaleidoscope_cookery:tomato",
                "farm_and_charm:tomato"
            ],
            // 将它们全部替换为 Farmer's Delight 的番茄
            "resultItems": "farmersdelight:tomato"
        },
        
        // 规则：统一所有大蒜
        {
            "matchItems": [
                "minecolonies:garlic", 
                "#forge:garlic",
                "dumplings_delight:garlic",
                "manors_bounty:garlic"
         ],
            "resultItems": "croptopia:garlic"
        },

        // 规则：统一所有卷心菜
        {
            "matchItems": [
                "#forge:cabbage",
                "minecolonies:garlic", 
                "minecolonies:cabbage"
         ],
            "resultItems": "farmersdelight:cabbage"
        },

        // 规则：统一所有生菜
        {
            "matchItems": [ 
                "#forge:lettuce",
         ],
            "resultItems": "croptopia:lettuce"
        },

        // 规则：统一所有洋葱
        {
            "matchItems": [
                "#forge:onions", 
                "#forge:crops/onion",
                "farm_and_charm:onion_crop",
                "minecolonies:onion",
                "thermal:onion",
                "croptopia:onion",
                "crockpot:onion",
         ],
            "resultItems": "farmersdelight:onions"
        },
        // 规则：统一所有黄瓜
        {
            "matchItems": [
                "#forge:cucumbers", 
                "#forge:crops/cucumber"
         ],
            "resultItems": "croptopia:cucumber"
        },

        // 规则：统一所有茄子
        {
            "matchItems": [
                "#forge:eggplant", 
                "#forge:eggplants", 
                "#forge:vegetables/eggplant",
                "minecolonies:eggplant",
                "culturaldelights:eggplant",
                "minecolonies:eggplant",
                "croptopia:eggplant"
         ],
            "resultItems": "culturaldelights:eggplant"
        },

        // 规则：统一所有玉米
        {
            "matchItems": [
                "#forge:corn", 
                "bountifulfares:maize",
                "minecolonies:corn",
                "manors_bounty:corn"
         ],
            "resultItems": "croptopia:corn"
        },
        

        // 规则：统一所有辣椒
        {
            "matchItems": [
                "#forge:vegetables/chilipepper",
                "#forge:vegetables/pepper",
                "croptopia:chile_pepper", 
                "ltc2:peppers_red",
                "teastory:chili"
         ],
            "resultItems": "croptopia:chile_pepper"
        },

    // 水果

        // 规则：统一所有柠檬
        {
            "matchItems": [
                "#forge:lemons", 
                "manors_bounty:lemon",
                "bountifulfares:lemon",
                "braziliandelight:lemon"
         ],
            "resultItems": "fruitsdelight:lemon"
        },

        // 规则：统一所有石榴
        {
            "matchItems": [
                "manors_bounty:pomegranate", 
                "productivetrees:pomegranate"
         ],
            "resultItems": "collectorsreap:pomegranate"
        },

        // 规则：统一所有葡萄
        {
            "matchItems": [
                "#forge:fruits/grape", 
                "#forge:grapes",
                "manors_bounty:grape",
         ],
            "resultItems": "croptopia:grape"
        },

        // 规则：统一所有橙子
        {
            "matchItems": [
                "#forge:fruits/orange", 
                "#forge:orange",
                "bountifulfares:orange",
         ],
            "resultItems": "croptopia:orange"
        },

        // 规则：统一所有蓝莓

        {
            "matchItems": [
                "manors_bounty:blueberry"
         ],
            "resultItems": "fruitsdelight:blueberry"
        },

        // 规则：统一所有草莓

        {
            "matchItems": [
                "#forge:strawberry", 
                "manors_bounty:strawberry"
         ],
            "resultItems": "croptopia:strawberry"
        },

    //其他

        // 规则：统一所有牛奶瓶
        {
            "matchItems": [
                "#forge:milk", 
                "#forge:milks", 
                "productivetrees:pomegranate",
                "pasterdream:milk_glassjar"
         ],
            "resultItems": "farmersdelight:milk_bottle"
        },
    ]);
});

