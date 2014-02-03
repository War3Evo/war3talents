{
  "settings": [{
    "pretext": "If you are a BM hunter, then most probably you have this talent enabled:",
    "posttext": "Left click enables, right click disables this ability.",
    "icon":{
      "name": "Beast Mastery", "img": "./icon/Ability_Hunter_BeastMastery.png", "ranks": 1, "desc":["You master the art of beast training, teaching you the ability to tame Exotic pets and increasing your total number of Pet Skill Points by 4."]
    }
  }]
  , "name": "Hunter Pet", "tabs":[ {
      "name": "Ferocity", "background": "./img/hunterpetferocity.png", "desc": "These talents can be used by the following pet family types:"
      , "usable":[
        {
          "icon":"./icon/Ability_hunter_pet_vulture.png",
          "name":"Carrion Bird",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Cat.png",
          "name":"Cat",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_hunter_pet_corehound.png",
          "name":"Core Hound",
          "type": 2,
          "exotic": true
        },
        {
          "icon":"./icon/Ability_hunter_pet_devilsaur.png",
          "name":"Devilsaur",
          "type": 2,
          "exotic": false
        },
        {
          "icon":"./icon/inv_jewelry_necklace_22.png",
          "name":"Dog",
          "type": 3,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_hunter_aspectofthefox.png",
          "name":"Fox",
          "type": 3,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_hunter_pet_hyena.png",
          "name":"Hyena",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Moth.png",
          "name":"Moth",
          "type": 2,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_hunter_pet_raptor.png",
          "name":"Raptor",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_druid_primalprecision.png",
          "name":"Spirit Beast",
          "type": 2,
          "exotic": true
        },
        {
          "icon":"./icon/Ability_hunter_pet_tallstrider.png",
          "name":"Tallstrider",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Wasp.png",
          "name":"Wasp",
          "type": 2,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Wolf.png",
          "name":"Wolf",
          "type": 0,
          "exotic": false
        }
      ] 
      , "icon": "./icon/Ability_Druid_KingoftheJungle.png", "type": 2
      , "talents":[{
	
	"row": 0, "col": 0, "name": "Serpent Swiftness", "img": "./icon/Ability_Hunter_SerpentSwiftness.png", "ranks": "2", "desc":[ "Increases your pet's attack speed by 5%.", "Increases your pet's attack speed by 10%." ]}
      , {
	"row": 0, "col": 1, "name": "Dash", "img": "./icon/Ability_Druid_Dash.png", "ranks": "1", "desc":[ "Increases your pet's movement speed by 80% for 16 sec." ]}
      , {
	"row": 0, "col": 2, "name": "Great Stamina", "img": "./icon/Spell_Nature_UnyeildingStamina.png", "ranks": "3", "desc":[ "Increases your pet's total health by 4%.", "Increases your pet's total health by 8%.", "Increases your pet's total health by 12%." ]}
      , {
	"row": 0, "col": 3, "name": "Natural Armor", "img": "./icon/Spell_Nature_SpiritArmor.png", "ranks": "2", "desc":[ "Increases your pet's armor by 5%.", "Increases your pet's armor by 10%." ]}
	
      , {
	"row": 1, "col": 0, "name": "Improved Cower", "img": "./icon/Ability_Druid_Cower.png", "ranks": "2", "desc":[ "The movement speed penalty of your pet's Cower is reduced by 50%.", "The movement speed penalty of your pet's Cower is reduced by 100%." ]}
      , {
	"row": 1, "col": 1, "name": "Bloodthirsty", "img": "./icon/Ability_druid_primaltenacity.png", "ranks": "2", "desc":[ "Your pet's attacks have a 10% chance to heal 5% of its total health over 5 sec.", "Your pet's attacks have a 20% chance to heal 5% of its total health over 5 sec." ]}
      , {
	"row": 1, "col": 2, "name": "Spiked Collar", "img": "./icon/inv_jewelry_necklace_22.png", "ranks": "3", "desc":[ "Increases the damage done by your pet's Basic Attacks by 3%.", "Increases the damage done by your pet's Basic Attacks by 6%.", "Increases the damage done by your pet's Basic Attacks by 9%." ]}
      , {
	"row": 1, "col": 3, "name": "Boar's Speed", "img": "./icon/Ability_Hunter_Pet_Boar.png", "ranks": "1", "desc":[ "Increases your pet's movement speed by 30%." ]}
	
      , {
	"row": 2, "col": 0, "name": "Culling the Herd", "img": "./icon/Inv_misc_monsterhorn_06.png", "ranks": "3", "desc":[ "When your pet's Basic Attack deals a critical strike, you and your pet deal 1% increased damage for 10 sec.", "When your pet's Basic Attack deals a critical strike, you and your pet deal 2% increased damage for 10 sec.", "When your pet's Basic Attack deals a critical strike, you and your pet deal 3% increased damage for 10 sec." ]}
      , {
	"row": 2, "col": 2, "name": "Lionhearted", "img": "./icon/INV_BannerPVP_02.png", "ranks": "2", "desc":[ "Reduces the duration of all Stun and Fear effects used against your pet by 15%.", "Reduces the duration of all Stun and Fear effects used against your pet by 30%." ]}
      , {
	"row": 2, "col": 3, "name": "Charge", "img": "./icon/Ability_Hunter_Pet_Bear.png", "ranks": "1", "spell":{
	  "name": "Charge", "desc": "Your pet charges an enemy, immobilizing the target for 1 sec, and increasing the pet's melee attack power by 25% for its next attack.", "cast": "Instant", "cost": "35 Focus", "cooldown": "25 Sec", "range": "8-25 yd range", "icon":"./icon/Ability_Hunter_Pet_Bear.png"}
	  , "desc":[ "Your pet charges an enemy, immobilizing the target for 1 sec, and increasing the pet's melee attack power by 25% for its next attack." ]}
	
      , {
	"row": 3, "col": 1, "name": "Heart of the Phoenix", "img": "./icon/Inv_misc_pheonixpet_01.png", "ranks": "1", "spell":{
	  "name": "Heart of the Phoenix", "desc": "When used, your pet will miraculously return to life with full health.", "cast": "Instant", "cooldown": "8 min", "icon":"./icon/Inv_misc_pheonixpet_01.png"}
	  , "desc":[ "When used, your pet will miraculously return to life with full health." ], "reqRow": 1, "reqCol": 1, "reqRank":2 }
      , {
	"row": 3, "col": 2, "name": "Spider's Bite", "img": "./icon/Ability_Hunter_Pet_Spider.png", "ranks": "3", "desc":[ "Increases the critical strike chance of your pet by 3%.", "Increases the critical strike chance of your pet by 6%.", "Increases the critical strike chance of your pet by 9%." ]}
      , {
	"row": 3, "col": 3, "name": "Great Resistance", "img": "./icon/Spell_nature_resistnature.png", "ranks": "3", "desc":[ "Your pet takes 5% less damage from Arcane, Fire, Frost, Nature and Shadow magic.", "Your pet takes 10% less damage from Arcane, Fire, Frost, Nature and Shadow magic.", "Your pet takes 15% less damage from Arcane, Fire, Frost, Nature and Shadow magic." ]}
	
      , {
	"row": 4, "col": 0, "name": "Rabid", "img": "./icon/Ability_Druid_Berserk.png", "ranks": "1", "spell":{
	  "name": "Rabid", "desc": "Your pet goes into a killing frenzy. Successful attacks have a chance to increase attack power by 5%. This effect will stack up to 5 times. Lasts 20 sec.", "cast": "Instant", "cooldown": "45 sec", "icon":"./icon/Ability_Druid_Berserk.png"}
	  , "desc":[ "Your pet goes into a killing frenzy. Successful attacks have a chance to increase attack power by 5%. This effect will stack up to 5 times. Lasts 20 sec." ]}
      , {
	"row": 4, "col": 1, "name": "Lick Your Wounds", "img": "./icon/Ability_Hunter_MendPet.png", "ranks": "1", "spell":{
	  "name": "Lick Your Wounds", "desc": "Your pet heals itself for 100% of its total health over 4.9 sec while channeling.", "cast": "Channeled", "cooldown": "3 min", "icon":"./icon/Ability_Hunter_MendPet.png"}
	  , "desc":[ "Your pet heals itself for 100% of its total health over 4.9 sec while channeling." ], "reqRow": 3, "reqCol": 1, "reqRank":1 }
      , {
	"row": 4, "col": 2, "name": "Call of the Wild", "img": "./icon/Ability_Druid_KingoftheJungle.png", "ranks": "1", "spell":{
	  "name": "Call of the Wild" , "desc":"Your pet roars, increasing your pet's and your melee and ranged attack power by 10%. Lasts 20 sec.", "cast": "Instant", "cooldown": "5 min", "icon":"./icon/Ability_Druid_KingoftheJungle.png"}
	  , "desc":[ "Your pet roars, increasing your pet's and your melee and ranged attack power by 10%. Lasts 20 sec." ], "reqRow": 3, "reqCol": 2, "reqRank":3 }
	
      , {
	"row": 5, "col": 0, "name": "Shark Attack", "img": "./icon/Inv_misc_fish_35.png", "ranks": "2", "desc":[ "Your pet does an additional 3% damage with all attacks.", "Your pet does an additional 6% damage with all attacks." ]}
      , {
	"row": 5, "col": 2, "name": "Wild Hunt", "img": "./icon/Inv_misc_horn_04.png", "ranks": "2", "desc":[ "When your pet is at or above 50 Focus, your pet's Basic Attacks will deal 60% more damage, but cost 50% additional focus.", "When your pet is at or above 50 Focus, your pet's Basic Attacks will deal 120% more damage, but cost 100% additional focus." ], "reqRow": 4, "reqCol": 2, "reqRank":1 }

     ]}
     
     
     
     , {
      "name": "Cunning", "background": "./img/hunterpetcunning.png", "desc": "These talents can be used by the following pet family types:" 
      , "usable":[
        {
          "icon":"./icon/Ability_Hunter_Pet_Bat.png",
          "name":"Bat",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Owl.png",
          "name":"Bird of Prey",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Chimera.png",
          "name":"Chimaera",
          "type": 2,
          "exotic": true
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_DragonHawk.png",
          "name":"Dragonhawk",
          "type": 1,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_AspectOfTheMonkey.png",
          "name":"Monkey",
          "type": 3,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_NetherRay.png",
          "name":"Nether Ray",
          "type": 1,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Ravager.png",
          "name":"Ravager",
          "type": 1,
          "exotic": false
        },
        {
          "icon":"./icon/Spell_Nature_GuardianWard.png",
          "name":"Serpent",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Silithid.png",
          "name":"Silithid",
          "type": 2,
          "exotic": true
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Spider.png",
          "name":"Spider",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Sporebat.png",
          "name":"Sporebat",
          "type": 1,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_WindSerpent.png",
          "name":"Wind Serpent",
          "type": 0,
          "exotic": false
        }
      ]
      , "icon": "./icon/Ability_eyeoftheowl.png", "type": 8
      , "talents":[{
	
	"row": 0, "col": 0, "name": "Serpent Swiftness", "img": "./icon/Ability_Hunter_SerpentSwiftness.png", "ranks": "2", "desc":[ "Increases your pet's attack speed by 5%.", "Increases your pet's attack speed by 10%." ]}
      , {
	"row": 0, "col": 1, "name": "Dash", "img": "./icon/Ability_Druid_Dash.png", "ranks": "1", "spell":{
	  "name": "Dash", "desc": "Increases your pet's movement speed by 80% for 16 sec.", "cast": "Instant", "cooldown": "32 sec", "cost": "30 Focus", "icon":"./icon/Ability_Druid_Dash.png"}
	  , "desc":[ "Increases your pet's movement speed by 80% for 16 sec." ]}
      , {
	"row": 0, "col": 2, "name": "Great Stamina", "img": "./icon/Spell_Nature_UnyeildingStamina.png", "ranks": "3", "desc":[ "Increases your pet's total health by 4%.", "Increases your pet's total health by 8%.", "Increases your pet's total health by 12%." ]}
      , {
	"row": 0, "col": 3, "name": "Natural Armor", "img": "./icon/Spell_Nature_SpiritArmor.png", "ranks": "2", "desc":[ "Increases your pet's armor by 5%.", "Increases your pet's armor by 10%." ]}
	
      , {
	"row": 1, "col": 0, "name": "Boar's Speed", "img": "./icon/Ability_Hunter_Pet_Boar.png", "ranks": "1", "desc":[ "Increases your pet's movementspeed by 30%." ]}
      , {
	"row": 1, "col": 1, "name": "Mobility", "img": "./icon/Ability_Hunter_AnimalHandler.png", "ranks": "2", "desc":[ "Reduces the cooldown on your pet's Dash ability by 8 sec.", "Reduces the cooldown on your pet's Dash ability by 16 sec." ], "reqRow": 0, "reqCol": 1, "reqRank": 1 }
      , {
	"row": 1, "col": 2, "name": "Owl's Focus", "img": "./icon/Ability_Hunter_Pet_Owl.png", "ranks": "2", "desc":[ "Your pet has a 15% chance after using a Basic Attack to cause the next Basic Attack to cost no Focus if used within 8 sec.", "Your pet has a 30% chance after using a Basic Attack to cause the next Basic Attack to cost no Focus if used within 8 sec." ]}
      , {
	"row": 1, "col": 3, "name": "Spiked Collar", "img": "./icon/inv_jewelry_necklace_22.png", "ranks": "3", "desc":[ "Increases the damage done by your pet's Basic Attacks by 3%.", "Increases the damage done by your pet's Basic Attacks by 6%.", "Increases the damage done by your pet's Basic Attacks by 9%." ]}
	
      , {
	"row": 2, "col": 0, "name": "Culling the Herd", "img": "./icon/Inv_misc_monsterhorn_06.png", "ranks": "3", "desc":[ "When your pet's Basic Attack deals a critical strike, you and your pet deal 1% increased damage for 10 sec.", "When your pet's Basic Attack deals a critical strike, you and your pet deal 2% increased damage for 10 sec.", "When your pet's Basic Attack deals a critical strike, you and your pet deal 3% increased damage for 10 sec." ]}
      , {
	"row": 2, "col": 1, "name": "Lionhearted", "img": "./icon/INV_BannerPVP_02.png", "ranks": "2", "desc":[ "Reduces the duration of all Stun and Fear effects used against your pet by 15%.", "Reduces the duration of all Stun and Fear effects used against your pet by 30%." ]}
      , {
	"row": 2, "col": 2, "name": "Carrion Feeder", "img": "./icon/Ability_Racial_Cannibalize.png", "ranks": "1", "spell":{
	  "name": "Carrion Feeder", "desc": "Your pet can generate health by eating a corpse. Will not work on the remains of elemental or mechanical creatures.", "cast": "Instant", "cooldown": "30 sec", "range": "5 yd range", "icon":"./icon/Ability_Racial_Cannibalize.png"}
	  , "desc":[ "Your pet can generate health by eating a corpse. Will not work on the remains of elemental or mechanical creatures." ]}
	
      , {
	"row": 3, "col": 1, "name": "Great Resistance", "img": "./icon/Spell_nature_resistnature.png", "ranks": "3", "desc":[ "Your pet takes 5% less damage from Arcane, Frie, Drost, Nature and Shadow magic.", "Your pet takes 10% less damage from Arcane, Frie, Drost, Nature and Shadow magic.", "Your pet takes 15% less damage from Arcane, Frie, Drost, Nature and Shadow magic." ]}
      , {
	"row": 3, "col": 2, "name": "Cornered", "img": "./icon/Ability_hunter_survivalinstincts.png", "ranks": "2", "desc":[ "When at less than 35% health, your pet does 25% more damage and has a 30% reduced chance to be critically hit.", "When at less than 35% health, your pet does 50% more damage and has a 60% reduced chance to be critically hit." ]}
      , {
	"row": 3, "col": 3, "name": "Feeding Frenzy", "img": "./icon/Inv_misc_fish_48.png", "ranks": "2", "desc":[ "Your pet does 8% additional damage to targets with less than 35% health.", "Your pet does 16% additional damage to targets with less than 35% health." ], "reqRow": 1, "reqCol": 3, "reqRank": 3 }
	
      , {
	"row": 4, "col": 0, "name": "Wolverine Bite", "img": "./icon/Ability_druid_lacerate.png", "ranks": "1", "spell":{
	  "name": "Wolverine Bite", "desc": "A fierce attack causing 210 damage, that your pet can use after it makes a critical attack. Cannot be dodged, blocked or paried.", "cast": "Instant", "cooldown": "10 sec", "range": "Melee Range", "icon":"./icon/Ability_druid_lacerate.png"}
	  , "desc":[ "A fierce attack causing 210 damage, that your pet can use after it makes a critical attack. Cannot be dodged, blocked or paried." ]}
      , {
	"row": 4, "col": 1, "name": "Roar of Recovery", "img": "./icon/Ability_druid_mastershapeshifter.png", "ranks": "1", "spell":{
	  "name": "Roar of Recovery", "desc": "Your pet's inspiring roar restores 30 focus over 9 sec.", "cast": "Instant", "cooldown": "3 min", "range": "40 yd range", "icon":"./icon/Ability_druid_mastershapeshifter.png"}
	  , "desc":[ "Your pet's inspiring roar restores 30 focus over 9 sec." ]}
      , {
	"row": 4, "col": 2, "name": "Bullheaded", "img": "./icon/Ability_warrior_bullrush.png", "ranks": "1", "spell":{
	  "name": "Bullheaded", "desc": "Removes all movement imparing effects and all effects which cause loss of control of your pet, and reduces damage done to your pet be 20% dor 12 sec.", "cast": "Instant", "cooldown": "3 min", "icon":"./icon/Ability_warrior_bullrush.png"}
	  , "desc":[ "Removes all movement imparing effects and all effects which cause loss of control of your pet, and reduces damage done to your pet be 20% dor 12 sec." ], "reqRow": 3, "reqCol": 2, "reqRank": 2 }
      , {
	"row": 4, "col": 3, "name": "Grace of the Mantis", "img": "./icon/Inv_misc_ahnqirajtrinket_02.png", "ranks": "2", "desc":[ "Reduces the chance your pet will be critically hit by melee attacks by 3%.", "Reduces the chance your pet will be critically hit by melee attacks by 6%." ]}
	
      , {
	"row": 5, "col": 0, "name": "Wild Hunt", "img": "./icon/Inv_misc_horn_04.png", "ranks": "2", "desc":[ "When your pet is at or above 50 Focus, your pet's Basic Attacks will deal 60% more damage, but cost 50% additional focus.", "When your pet is at or above 50 Focus, your pet's Basic Attacks will deal 120% more damage, but cost 100% additional focus." ], "reqRow": 4, "reqCol": 0, "reqRank": 1 }
      , {
	"row": 5, "col": 3, "name": "Roar of Sacrifice", "img": "./icon/Ability_hunter_fervor.png", "ranks": "1", "spell":{
	  "name": "Roar of Sacrifice", "desc": "Protects a friendly target from critical strikes, making attacks against that target unable to be critical strikes, but 20% of all damage taken by that target is also taken by the pet. Lasts 12 sec.", "cast": "Instant", "cooldown": "1 min", "range": "40 yd range", "icon":"./icon/Ability_hunter_fervor.png"}
	  , "desc":[ "Protects a friendly target from critical strikes, making attacks against that target unable to be critical strikes, but 20% of all damage taken by that target is also taken by the pet. Lasts 12 sec." ], "reqRow": 4, "reqCol": 3, "reqRank": 2 }
      
     ]}  
     
     , {
      "name": "Tenacity", "background": "./img/hunterpettenacity.png", "desc": "These talents can be used by the following pet family types:"
      , "usable":[
        {
          "icon":"./icon/Ability_Hunter_Pet_Bear.png",
          "name":"Bear",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/INV_Misc_AhnQirajTrinket_01.png",
          "name":"Beetle",
          "type": 3,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Boar.png",
          "name":"Boar",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Crab.png",
          "name":"Crab",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Crocolisk.png",
          "name":"Crocolisk",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Gorilla.png",
          "name":"Gorilla",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Rhino.png",
          "name":"Rhino",
          "type": 2,
          "exotic": true
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Scorpid.png",
          "name":"Scorpid",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Spider.png",
          "name":"Shale Spider",
          "type": 3,
          "exotic": true
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Turtle.png",
          "name":"Turtle",
          "type": 0,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_WarpStalker.png",
          "name":"Warp Stalkert",
          "type": 1,
          "exotic": false
        },
        {
          "icon":"./icon/Ability_Hunter_Pet_Worm.png",
          "name":"Worm",
          "type": 2,
          "exotic": true
        }
      ]
      , "icon": "./icon/Ability_druid_demoralizingroar.png", "type": 8
      , "talents":[ {
	
	"row": 0, "col": 0, "name": "Serpent Swiftness", "img": "./icon/Ability_Hunter_SerpentSwiftness.png", "ranks": "2", "desc":[ "Increases your pet's attack speed by 5%.", "Increases your pet's attack speed by 10%." ]}
      , {
	"row": 0, "col": 1, "name": "Charge", "img": "./icon/Ability_Hunter_Pet_Bear.png", "ranks": "1", "spell":{
	  "name": "Charge", "desc": "Your pet charges an enemy, immobilizing the target for 1 sec and increasing the pet's melee attack power by 25% for its next attack.", "cast": "Instant", "cooldown": "25 Sec", "range": "8-25 yd range", "icon":"./icon/Ability_Hunter_Pet_Bear.png"}
	  , "desc":[ "Your pet charges an enemy, immobilizing the target for 1 sec and increasing the pet's melee attack power by 25% for its next attack." ]}
      , {
	"row": 0, "col": 2, "name": "Great Stamina", "img": "./icon/Spell_Nature_UnyeildingStamina.png", "ranks": "3", "desc":[ "Increases your pet's total health by 4%.", "Increases your pet's total health by 8%.", "Increases your pet's total health by 12%." ]}
      , {
	"row": 0, "col": 3, "name": "Natural Armor", "img": "./icon/Spell_Nature_SpiritArmor.png", "ranks": "2", "desc":[ "Increases your pet's armor by 5%.", "Increases your pet's armor by 10%." ]}
	
      , {
	"row": 1, "col": 0, "name": "Spiked Collar", "img": "./icon/inv_jewelry_necklace_22.png", "ranks": "3", "desc":[ "Increases the damage dony by your pet's Basic Attacks by 3%.", "Increases the damage dony by your pet's Basic Attacks by 6%.", "Increases the damage dony by your pet's Basic Attacks by 9%." ]}
      , {
	"row": 1, "col": 1, "name": "Boar's Speed", "img": "./icon/Ability_Hunter_Pet_Boar.png", "ranks": "1", "desc":[ "Increases your pet's movement speed by 30%."  ]}
      , {
	"row": 1, "col": 2, "name": "Blood of the Rhino", "img": "./icon/Spell_Shadow_LifeDrain.png", "ranks": "2", "desc":[ "Increases all healing effects on your pet by 20%.", "Increases all healing effects on your pet by 40%." ], "reqRow": 0, "reqCol": 2, "reqRank":3 }
      , {
	"row": 1, "col": 3, "name": "Pet Barding", "img": "./icon/INV_Helmet_94.png", "ranks": "2", "desc":[ "Increases your pet's armor by 5% and chance to Dodge by 1%.", "Increases your pet's armor by 10% and chance to Dodge by 2%."  ], "reqRow": 0, "reqCol": 3, "reqRank":2 }
	
      , {
	"row": 2, "col": 0, "name": "Culling the Herd", "img": "./icon/Inv_misc_monsterhorn_06.png", "ranks": "3", "desc":[ "When your pet's Basic Attack deals a critical strike, you and your pet deal 1% increased damage for 10 sec.", "When your pet's Basic Attack deals a critical strike, you and your pet deal 2% increased damage for 10 sec.", "When your pet's Basic Attack deals a critical strike, you and your pet deal 3% increased damage for 10 sec." ]}
      , {
	"row": 2, "col": 1, "name": "Guard dog", "img": "./icon/Ability_physical_taunt.png", "ranks": "2", "desc":[ "Your pet's Growl generates 10% additional threat.", "Your pet's Growl generates 20% additional threat." ]}
      , {
	"row": 2, "col": 2, "name": "Lionhearted", "img": "./icon/INV_BannerPVP_02.png", "ranks": "2", "desc":[ "Reduces the duration of all Stun and Fear effects used against your pet by 15%.", "Reduces the duration of all Stun and Fear effects used against your pet by 30%." ]}
      , {
	"row": 2, "col": 3, "name": "Thunderstomp", "img": "./icon/Ability_golemthunderclap.png", "ranks": "1","spell":{
	  "name": "Thunderstomp", "desc": "Shakes the ground with thundering force, doing 178 Nature damage to all enemies within 8 yards. This ability causes a moderate amount of additional threat.", "cast": "Instant", "cost": "20 Focus", "cooldown": "10 Sec", "range": "Melee Range", "icon":"./icon/Ability_golemthunderclap.png"}
	  , "desc":[ "Shakes the ground with thundering force, doing 178 Nature damage to all enemies within 8 yards. This ability causes a moderate amount of additional threat." ]}
	
      , {
	"row": 3, "col": 2, "name": "Grace of the Mantis", "img": "./icon/Inv_misc_ahnqirajtrinket_02.png", "ranks": "2", "desc":[ "Reduces the chance your pet will be critically hit by melee attacks by 3%.", "Reduces the chance your pet will be critically hit by melee attacks by 6%." ]}
      , {
	"row": 3, "col": 3, "name": "Great Resistance", "img": "./icon/Spell_nature_resistnature.png", "ranks": "3", "desc":[ "Your pet takes 5% less damage from Arcane, Fire, Frost, Nature and Shadow magic.", "Your pet takes 10% less damage from Arcane, Fire, Frost, Nature and Shadow magic.", "Your pet takes 15% less damage from Arcane, Fire, Frost, Nature and Shadow magic." ]}
	
      , {
	"row": 4, "col": 0, "name": "Last Stand", "img": "./icon/Spell_nature_shamanrage.png", "ranks": "1","spell":{
	  "name": "Last Stand", "desc": "Your pet temporarily gains 30% of its maximum health for 20 sec. After the effect expires, the health is lost.", "cast": "Instant", "cooldown": "6 min", "icon":"./icon/Spell_nature_shamanrage.png"}
	  , "desc":[ "Your pet temporarily gains 30% of its maximum health for 20 sec. After the effect expires, the health is lost." ]}
      , {
	"row": 4, "col": 1, "name": "Taunt", "img": "./icon/Spell_nature_reincarnation.png", "ranks": "1","spell":{
	  "name": "Last Stand", "desc": "Your pet taunts the target to attack it for 3 sec.", "cast": "Instant", "cooldown": "1 min", "range": "Melee Range", "icon":"./icon/Spell_nature_reincarnation.png"}
	  , "desc":[ "Your pet taunts the target to attack it for 3 sec." ], "reqRow": 2, "reqCol": 1, "reqRank":2 }
      , {
	"row": 4, "col": 2, "name": "Roar of Sacrifice", "img": "./icon/Ability_hunter_fervor.png", "ranks": "1","spell":{
	  "name": "Roar of Sacrifice", "desc": "Protects a friendly target from critical strikes, making attacks against that target unable to be critical strikes, but 20% of all damage taken by that target is also taken by the pet. Lasts 12 sec.", "cast": "Instant", "cooldown": "1 min", "range": "40 yd range", "icon":"./icon/Ability_hunter_fervor.png"}
	  , "desc":[ "Protects a friendly target from critical strikes, making attacks against that target unable to be critical strikes, but 20% of all damage taken by that target is also taken by the pet. Lasts 12 sec." ], "reqRow": 3, "reqCol": 2, "reqRank":2 }
      , {
	"row": 4, "col": 3, "name": "Intervene", "img": "./icon/Ability_hunter_pet_turtle.png", "ranks": "1","spell":{
	  "name": "Roar of Sacrifice", "desc": "Your pet runs at high speed towards a group member, absorbing damage done against them from the next attacks equal to 50% of your pet's total health.", "cast": "Instant", "cooldown": "30 sec", "range": "8-25 yd range", "icon":"./icon/Ability_hunter_pet_turtle.png"}
	  , "desc":[ "Your pet runs at high speed towards a group member, absorbing damage done against them from the next attacks equal to 50% of your pet's total health." ]}
	
      , {
	"row": 5, "col": 1, "name": "Silverback", "img": "./icon/Ability_hunter_pet_gorilla.png", "ranks": "2", "desc":[ "Your pet's Growl also heals it for 1% of its total health.", "Your pet's Growl also heals it for 2% of its total health." ]}
      , {
	"row": 5, "col": 2, "name": "Wild Hunt", "img": "./icon/Inv_misc_horn_04.png", "ranks": "2", "desc":[ "When your pet is at or above 50 Focus, your pet's Basic Attacks will deal 60% more damage, but cost 50% additional focus." , "When your pet is at or above 50 Focus, your pet's Basic Attacks will deal 120% more damage, but cost 100% additional focus." ], "reqRow": 4, "reqCol": 2, "reqRank":1 }
      
     ]}
]}

