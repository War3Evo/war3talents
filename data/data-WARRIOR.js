{
  "name": "Warrior", "tabs":[ {
      "name": "Arms", "background": "./img/WarriorArms.png", "desc": "A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike her opponents down.", "icon": "./icon/Ability_Warrior_SavageBlow.png", "type": 8, "mastery":{
      "name": "Strikes of Opportunity", "desc":"Grants a 17.6% chance for your melee attacks to instantly trigger an additional melee attacks for 100% normal damage. Each point of Mastery increases this chance by 2.2%."}
      , "primaries":[ {
      "name": "Mortal Strike", "desc": "A vicious strike that deals 150% weapon damage plus 635 and wounds the target, reducing the effectiveness of any healing recieved for 10 sec.", "cast": "Instant", "cost": "20 Rage", "cooldown": "4.5 Sec", "range": "Melee Range", "icon":"./icon/Ability_Warrior_SavageBlow.png"}
      , {
      "name": "Anger Management", "desc": "You gain 1 Rage every 3 seconds while in combat, and generate 25% extra Rage from damage dealt.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Ability_Warrior_EndlessRage.png"}
      , {
      "name": "Two-Handed Weapon Specialization", "desc": "Increases the damage you deal with two-handed melee weapons by 12%.", "rank": "Passive", "cast": "Instant", "icon":"./icon/INV_Axe_09.png"}
      ], "talents":[ {
      "row": 1, "col": 2, "name": "Deep Wounds", "img": "./icon/Ability_BackStab.png", "ranks": 3, "desc":["Your critical strikes cause the opponent to bleed, dealing 16% of your melee weapon's average damage over 6 sec.", "Your critical strikes cause the opponent to bleed, dealing 32% of your melee weapon's average damage over 6 sec.", "Your critical strikes cause the opponent to bleed, dealing 48% of your melee weapon's average damage over 6 sec."]}
      , {
      "row": 1, "col": 3, "name": "Drums of War", "img": "./icon/Achievement_BG_winWSG_3-0.png", "ranks": 2, "desc":["Reduces the Rage cost of your Pummel, Demoralizing Shout, Intimidating Shout and Challenging Shout by 50%.", "Reduces the Rage cost of your Pummel, Demoralizing Shout, Intimidating Shout and Challenging Shout by 100%."]}
      , {
      "row": 1, "col": 1, "name": "Second Wind", "img": "./icon/Ability_Hunter_Harass.png", "ranks": 2, "desc":["Whenever you are struck by a Stun or Immobilize effect you generate 10 Rage and 2% of your total health over 10 sec.", "Whenever you are struck by a Stun or Immobilize effect you generate 20 Rage and 5% of your total health over 10 sec."]}
      , {
	  "row": 2, "col": 1, "name": "Sweeping Strikes", "img": "./icon/Ability_Rogue_SliceDice.png", "ranks": 1, "spell":{
	  "name": "Sweeping Strikes", "desc": "Your melee attacks strike an additional nearby opponent. Lasts 10 sec.", "rank": "Battle, Berserker Stance", "cast": "Instant", "cost": "30 Rage", "cooldown": "1 Min", "icon":"./icon/Ability_Rogue_SliceDice.png"}
      , "desc":["Your melee attacks strike an additional nearby opponent. Lasts 10 sec."]}
      , {
      "row": 5, "col": 0, "name": "Wrecking Crew", "img": "./icon/Ability_Warrior_Trauma.png", "ranks": 2, "desc":["Your Mortal Strike critical hits have a 50% chance to Enrage you, increasing physical damage caused by 5% for 12 sec.", "Your Mortal Strike critical hits have a 100% chance to Enrage you, increasing physical damage caused by 10% for 12 sec."]}
      , {
      "row": 4, "col": 1, "name": "Juggernaut", "img": "./icon/Ability_Warrior_BullRush.png", "ranks": 1, "desc":["Your Charge ability is now usable while in combat and in all stances, and the cooldown of your Charge is reduced by 2 sec. Following a Charge, your next Slam or Mortal Strike has an additional 25% chance to critically hit if used within 10 sec. However, Charge and Intercept now share a cooldown."]}
      , {
      "row": 4, "col": 3, "name": "Sudden Death", "img": "./icon/Ability_Warrior_ImprovedDisciplines.png", "ranks": 2, "desc":["Your melee hits have a 3% chance of resetting the cooldown on your Colossus Smash, and you keep 5 rage after using Execute.", "Your melee hits have a 6% chance of resetting the cooldown on your Colossus Smash, and you keep 10 rage after using Execute."]}
      , {
	  "row": 6, "col": 1, "name": "Bladestorm", "img": "./icon/Ability_Warrior_Bladestorm.png", "ranks": 1, "spell":{
	  "name": "Bladestorm", "desc": "You become a whirling storm of destructive force, instantly striking all nearby targets for 150% weapon damage and continuing to perform a whirlwind attack every 1 sec for 6 sec. While under the effects of Bladestorm, you do not feel pity or remorse or fear and you cannot be stopped unless killed or disarmed, but you cannot perform any other abilities.", "cast": "Instant", "cost": "25 Rage", "cooldown": "1.5 Min", "icon":"./icon/Ability_Warrior_Bladestorm.png"}
      , "desc": ["You become a whirling storm of destructive force, instantly striking all nearby targets for 150% weapon damage and continuing to perform a whirlwind attack every 1 sec for 6 sec. While under the effects of Bladestorm, you do not feel pity or remorse or fear and you cannot be stopped unless killed or disarmed, but you cannot perform any other abilities."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 2, "name": "Blood Frenzy", "img": "./icon/Ability_Warrior_BloodFrenzy.png", "ranks": 2, "desc":["Your bleed effects cause targets to take an extra 2% physical damage. Applying a bleed effect increases bleed damage taken by the target by 15% for 1 min. In addition, your autoattacks have a 5% chance to generate 20 additional Rage.", "Your bleed effects cause targets to take an extra 4% physical damage. Applying a bleed effect increases bleed damage taken by the target by 30% for 1 min. In addition, your autoattacks have a 10% chance to generate 20 additional Rage."]}
      , {
      "row": 0, "col": 2, "name": "Blitz", "img": "./icon/warrior_talent_icon_blitz.png", "ranks": 2, "desc":["Your Charge generates 5 additional Rage and stuns an additional nearby target.", "Your Charge generates 10 additional rage and stuns an additional 2 nearby targets."]}
      , {
      "row": 0, "col": 0, "name": "War Academy", "img": "./icon/Ability_Warrior_UnrelentingAssault.png", "ranks": 3, "desc":["Increases the damage of Mortal Strike, Raging Blow, Devastate, Victory Rush and Slam by 5%.", "Increases the damage of Mortal Strike, Raging Blow, Devastate, Victory Rush and Slam by 10%.", "Increases the damage of Mortal Strike, Raging Blow, Devastate, Victory Rush and Slam by 15%."]}
      , {
      "row": 2, "col": 0, "name": "Taste for Blood", "img": "./icon/Ability_Rogue_HungerforBlood.png", "ranks": 3, "desc":["Increases your Overpower critical strike chance by 20%. In addition, whenever your Rend ability causes damage, you have a 33% chance of allowing the use of Overpower for 9 sec. This effect will not occur more than once every 5 sec.", "Increases your Overpower critical strike chance by 40%. In addition, whenever your Rend ability causes damage, you have a 66% chance of allowing the use of Overpower for 9 sec. This effect will not occur more than once every 5 sec.", "Increases your Overpower critical strike chance by 60%. In addition, whenever your Rend ability causes damage, you have a 100% chance of allowing the use of Overpower for 9 sec. This effect will not occur more than once every 5 sec."]}
      , {
      "row": 4, "col": 0, "name": "Lambs to the Slaughter", "img": "./icon/warrior_talent_icon_lambstotheslaughter.png", "ranks": 3, "desc":["Your Mortal Strike causes the Slaughter effect, which refreshes the duration of Rend on the target and increases the damage of your Execute, Overpower, Slam and Mortal Strike by 10%. Lasts 15 sec.", "Your Mortal Strike causes the Slaughter effect, which refreshes the duration of Rend on the target and increases the damage of your Execute, Overpower, Slam and Mortal Strike by 10%. Lasts 15 sec. Stacks up to 2 times.", "Your Mortal Strike causes the Slaughter effect, which refreshes the duration of Rend on the target and increases the damage of your Execute, Overpower, Slam and Mortal Strike by 10%. Lasts 15 sec. Stacks up to 3 times."]}
      , {
      "row": 2, "col": 2, "name": "Impale", "img": "./icon/Ability_SearingArrow.png", "ranks": 2, "desc": ["Increases the critical strike damage bonus of Mortal Strike, Slam and Overpower by 10%.", "Increases the critical strike damage bonus of Mortal Strike, Slam and Overpower by 20%."], "reqRow": 1, "reqCol": 2, "reqRank":3}
      , {
      "row": 0, "col": 1, "name": "Field Dressing", "img": "./icon/INV_Misc_Bandage_05.png", "ranks": 2, "desc":["Increases all healing received by 3%, and the effectiveness of your self-healing abilities by an additional 10%.", "Increases all healing received by 6%, and the effectiveness of your self-healing abilities by an additional 20%."]}
      , {
	  "row": 5, "col": 2, "name": "Throwdown", "img": "./icon/inv_mace_62.png", "ranks": 1, "spell":{
	  "name": "Throwdown", "desc": "Knocks the target to the ground and stuns it for 5 sec.", "rank": "Battle Stance", "cast": "Instant", "cost": "15 Rage", "cooldown": "45 Sec", "range": "Melee Range", "icon":"./icon/inv_mace_62.png"}
      , "desc": ["Knocks the target to the ground and stuns it for 5 sec."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 1, "name": "Deadly Calm", "img": "./icon/achievement_boss_kingymiron.png", "ranks": 1, "desc":["For the next 10 sec, none of your abilities cost rage, but you continue to generate rage. Cannot be used during Inner Rage."]}
      , {
      "row": 1, "col": 0, "name": "Tactical Mastery", "img": "./icon/Spell_Nature_EnchantArmor.png", "ranks": 2, "desc":["You retain up to an additional 25 Rage when you change stances.", "You retain up to an additional 50 Rage when you change stances."]}
      , {
      "row": 2, "col": 3, "name": "Improved Hamstring", "img": "./icon/Ability_ShockWave.png", "ranks": 2, "desc":["When reapplying Hamstring, you immobilize the target for 5 sec. This effect cannot occur more than once every 60 sec. In addition, reduces the global cooldown of your Hamstring by 0.25 sec.", "When reapplying Hamstring, you immobilize the target for 5 sec. This effect cannot occur more than once every 30 sec. In addition, reduces the global cooldown of your Hamstring by 0.5 sec."]}
      , {
      "row": 3, "col": 0, "name": "Improved Slam", "img": "./icon/Ability_Warrior_DecisiveStrike.png", "ranks": 2, "desc":["Decreases the swing time of Slam by 0.5 sec and increases its damage by 10%.", "Decreases the swing time of Slam by 1 sec and increases its damage by 20%."]}
     ]}
     , {
      "name": "Fury", "background": "./img/WarriorFury.png", "desc": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.", "icon": "./icon/Ability_Warrior_InnerRage.png", "type": 8, "mastery":{
      "name": "Unshackled Fury", "desc":"Increases the benefit of abilities that cause or require you to be enraged by 11%. Each point of Mastery increases enrage effects by an additional 5.60%."}
      , "primaries":[ {
      "name": "Bloodthirst", "desc": "Instantly attack the target causing 506 damage. In addition, the  next 3 successful melee attacks will restore 0.5% of max health. This effect lasts 8 sec. Damage is based on your attack power.", "cast": "Instant", "cost": "20 Rage", "cooldown": "3 Sec", "range": "Melee Range", "icon":"./icon/Spell_Nature_BloodLust.png"}
      , {
      "name": "Dual Wield Specialization", "desc": "Allows you to equip one-hand and off-hand weapons in your off-hand. Increases the damage oy your off-hand attacks by an addition 25%", "rank": "Passive", "cast": "Instant", "icon":"./icon/Ability_DualWield.png"}
      , {
      "name": "Precision", "desc": "Increases your chance to hit with your attacks by 3% and increases autoattack damage by 40%.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Ability_Marksmanship.png"}
      ], "talents":[ {
      "row": 0, "col": 1, "name": "Battle Trance", "img": "./icon/INV_Helmet_06.png", "ranks": 3, "desc":["Your Bloodthirst, Mortal Strike and Shield Slam hits have a 5% chance to make your next special attack that costs more than 5 Rage consumes no Rage.", "Your Bloodthirst, Mortal Strike and Shield Slam hits have a 10% chance to make your next special attack that costs more than 5 Rage consumes no Rage.", "Your Bloodthirst, Mortal Strike and Shield Slam hits have a 15% chance to make your next special attack that costs more than 5 Rage consumes no Rage."]}
      , {
      "row": 0, "col": 2, "name": "Cruelty", "img": "./icon/Ability_Rogue_Eviscerate.png", "ranks": 2, "desc":["Increases the critical strike chance of Bloodthirst, Mortal Strike and Shield Slam by 5%.", "Increases the critical strike chance of Bloodthirst, Mortal Strike and Shield Slam by 10%."]}
      , {
      "row": 0, "col": 0, "name": "Blood Craze", "img": "./icon/Spell_Shadow_SummonImp.png", "ranks": 3, "desc":["After taking any damage, you have a 10% chance to regenerate 2% of your total health over 5 sec.", "After taking any damage, you have a 10% chance to regenerate 4% of your total Health over 5 sec.", "After taking any damage, you have a 10% chance to regenerate 6% of your total Health over 5 sec."]}
      , {
      "row": 2, "col": 2, "name": "Enrage", "img": "./icon/Spell_Shadow_UnholyFrenzy.png", "ranks": 3, "desc":["Your melee hits have a 3% chance to Enrage you, giving you a 3% physical damage bonus for 9 sec.", "Your melee hits have a 6% chance to Enrage you, giving you a 7% physical damage bonus for 9 sec.", "Your melee hits have a 9% chance to Enrage you, giving you a 10% physical damage bonus for 9 sec."]}
      , {
	  "row": 1, "col": 3, "name": "Piercing Howl", "img": "./icon/Spell_Shadow_DeathScream.png", "ranks": 1, "spell":{
	  "name": "Piercing Howl", "desc": "Causes all enemies within 10 yards to be Dazed, reducing movement speed by 50% for 6 sec.", "cast": "Instant", "cost": "10 Rage", "icon":"./icon/Spell_Shadow_DeathScream.png"}
      , "desc":["Causes all enemies within 10 yards to be Dazed, reducing movement speed by 50% for 6 sec."]}
      , {
      "row": 1, "col": 1, "name": "Booming Voice", "img": "./icon/Spell_Nature_Purge.png", "ranks": 2, "desc":["Reduces the cooldown of your Battle Shout and Commanding Shout by 15 sec and causes those abilities to generate 5 additional Rage.", "Reduces the cooldown of your Battle Shout and Commanding Shout by 30 sec and causes those abilities to generate 10 additional Rage."]}
      , {
	  "row": 2, "col": 1, "name": "Death Wish", "img": "./icon/Spell_Shadow_DeathPact.png", "ranks": 1, "spell":{
	  "name": "Death Wish", "desc": "When activated you become Enraged, increasing your physical damage by 20% but increasing all damage taken by 5%. Lasts 30 sec.", "cast": "Instant", "cost": "10 Rage", "cooldown": "3 Min", "icon":"./icon/Spell_Shadow_DeathPact.png"}
      , "desc":["Bei Aktivierung werdet Ihr wütend und erhöht so Euren verursachten körperlichen Schaden um 20%, jeglicher erlittene Schaden wird jedoch ebenfalls um 5% erhöht. Hält 30 Sek lang an."]}
      , {
      "row": 4, "col": 0, "name": "Furious Attacks", "img": "./icon/Ability_Warrior_FuriousResolve.png", "ranks": 1, "desc":["Your autoattacks have a chance to reduce all healing done to the target by 25% for 10 sec."]}
      , {
      "row": 2, "col": 0, "name": "Flurry", "img": "./icon/Ability_GhoulFrenzy.png", "ranks": 3, "desc":["Increases your attack speed by 8% for your next 3 swings after dealing a melee critical strike.", "Increases your attack speed by 16% for your next 3 swings after dealing a melee critical strike.", "Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike."]}
      , {
      "row": 4, "col": 2, "name": "Meat Cleaver", "img": "./icon/warrior_talent_icon_mastercleaver.png", "ranks": 2, "desc":["Dealing damage with Cleave or Whirlwind increases the damage of Cleave and Whirlwind by s2% for 10 sec. This effect stacks up to 3 times.","Dealing damage with Cleave or Whirlwind increases the damage of Cleave and Whirlwind by s2% for 10 sec. This effect stacks up to 3 times."]}
      , {
      "row": 1, "col": 0, "name": "Executioner", "img": "./icon/INV_Sword_48.png", "ranks": 2, "desc":["Your Execute hits have a 50% chance to improve your melee attack speed by 5% for 9 sec. This effect stacks up to 5 times.", "Your Execute hits have a 100% chance to improve your melee attack speed by 5% for 9 sec. This effect stacks up to 5 times."]}
      , {
      "row": 3, "col": 3, "name": "Heroic Fury", "img": "./icon/warrior_talent_icon_deadlycalm.png", "ranks": 1, "desc":["Removes any Immobilization effects and refreshes the cooldown of your Intercept ability."]}
      , {
      "row": 3, "col": 2, "name": "Rampage", "img": "./icon/Ability_Warrior_Rampage.png", "ranks": 1, "desc": ["Increases the critical strike chance of all party and raid members within 100 yds by 5%. In addition, improves your critical strike chance by an additional 2%."], "reqRow": 3, "reqCol": 1, "reqRank":1}
      , {
      "row": 5, "col": 1, "name": "Bloodsurge", "img": "./icon/Ability_Warrior_Bloodsurge.png", "ranks": 3, "desc": ["Your Bloodthirst hits have a 10% chance of making your next Slam instant, free, and deal 20% more damage for 10 sec.", "Your Bloodthirst hits have a 20% chance of making your next Slam instant, free, and deal 20% more damage for 10 sec.", "Your Bloodthirst hits have a 30% chance of making your next Slam instant, free, and deal 20% more damage for 10 sec."], "reqRow": 3, "reqCol": 1, "reqRank":1}
      , {
      "row": 6, "col": 1, "name": "Titan's Grip", "img": "./icon/Ability_Warrior_TitansGrip.png", "ranks": 1, "desc":["Allows you to equip two-handed axes, maces and swords in one hand."]}
      , {
      "row": 6, "col": 2, "name": "Single-Minded Fury", "img": "./icon/warrior_talent_icon_singlemindedfury.png", "ranks": 1, "desc":["When you dual-wield one-handed weapons, you deal 20% additional damage and Slam hits with both weapons."]}
      , {
      "row": 4, "col": 3, "name": "Intensify Rage", "img": "./icon/warrior_talent_icon_furyintheblood.png", "ranks": 2, "desc":["Reduces the cooldown of your Berserker Rage, Recklessness and Death Wish abilities by 10%.","Reduces the cooldown of your Berserker Rage, Recklessness and Death Wish abilities by 20%."]}
      , {
      "row": 5, "col": 2, "name": "Skirmisher", "img": "./icon/warrior_talent_icon_skirmisher.png", "ranks": 2, "desc":["Reduces the cooldown of your Intercept by 5 sec and your Heroic Leap by 10 sec.", "Reduces the cooldown of your Intercept by 10 sec and your Heroic Leap by 20 sec."]}
      , {
	  "row": 3, "col": 1, "name": "Raging Blow", "img": "./icon/Ability_Hunter_SwiftStrike.png", "ranks": 1, "spell":{
	  "name": "Raging Blow", "desc": "A mighty blow that deals 72% weapon damage from both melee weapons. Can only be used while Enraged.", "rank": "Berserker Stance", "cast": "Instant", "cost": "20 Rage", "cooldown": "6 Sec", "range": "Melee Range", "icon":"./icon/Ability_Hunter_SwiftStrike.png"}
      , "desc": ["A mighty blow that deals 72% weapon damage from both melee weapons. Can only be used while Enraged."], "reqRow": 2, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 0, "name": "Die by the Sword", "img": "./icon/inv_sword_86.png", "ranks": 2, "desc":["Increases your parry chance by 100% for 4 sec whenever you are brought to 20% health or less. This effect cannot occur more often than once every 2 min.", "Increases your parry chance by 100% for 8 sec whenever you are brought to 20% health or less. This effect cannot occur more often than once every 2 min."]}
      , {
      "row": 1, "col": 2, "name": "Rude Interruption", "img": "./icon/Ability_Warrior_CommandingShout.png", "ranks": 2, "desc":["Successfully interrupting a spell with Pummel increases your damage by 5% for 15 sec.", "Successfully interrupting a spell with Pummel increases your damage by 5% for 30 sec."]}
     ]}
     , {
      "name": "Protection", "background": "./img/WarriorProtection.png", "desc": "A stalwart protector who uses a shield to safeguard herself and her allies.", "icon": "./icon/Ability_Warrior_DefensiveStance.png", "type": 2, "mastery":{
      "name": "Critical Block", "desc":"Increases your chance to block by 12% and your chance to critically block by 12%. Each point of Mastery increases your block chance by an additional 1.5% and your critical block chance by an additional 1.5%."}
      , "primaries":[ {
      "name": "Shield Slam", "desc": "Slam the target with your shield, causing 2299 damage (based on attack power) and dispelling 1 magic effect on the target.", "cast": "Instant", "cost": "20 Rage", "cooldown": "6 Sec", "range": "Melee Range", "icon":"./icon/INV_Shield_05.png"}
      , {
      "name": "Sentinel", "desc": "Increases your total Stamina by 15% and your block chance by 15%. You also generate 50% additional Rage from attacking targets that are not targeting you.", "rank": "Passive", "cast": "Instant", "icon":"./icon/INV_Helmet_21.png"}
      , {
      "name": "Vengeance", "desc": "Each time you take damage, you gain 5% of the damage taken as attack power, up to a maximum of 10% of your healt.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Ability_Paladin_ShieldofVengeance.png"}
      ], "talents":[ {
      "row": 0, "col": 0, "name": "Incite", "img": "./icon/Ability_Warrior_Incite.png", "ranks": 3, "desc":["Increases the critical strike chance of your Heroic Strike by 5%, and gives your Heroic Strike criticals a 33% chance to cause the next Heroic Strike to also be a critical strike. These guaranteed criticals cannot re-trigger the Incite effect.", "Increases the critical strike chance of your Heroic Strike by 10%, and gives your Heroic Strike criticals a 66% chance to cause the next Heroic Strike to also be a critical strike. These guaranteed criticals cannot re-trigger the Incite effect.", "Increases the critical strike chance of your Heroic Strike by 15%, and gives your Heroic Strike criticals a 100% chance to cause the next Heroic Strike to also be a critical strike. These guaranteed criticals cannot re-trigger the Incite effect."]}
      , {
      "row": 1, "col": 0, "name": "Shield Specialization", "img": "./icon/INV_Shield_06.png", "ranks": 3, "desc":["You generate 5 extra Rage when you block an attack. You generate 20 extra Rage when you Spell Reflect a magic attack.", "You generate 10 extra Rage when you block an attack. You generate 40 extra Rage when you Spell Reflect a magic attack.", "You generate 15 extra Rage when you block an attack. You generate 60 extra Rage when you Spell Reflect a magic attack."]}
      , {
      "row": 1, "col": 3, "name": "Gag Order", "img": "./icon/INV_Axe_66.png", "ranks": 2, "desc":["Gives your Pummel and Heroic Throw a 50% chance to silence the target for 3 sec. Also lowers the cooldown on Heroic Throw by 15 sec.", "Gives your Pummel and Heroic Throw a 100% chance to silence the target for 3 sec. Also lowers the cooldown on Heroic Throw by 30 sec."]}
      , {
      "row": 3, "col": 0, "name": "Improved Revenge", "img": "./icon/Ability_Warrior_Revenge.png", "ranks": 2, "desc":["Increases the damage of your Revenge ability by 30% and causes Revenge to strike an additional target for 50% damage.", "Increases the damage of your Revenge ability by 60% and causes Revenge to strike an additional target."]}
      , {
      "row": 1, "col": 1, "name": "Shield Mastery", "img": "./icon/Ability_Warrior_ShieldGuard.png", "ranks": 3, "desc":["Reduces the cooldown of your Shield Block by 10 sec, your Shield Wall by 60 sec and causes your Shield Block to also reduce magic damage taken by 7% for 6 sec.", "Reduces the cooldown of your Shield Block by 20 sec, your Shield Wall by 120 sec and causes your Shield Block to also reduce magic damage taken by 14% for 6 sec.", "Reduces the cooldown of your Shield Block by 30 sec, your Shield Wall by 180 sec and causes your Shield Block to also reduce magic damage taken by 20% for 6 sec."]}
      , {
      "row": 0, "col": 1, "name": "Toughness", "img": "./icon/Spell_Holy_Devotion.png", "ranks": 3, "desc":["Increases your armor value from items by 3%.", "Increases your armor value from items by 6%.", "Increases your armor value from items by 10%."]}
      , {
	  "row": 2, "col": 1, "name": "Concussion Blow", "img": "./icon/Ability_ThunderBolt.png", "ranks": 1, "spell":{
	  "name": "Concussion Blow", "desc": "Stuns the opponent for 5 sec and deals [75/100*AP] damage (based on attack power).", "cast": "Instant", "cost": "15 Rage", "cooldown": "30 Sec", "range": "Melee Range", "icon":"./icon/Ability_ThunderBolt.png"}
      , "desc":["Stuns the opponent for 5 sec and deals [75/100*AP] damage (based on attack power)."]}
      , {
      "row": 0, "col": 2, "name": "Blood and Thunder", "img": "./icon/warrior_talent_icon_bloodandthunder.png", "ranks": 2, "desc":["When you Thunder Clap a target affected by your Rend, you have a 50% chance to affect every target with Rend.", "When you Thunder Clap a target affected by your Rend, you have a 100% chance to affect every target with Rend."]}
      , {
      "row": 2, "col": 0, "name": "Last Stand", "img": "./icon/Spell_Holy_AshesToAshes.png", "ranks": 1, "desc":["Temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost."]}
      , {
      "row": 4, "col": 3, "name": "Heavy Repercussions", "img": "./icon/INV_Shield_01.png", "ranks": 2, "desc":["While your Shield Block is active, your Shield Slam hits for an additional 50% damage.", "While your Shield Block is active, your Shield Slam hits for an additional 100% damage."]}
      , {
	  "row": 3, "col": 2, "name": "Devastate", "img": "./icon/INV_Sword_11.png", "ranks": 1, "spell":{
	  "name": "Devastate", "desc": "Sunder the target's armor causing the Sunder Armor effect. In addition, causes 109% of weapon damage plus 58 for each application of Sunder Armor on the target. The Sunder Armor effect can stack up to 3 times.", "cast": "Instant", "cost": "15 Rage", "range": "Melee Range", "icon":"./icon/INV_Sword_11.png"}
      , "desc":["Sunder the target's armor causing the Sunder Armor effect. In addition, causes 109% of weapon damage plus 58 for each application of Sunder Armor on the target. The Sunder Armor effect can stack up to 3 times."]}
      , {
      "row": 4, "col": 0, "name": "Thunderstruck", "img": "./icon/warrior_talent_icon_thunderstruck.png", "ranks": 2, "desc":["Improves the damage of your Rend, Cleave and Thunder Clap by 3%. In addition, your Thunder Clap improves the damage of your next Shockwave by 5%. Stacks up to 3 times.", "Improves the damage of your Rend, Cleave and Thunder Clap by 6%. In addition, your Thunder Clap improves the damage of your next Shockwave by 10%. Stacks up to 3 times."]}
      , {
      "row": 5, "col": 1, "name": "Safeguard", "img": "./icon/Ability_Warrior_Safeguard.png", "ranks": 2, "desc":["Reduces damage taken by the target of your Intervene ability by 15% for 6 sec.", "Reduces damage taken by the target of your Intervene ability by 30% for 6 sec."]}
      , {
	  "row": 4, "col": 1, "name": "Vigilance", "img": "./icon/Ability_Warrior_Vigilance.png", "ranks": 1, "spell":{
	  "name": "Vigilance", "desc": "Focus your protective gaze on a party or raid member. Each time they are hit by an attack, your Taunt cooldown is refreshed and you gain Vengeance as if 20% of the damage was done to you. Lasts 30 min. This effect can only be on one target at a time.", "cast": "Instant", "range": "30 yd range", "icon":"./icon/Ability_Warrior_Vigilance.png"}
      , "desc": ["Focus your protective gaze on a party or raid member. Each time they are hit by an attack, your Taunt cooldown is refreshed and you gain Vengeance as if 20% of the damage was done to you. Lasts 30 min. This effect can only be on one target at a time."], "reqRow": 2, "reqCol": 1, "reqRank":1}
      , {
      "row": 2, "col": 3, "name": "Warbringer", "img": "./icon/Ability_Warrior_Warbringer.png", "ranks": 1, "desc":["Your Charge, Intercept and Intervene abilities are now usable while in combat and in any stance. In addition, your Intervene ability will remove all movement impairing effects."]}
      , {
      "row": 5, "col": 2, "name": "Sword and Board", "img": "./icon/Ability_Warrior_SwordandBoard.png", "ranks": 3, "desc": ["Increases the critical strike chance of Devastate by 5%. In addition, when your Devastate or Revenge deal damage, they have a 10% chance of refreshing the cooldown of your Shield Slam and reducing its cost by 100% for 5 sec.", "Increases the critical strike chance of Devastate by 10%. In addition, when your Devastate or Revenge deal damage, they have a 20% chance of refreshing the cooldown of your Shield Slam and reducing its cost by 100% for 5 sec.", "Increases the critical strike chance of Devastate by 15%. In addition, when your Devastate or Revenge deal damage, they have a 30% chance of refreshing the cooldown of your Shield Slam and reducing its cost by 100% for 5 sec."], "reqRow": 3, "reqCol": 2, "reqRank":1}
      , {
	  "row": 6, "col": 1, "name": "Shockwave", "img": "./icon/Ability_Warrior_Shockwave.png", "ranks": 1, "spell":{
	  "name": "Shockwave", "desc": "Sends a wave of force in front of you, causing [75/100*AP] damage (based on attack power) and stunning all enemy targets within 10 yards in a frontal cone for 4 sec.", "cast": "Instant", "cost": "15 Rage", "cooldown": "20 Sec", "icon":"./icon/Ability_Warrior_Shockwave.png"}
      , "desc":["Sends a wave of force in front of you, causing [75/100*AP] damage (based on attack power) and stunning all enemy targets within 10 yards in a frontal cone for 4 sec."]}
      , {
      "row": 2, "col": 2, "name": "Bastion of Defense", "img": "./icon/Ability_Defend.png", "ranks": 2, "desc":["Reduces the chance you'll be critically hit by melee attacks by 3% while in Defensive Stance. In addition, when you block, dodge or parry an attack you have a 10% chance to become Enraged, increasing physical damage done by 5% for 12 sec.", "Reduces the chance you'll be critically hit by melee attacks by 6% while in Defensive Stance. In addition, when you block, dodge or parry an attack you have a 20% chance to become Enraged, increasing physical damage done by 10% for 12 sec."]}
      , {
      "row": 1, "col": 2, "name": "Hold the Line", "img": "./icon/Achievement_BG_DefendXtowers_AV.png", "ranks": 2, "desc":["Improves your critical strike and critical block chance by 10% for 5 sec following a successful parry.", "Improves your critical strike and critical block chance by 10% for 10 sec following a successful parry."]}
      , {
      "row": 3, "col": 3, "name": "Impending Victory", "img": "./icon/Ability_Warrior_Devastate.png", "ranks": 2, "desc": ["Using Devastate on a target with 20% or less health has a 25% chance to allow the use of Victory Rush but that Victory Rush only heals for 5% of your health.", "Using Devastate on a target with 20% or less health has a 50% chance to allow the use of Victory Rush but that Victory Rush only heals for 5% of your health."], "reqRow": 3, "reqCol": 2, "reqRank":1}
     ]}
]}

