{
  "name": "Mage", "tabs":[ {
      "name": "Arcane", "background": "./img/MageArcane.png", "desc": "Manipulates arcane energies, playing with the very fabric of time and space.", "icon": "./icon/Spell_Holy_MagicalSentry.png", "type": 8, "mastery":{
      "name": "Mana Adept", "desc":"Increases all spell damage done by up to 12%, based on the amount of mana the Mage has unspent. Each point of Mastery increases damage done by up to an additional 1.5%."}
      , "primaries":[ {
      "name": "Arcane Barrage", "desc": "Launches bolts of arcane energy at the enemy target, causing 844 to 1030 Arcane damage.", "cast": "Instant", "cost": "11% of base mana", "cooldown": "4 sec", "range": "40 yd range", "icon":"./icon/Ability_Mage_ArcaneBarrage.png"}
      , {
      "name": "Arcane Specialization", "desc": "Increases the damage of your Arcane Spells by 25%.", "rank": "Passiv", "cast": "Instant", "icon":"./icon/spell_fire_twilightfire.png"}
      ], "talents":[ {
      "row": 3, "col": 0, "name": "Improved Polymorph", "img": "./icon/Spell_Nature_Polymorph.png", "ranks": 2, "desc":["When a target you've polymorphed is damaged, that arget is stunned for 1.5 sec. This effect cannot occur more often than once every 10 sec.", "When a target you've polymorphed is damaged, that arget is stunned for 3 sec. This effect cannot occur more often than once every 10 sec."]}
      , {
      "row": 0, "col": 0, "name": "Arcane Concentration", "img": "./icon/Spell_Shadow_ManaBurn.png", "ranks": 3, "desc":["Gives you a 3% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%", "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%", "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%"]}
      , {
      "row": 0, "col": 1, "name": "Improved Counterspell", "img": "./icon/Spell_Frost_IceShock.png", "ranks": 2, "desc":["Your Counterspell also silences the target for 2 sec.", "Your Counterspell also silences the target for 4 sec."]}
      , {
      "row": 1, "col": 0, "name": "Torment the Weak", "img": "./icon/Spell_Arcane_FocusedPower.png", "ranks": 3, "desc":["Your Arcane damage spells deal 2% more damage to snared or slowed targets.", "Your Arcane damage spells deal 4% more damage to snared or slowed targets.", "Your Arcane damage spells deal 6% more damage to snared or slowed targets."]}
      , {
      "row": 1, "col": 3, "name": "Improved Blink", "img": "./icon/Spell_Arcane_Blink.png", "ranks": 2, "desc":["Increases your speed by 35% for 3 sec. after casting the Blink spell.", "Increases your speed by 70% for 3 sec. after casting the Blink spell."]}
      , {
      "row": 2, "col": 1, "name": "Presence of Mind", "img": "./icon/Spell_Nature_EnchantArmor.png", "ranks": 1, "desc":["When activated, your next Mage spell with a casting time less then 10 sec becomes an instant cast spell."]}
      , {
      "row": 2, "col": 3, "name": "Prismatic Cloak", "img": "./icon/Spell_Arcane_PrismaticCloak.png", "ranks": 3, "desc":["Reduces all damage taken by 2% and reduces the fade time of your Invisibility spell by 1 sec.", "Reduces all damage taken by 4% and reduces the fade time of your Invisibility spell by 2 sec.", "Reduces all damage taken by 6% and reduces the fade time of your Invisibility spell by 3 sec."]}
      , {
      "row": 4, "col": 0, "name": "Arcane Potency", "img": "./icon/Spell_Arcane_ArcanePotency.png", "ranks": 2, "desc":["Increases the critical strike chance of your next two damaging spells by 7% after gaining Clearcasting or Presence of Mind.", "Increases the critical strike chance of your next two damaging spells by 15% after gaining Clearcasting or Presence of Mind."]}
      , {
      "row": 6, "col": 1, "name": "Arcane Power", "img": "./icon/Spell_Nature_Lightning.png", "ranks": 1, "desc": ["When activated, you deal 20% more spell damage and damaging spells cost 10% more mana to cast. This Effect lasts 15 sec."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 2, "name": "Incanter's Absorption", "img": "./icon/Ability_Mage_IncantersAbsorbtion.png", "ranks": 2, "desc":["When your Mana Shield or Mage Ward absorbs damage your spell damage is increased by 10% of the amount absorbed for 10 sec. In addition, when your Mana Shield destroyed, all enemies within 6 yards are knocked back 12 yards.", "When your Mana Shield or Mage Ward absorbs damage your spell damage is increased by 20% of the amount absorbed for 10 sec. In addition, when your Mana Shield destroyed, all enemies within 6 yards are knocked back 12 yards."]}
      , {
      "row": 2, "col": 0, "name": "Arcane Flows", "img": "./icon/Ability_Mage_PotentSpirit.png", "ranks": 2, "desc": ["Reduces the Cooldown of your Presence of Mind, Arcane Power and Invisibility spells by 12% and the cooldown of your Evocation spell by 1 min.", "Reduces the Cooldown of your Presence of Mind, Arcane Power and Invisibility spells by 25% and the cooldown of your Evocation spell by 2 min."], "reqRow": 2, "reqCol": 1, "reqRank":1}
      , {
      "row": 5, "col": 2, "name": "Improved Mana Gem", "img": "./icon/INV_Misc_Gem_Emerald_01.png", "ranks": 2, "desc":["Mana gained from your Mana Gem also increases your spell power by 1% of you maximum mana for 15 sec.", "Mana gained from your Mana Gem also increases your spell power by 2% of you maximum mana for 15 sec."]}
      , {
          "row": 4, "col": 1, "name": "Slow", "img": "./icon/Spell_Nature_Slow.png", "ranks": 1, "spell":{
          "name": "Slow", "desc": "Reduces target's movement speed by 60%, increases the time between ranged attacks by 60% and increases casting time by 30%. Lasts 15 sec. Slow can only affect one target at the time.", "cast": "Instant", "cost": "12% of base mana", "range": "35 yd range", "icon":"./icon/Spell_Nature_Slow.png"}
      , "desc":["Reduces target's movement speed by 60%, increases the time between ranged attacks by 60% and increases casting time by 30%. Lasts 15 sec. Slow can only affect one target at the time."]}
      , {
      "row": 2, "col": 2, "name": "Missile Barrage", "img": "./icon/Ability_Mage_MissileBarrage.png", "ranks": 2, "desc": ["Your Arcane Missiles spell will fire its missiles every 0.6 sec.", "Your Arcane Missiles spell will fire its missiles every 0.5 sec."], "reqRow": 1, "reqCol": 2, "reqRank":2}
      , {
      "row": 0, "col": 2, "name": "Netherwind Presence", "img": "./icon/Ability_Mage_NetherWindPresence.png", "ranks": 3, "desc":["Increases your spell haste by 1%", "Increases your spell haste by 2%", "Increases your spell haste by 3%"]}
      , {
          "row": 5, "col": 0, "name": "Focus Magic", "img": "./icon/Spell_Arcane_StudentOfMagic.png", "ranks": 1, "spell":{
          "name": "Focus Magic", "desc": "Increases the target's chance ti critcally hit with spells by 3% for 30 min. When the target critically hits your chance to critically hit with spells is increased by 3% for 10 sec. Cannot be cast on self. Limit 1 Target.", "cast": "Instant", "cost": "6% of base mana", "range": "30 yd range", "icon":"./icon/Spell_Arcane_StudentOfMagic.png"}
      , "desc":["Increases the target's chance ti critcally hit with spells by 3% for 30 min. When the target critically hits your chance to critically hit with spells is increased by 3% for 10 sec. Cannot be cast on self. Limit 1 Target."]}
      , {
      "row": 3, "col": 1, "name": "Arcane Tactics", "img": "./icon/spell_arcane_arcanetactics.png", "ranks": 1, "desc": ["Increases the damage of all party and raid members within 100 yards by 3%."], "reqRow": 2, "reqCol": 1, "reqRank":1}
      , {
      "row": 1, "col": 2, "name": "Improved Arcane Missiles", "img": "./icon/Spell_Nature_StarFall.png", "ranks": 2, "desc":["Increases the number of missiles fire by your Arcane Missiles spell by 1", "Increases the number of missiles fire by your Arcane Missiles spell by 2"]}
      , {
      "row": 1, "col": 1, "name": "Invocation", "img": "./icon/spell_arcane_invocation.png", "ranks": 2, "desc":["You gain a 5% damage bonus for 8 sec. after successfully interrupting a spell.", "You gain a 10% damage bonus for 8 sec. after successfully interrupting a spell."]}
      , {
      "row": 4, "col": 2, "name": "Nether Vortex", "img": "./icon/Spell_Arcane_Blast.png", "ranks": 2, "desc": ["Gives your Arcane Blast spell a 50% chance to apply the Slow spell to any target it damages if no target is currently affected by Slow.", "Gives your Arcane Blast spell a 100% chance to apply the Slow spell to any target it damages if no target is currently affected by Slow."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 3, "name": "UNKNOWN", "img": "./icon/Inv_misc_questionmark.png", "ranks": 2, "desc":["", ""]}
      , {
      "row": 3, "col": 3, "name": "Improved Arcane Explosion", "img": "./icon/Spell_Nature_WispSplode.png", "ranks": 2, "desc":["Reduces the global cooldown of your Arcane Explosion spell by 0.3 sec. Reduces the threat generated by 40%, and reduces the mana cost by 25%.", "Reduces the global cooldown of your Arcane Explosion spell by 0.5 sec. Reduces the threat generated by 80%, and reduces the mana cost by 50%."]}
     ]}
     , {
      "name": "Fire", "background": "./img/MageFire.png", "desc": "Ignites enemies with balls of fire and the breath of dragons.", "icon": "./icon/Spell_Fire_FireBolt02.png", "type": 8, "mastery":{
      "name": "Flashburn", "desc":"Increases the damage done by all your periodic fire damage effects by 22%. Each point of Mastery increases periodic damage done by an additional 2.8%."}
      , "primaries":[ {
      "name": "Pyroblast", "desc": "Hurls an immense fiery boulder that causes 1184 bis 1725 fire damage and an additional 804 fire damage over 12 sec.", "cast": "3.5 sec", "cost": "17% of base mana", "range": "40 yd range", "icon":"./icon/Spell_Fire_Fireball02.png"}
      , {
      "name": "Fire Specialization", "desc": "Increases the damage of your Fire spells by 25%.", "rank": "Passiv", "cast": "Instant", "icon":"./icon/Spell_Fire_Fire.png"}
      ], "talents":[ {
      "row": 0, "col": 2, "name": "Improved Fire Blast", "img": "./icon/Spell_Fire_Fireball.png", "ranks": 2, "desc":["Increases the critical strike Chance of your Fire Blast spell by 4% and increases its range by 5 yards.", "Increases the critical strike Chance of your Fire Blast spell by 8% and increases its range by 10 yards."]}
      , {
      "row": 1, "col": 0, "name": "Ignite", "img": "./icon/Spell_Fire_Incinerate.png", "ranks": 3, "desc":["Your critical strikes from non-periodic Fire damage spells cause the target to burn for an additional 13% of your soekk's damage over 4 sec.", "Your critical strikes from non-periodic Fire damage spells cause the target to burn for an additional 26% of your soekk's damage over 4 sec.", "Your critical strikes from non-periodic Fire damage spells cause the target to burn for an additional 40% of your soekk's damage over 4 sec."]}
      , {
      "row": 0, "col": 1, "name": "Burning Soul", "img": "./icon/spell_burningsoul.png", "ranks": 3, "desc":["Reduces the casting time lost from taking damaging attacks by 23%.", "Reduces the casting time lost from taking damaging attacks by 46%." , "Reduces the casting time lost from taking damaging attacks by 70%."]}
      , {
      "row": 1, "col": 3, "name": "Impact", "img": "./icon/Spell_Fire_MeteorStorm.png", "ranks": 2, "desc":["Gives your damaging spells a 5% chance to reset the cooldown on Fire Blast and to cause the next Fire Blast you cast to stun the target for 2 sec and spread any Fire damage over time effects to nerby enemy targets within 12 yards.", "Gives your damaging spells a 10% chance to reset the cooldown on Fire Blast and to cause the next Fire Blast you cast to stun the target for 2 sec and spread any Fire damage over time effects to nerby enemy targets within 12 yards."]}
      , {
      "row": 5, "col": 2, "name": "Critical Mass", "img": "./icon/Spell_Nature_WispHeal.png", "ranks": 3, "desc":["Your Living Bomb and Flame Orb spells deal 5% more damage, and your Pyroblast and Scorch spells have a 33% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance aginst that target by 5% and lasts 30 sec.", "Your Living Bomb and Flame Orb spells deal 10% more damage, and your Pyroblast and Scorch spells have a 66% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance aginst that target by 5% and lasts 30 sec.", "Your Living Bomb and Flame Orb spells deal 15% more damage, and your Pyroblast and Scorch spells have a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance aginst that target by 5% and lasts 30 sec."]}
      , {
      "row": 3, "col": 0, "name": "Molten Shields", "img": "./icon/Spell_Fire_FireArmor.png", "ranks": 1, "desc":["Recuses the global cooldown of your Mage Ward spell by 1 sec and your Blazing Speed also removes any movement slowing effects when triggered and is also triggered any time Mage Ward dissipates from absorbing damage."]}
      , {
      "row": 0, "col": 0, "name": "Master of Elements", "img": "./icon/Spell_Fire_MasterOfElements.png", "ranks": 2, "desc":["Your spell criticals will refund 15% of their base mana cost.", "Your spell criticals will refund 30% of their base mana cost."]}
      , {
      "row": 2, "col": 3, "name": "Improved Scorch", "img": "./icon/Spell_Fire_SoulBurn.png", "ranks": 2, "desc":["Reduces the mana cost of your Scorch spell by 50%.", "Reduces the mana cost of your Scorch spell by 100%."]}
      , {
          "row": 2, "col": 1, "name": "Blast Wave", "img": "./icon/Spell_Holy_Excorcism_02.png", "ranks": 1, "spell":{
          "name": "Blast Wave", "desc": "A wave of flame radiates outward from the target location, damaging all enemies caught within the blast for 956 Fire damage and are sloweed by 70% for 3 sec.", "cast": "Instant", "cost": "7% of base mana", "cooldown": "15 sec", "range": "40 yd range", "icon":"./icon/Spell_Holy_Excorcism_02.png"}
      , "desc":["A wave of flame radiates outward from the target location, damaging all enemies caught within the blast for 956 Fire damage and are sloweed by 70% for 3 sec."]}
      , {
      "row": 1, "col": 2, "name": "Blazing Speed", "img": "./icon/Spell_Fire_BurningSpeed.png", "ranks": 2, "desc":["Gives you a 5% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all effects that prevent movement. This effect lasts 8 sec.", "Gives you a 10% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all effects that prevent movement. This effect lasts 8 sec."]}
      , {
      "row": 5, "col": 0, "name": "Pyromaniac", "img": "./icon/Spell_Fire_Burnout.png", "ranks": 2, "desc":["Increases spell haste by 5% if 3 or more targets are taking Fire damage over time from your spells.", "Increases spell haste by 10% if 3 or more targets are taking Fire damage over time from your spells."]}
      , {
          "row": 3, "col": 1, "name": "Combustion", "img": "./icon/Spell_Fire_SealOfFire.png", "ranks": 1, "spell":{
          "name": "Combustion", "desc": "Combines your damaging priodic Fire effects on an enemy target but does not consume them, instantly dealing 1131 Fire damage and creating a new periodic effect that lasts 10 sec and deals damage per time equal to the sum of the combined effects.", "cast": "Instant", "cooldown": "2 Min", "range": "40 yd range", "icon":"./icon/Spell_Fire_SealOfFire.png"}
      , "desc":["Combines your damaging priodic Fire effects on an enemy target but does not consume them, instantly dealing 1131 Fire damage and creating a new periodic effect that lasts 10 sec and deals damage per time equal to the sum of the combined effects."]}
      , {
      "row": 4, "col": 2, "name": "Molten Fury", "img": "./icon/Spell_Fire_MoltenBlood.png", "ranks": 3, "desc":["Increases damage of all spells against targets with less than 35% health by 4%", "Increases damage of all spells against targets with less than 35% health by 8%", "Increases damage of all spells against targets with less than 35% health by 12%"]}
      , {
          "row": 4, "col": 1, "name": "Dragon's Breath", "img": "./icon/INV_Misc_Head_Dragon_01.png", "ranks": 1, "spell":{
          "name": "Dragon's Breath", "desc": "Targets in a cone in front of the caster take 1331 Fire damage and are disoriented for 5 sec. Any direct damaging attack will revive targets.", "cast": "Instant", "cost": "7% of base mana", "cooldown": "20 sec", "icon":"./icon/INV_Misc_Head_Dragon_01.png"}
      , "desc":["Targets in a cone in front of the caster take 1331 Fire damage and are disoriented for 5 sec. Any direct damaging attack will revive targets."]}
      , {
      "row": 2, "col": 2, "name": "Hot Streak", "img": "./icon/Ability_Mage_HotStreak.png", "ranks": 1, "desc":["Your spells no longer trigger Arcane Missiles. Instead, your critical strike with Fireball, Frostfire Bolt, Scorch, Pyroblast, or Fire Blast have a chance to cause your next Pyroblast spell cast within 15 sec to be instant cast and cost no mana."]}
      , {
          "row": 6, "col": 1, "name": "Living Bomb", "img": "./icon/Ability_Mage_LivingBomb.png", "ranks": 1, "spell":{
          "name": "Living Bomb", "desc": "The target becomes a Living Bomb, taking 1184 Fire damage over 12 sec. After 12 sec, the target explodes dealing 593 Fire damage to up to 3 enemies within 10 yards. Liimit 3 targets.", "cast": "Instant", "cost": "17% of base mana", "range": "40 yd range", "icon":"./icon/Ability_Mage_LivingBomb.png"}
      , "desc": ["The target becomes a Living Bomb, taking 1184 Fire damage over 12 sec. After 12 sec, the target explodes dealing 593 Fire damage to up to 3 enemies within 10 yards. Liimit 3 targets."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 4, "col": 0, "name": "Improved Flamestrike", "img": "./icon/Spell_Fire_SelfDestruct.png", "ranks": 2, "desc":["Reduces the casting time of your Flamestrike spell by 50% and gives you a 50% chance that your Blast Wave spell will also automatically Flamestrike the same location if two or more targets are affected by the Blast Wave.", "Reduces the casting time of your Flamestrike spell by 100% and gives you a 100% chance that your Blast Wave spell will also automatically Flamestrike the same location if two or more targets are affected by the Blast Wave."]}
      , {
      "row": 3, "col": 3, "name": "Firestarter", "img": "./icon/Ability_Mage_FireStarter.png", "ranks": 1, "desc":["Allows you to cast the SCorch spell while moving."]}
      , {
      "row": 2, "col": 0, "name": "Cauterize", "img": "./icon/spell_fire_rune.png", "ranks": 2, "desc":["You have a 50% chance that an attack wich would otherwise kill you will instead bring you to 40% of your maximum health. However, you will burn for 12% of your maximum health every 1.50 sec for the next 6 sec. This effect cannot occur more than once per minute.", "You have a 100% chance that an attack wich would otherwise kill you will instead bring you to 40% of your maximum health. However, you will burn for 12% of your maximum health every 1.50 sec for the next 6 sec. This effect cannot occur more than once per minute."]}
      , {
      "row": 1, "col": 1, "name": "Fire Power", "img": "./icon/Spell_Fire_Immolation.png", "ranks": 3, "desc":["Increases the damage of your Fire spells by 1% and gives your Flame Orb a 33% chance to explode for 1274 damage at the end of its duration.", "Increases the damage of your Fire spells by 2% and gives your Flame Orb a 66% chance to explode for 1274 damage at the end of its duration.", "Increases the damage of your Fire spells by 3% and gives your Flame Orb a 100% chance to explode for 1274 damage at the end of its duration."]}
      , {
      "row": 3, "col": 2, "name": "Improved Hot Streak", "img": "./icon/Ability_Mage_HotStreak.png", "ranks": 2, "desc": ["Any time you score 2 non-periodic critical strikes in a row with your Fireball, Frostfire Bolt, Scorch, Pyroblast, or Fire Blast spells, you have a 50% chance to trigger your Hot Streak effect.", "Any time you score 2 non-periodic critical strikes in a row with your Fireball, Frostfire Bolt, Scorch, Pyroblast, or Fire Blast spells, you have a 100% chance to trigger your Hot Streak effect."], "reqRow": 2, "reqCol": 2, "reqRank":1}
     ]}
     , {
      "name": "Frost", "background": "./img/MageFrost.png", "desc": "Freezes enemies in their tracks and shatters them with Frost magic.", "icon": "./icon/Spell_Frost_FrostBolt02.png", "type": 8, "mastery":{
      "name": "Frostburn", "desc":"All your spells deal 5% increased damage against Frozen targets. Each point of Mastery increases damage by an additional 2.5%."}
      , "primaries":[ {
      "name": "Summon Water Elemental", "desc": "Summon a Water Elemental to fight for the caster.", "cast": "Instant", "cost": "16% of base mana", "cooldown": "3 Min", "icon":"./icon/Spell_Frost_SummonWaterElemental_2.png"}
      , {
      "name": "Frost Specialization", "desc": "Increases the damage of your Frost spells by 25% and of your Frostbolt spell by an additional 15%.", "rank": "Passiv", "cast": "Instant", "icon":"./icon/Spell_Fire_BlueFire.png"}
      ], "talents":[ {
      "row": 1, "col": 0, "name": "Ice Floes", "img": "./icon/Spell_Frost_IceFloes.png", "ranks": 3, "desc":["Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block, Cold Snap, Ice Barrier, and Icy Veins spell by 7%.", "Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block, Cold Snap, Ice Barrier, and Icy Veins spell by 14%.", "Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block, Cold Snap, Ice Barrier, and Icy Veins spell by 20%."]}
      , {
      "row": 1, "col": 3, "name": "Permafrost", "img": "./icon/Spell_Frost_Wisp.png", "ranks": 3, "desc":["Your Chill effects reduce the target's speed by an additional 4%, and the target's healing received. In addition, whenever you deal spell damage, your Water Elemental is healed for 5% of the amount dealt.", "Your Chill effects reduce the target's speed by an additional 7%, and the target's healing received. In addition, whenever you deal spell damage, your Water Elemental is healed for 10% of the amount dealt.", "Your Chill effects reduce the target's speed by an additional 10%, and the target's healing received. In addition, whenever you deal spell damage, your Water Elemental is healed for 15% of the amount dealt."]}
      , {
          "row": 2, "col": 1, "name": "Icy Veins", "img": "./icon/Spell_Frost_ColdHearted.png", "ranks": 1, "spell":{
          "name": "Icy Veins", "desc": "Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec.", "cast": "Instant", "cost": "3% of base mana", "cooldown": "3 Min", "icon":"./icon/Spell_Frost_ColdHearted.png"}
      , "desc":["Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec."]}
      , {
      "row": 2, "col": 0, "name": "Ice Shards", "img": "./icon/spell_frost_ice shards.png", "ranks": 2, "desc":["Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 25%. Lasts 2 sec. In Addition, increases the range of your Ice Lance spell by 2 yards.", "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 40%. Lasts 2 sec. In Addition, increases the range of your Ice Lance spell by 5 yards."]}
      , {
      "row": 0, "col": 0, "name": "Early Frost", "img": "./icon/Spell_Frost_ChillingBolt.png", "ranks": 2, "desc":["Reduces the cast time of your Frostbolt spell by 0.3 secs. This effect becomes inactive for 15 sec after use.", "Reduces the cast time of your Frostbolt spell by 0.6 secs. This effect becomes inactive for 15 sec after use."]}
      , {
      "row": 3, "col": 1, "name": "Cold Snap", "img": "./icon/Spell_Frost_WizardMark.png", "ranks": 1, "desc":["When activated, this spell finishes the cooldown on all Frost spells you recently cast."]}
      , {
      "row": 2, "col": 2, "name": "Fingers of Frost", "img": "./icon/Ability_Mage_WintersGrasp.png", "ranks": 3, "desc":["Gives your offensive Chill effects a 7% chance to grant you the Fingers of Frost effect, wich causes your next Ice Lance or Deep Freeze spell to act as if your target were frozen and increases Ice lance damage by 25%. Fingers of Frost can accumulate up to 2 charges and lasts 15 sec.", "Gives your offensive Chill effects a 14% chance to grant you the Fingers of Frost effect, wich causes your next Ice Lance or Deep Freeze spell to act as if your target were frozen and increases Ice lance damage by 25%. Fingers of Frost can accumulate up to 2 charges and lasts 15 sec.", "Gives your offensive Chill effects a 20% chance to grant you the Fingers of Frost effect, wich causes your next Ice Lance or Deep Freeze spell to act as if your target were frozen and increases Ice lance damage by 25%. Fingers of Frost can accumulate up to 2 charges and lasts 15 sec."]}
      , {
      "row": 4, "col": 0, "name": "Shattered Barrier", "img": "./icon/Ability_Mage_ColdAsIce.png", "ranks": 2, "desc": ["Gives your Ice Barrier spell a 100% chance to freeze all enemies within 10 yds for 2 sec when it is destroyed.", "Gives your Ice Barrier spell a 100% chance to freeze all enemies within 10 yds for 4 sec when it is destroyed."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
          "row": 4, "col": 1, "name": "Ice Barrier", "img": "./icon/Spell_Ice_Lament.png", "ranks": 1, "spell":{
          "name": "Ice Barrier", "desc": "Instantly shields your, absorbing 8550 damage. Lasts 1 min. While the shield holds, spellcasting will not be delayed by damage.", "cast": "Instant", "cost": "21% of base mana", "cooldown": "30 sec", "icon":"./icon/Spell_Ice_Lament.png"}
      , "desc":["Instantly shields your, absorbing 8550 damage. Lasts 1 min. While the shield holds, spellcasting will not be delayed by damage."]}
      , {
      "row": 3, "col": 2, "name": "Brain Freeze", "img": "./icon/Ability_Mage_BrainFreeze.png", "ranks": 3, "desc":["Your spells no longer trigger Arcane Missiles. Instead, your Frost damage spells with chilling effects have a 5% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana. When Frostfire Bolt is an instant, it can benefit from Fingers of Frost. Brain Freeze cannot be triggered by Frostfire Bolt.", "Your spells no longer trigger Arcane Missiles. Instead, your Frost damage spells with chilling effects have a 10% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana. When Frostfire Bolt is an instant, it can benefit from Fingers of Frost. Brain Freeze cannot be triggered by Frostfire Bolt.", "Your spells no longer trigger Arcane Missiles. Instead, your Frost damage spells with chilling effects have a 15% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana. When Frostfire Bolt is an instant, it can benefit from Fingers of Frost. Brain Freeze cannot be triggered by Frostfire Bolt."]}
      , {
      "row": 3, "col": 0, "name": "Enduring Winter", "img": "./icon/Spell_Frost_ArcticWinds.png", "ranks": 3, "desc":["Reduces the mana cost of all spells by 3%. In addition, your Frostbolt spell has a 33% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana over 10 sec.", "Reduces the mana cost of all spells by 6%. In addition, your Frostbolt spell has a 66% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana over 10 sec.", "Reduces the mana cost of all spells by 10%. In addition, your Frostbolt spell has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana over 10 sec."]}
      , {
          "row": 6, "col": 1, "name": "Deep Freeze", "img": "./icon/Ability_Mage_DeepFreeze.png", "ranks": 1, "spell":{
          "name": "Deep Freeze", "desc": "Stuns the target for 5 sec. Only usable on Frozen targets. Deals 2297 to 2590 damage to targets that are permanently immune to stuns.", "cast": "Instant", "cost": "9% of base mana", "cooldown": "30 sec", "range": "35 yd range", "icon":"./icon/Ability_Mage_DeepFreeze.png"}
      , "desc": ["Stuns the target for 5 sec. Only usable on Frozen targets. Deals 2297 to 2590 damage to targets that are permanently immune to stuns."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 1, "col": 2, "name": "Piercing Chill", "img": "./icon/spell_frost_piercing chill.png", "ranks": 2, "desc":["Your Frostbolt criticals apply the chill effect to 1 additional nerby targets.", "Your Frostbolt criticals apply the chill effect to 2 additional nerby targets."]}
      , {
      "row": 0, "col": 1, "name": "Piercing Ice", "img": "./icon/Spell_Frost_Frostbolt.png", "ranks": 3, "desc":["Increases the critical strike chance of your spells by 1%.", "Increases the critical strike chance of your spells by 2%.", "Increases the critical strike chance of your spells by 3%."]}
      , {
      "row": 0, "col": 2, "name": "Shatter", "img": "./icon/Spell_Frost_FrostShock.png", "ranks": 2, "desc":["Multiplies the critical strike chance of all your spells against frozen targets by 2, and increases the damage done by Frostbolt against frozen targets by 20%.", "Multiplies the critical strike chance of all your spells against frozen targets by 3, and increases the damage done by Frostbolt against frozen targets by 20%."]}
      , {
      "row": 5, "col": 2, "name": "Frostfire Orb", "img": "./icon/spell_firefrost orb.png", "ranks": 2, "desc":["Converts your Flame Orb nto a Frostfire Orb, causing your Frostfire Orb to benefit from your Frost Specialization. In addition, reduces the speed of targets slowed by your Frostfire Bolt's chill effect by an additional 10%.", "Your Frostfire Orb gains a chill effect, slowing targets damage by the Frostfire Orb by 40% for 2 sec. In addition, reduces the speed of targets slowed by your Frostfire Bolt's chill effect by an additional 20%."]}
      , {
      "row": 1, "col": 1, "name": "Improved Cone of Cold", "img": "./icon/Spell_Frost_Glacier.png", "ranks": 2, "desc":["Your Cone of Cold also freezes targets for 2 sec.", "Your Cone of Cold also freezes targets for 4 sec."]}
      , {
      "row": 2, "col": 3, "name": "Improved Freeze", "img": "./icon/Spell_Frost_SummonWaterElemental.png", "ranks": 3, "desc": ["Gives your Water Elemental's Freeze spell a 33% chance to grant 2 charges of Fingers of Frost when it strikes enemy targets.", "Gives your Water Elemental's Freeze spell a 66% chance to grant 2 charges of Fingers of Frost when it strikes enemy targets.", "Gives your Water Elemental's Freeze spell a 100% chance to grant 2 charges of Fingers of Frost when it strikes enemy targets."], "reqRow": 2, "reqCol": 2, "reqRank":3}
      , {
      "row": 4, "col": 2, "name": "Reactive Barrier", "img": "./icon/Spell_Frost_ManaRecharge.png", "ranks": 2, "desc": ["Gives the caster a 50% chance for the Ice Barrier spell to automatically cast with no mana cost upon takin damage that lowers the caster's life below 0%. This effect obeys Ice Barrier's cooldown, and will trigger the cooldown when activated.", "Gives the caster a 100% chance for the Ice Barrier spell to automatically cast with no mana cost upon takin damage that lowers the caster's life below 0%. This effect obeys Ice Barrier's cooldown, and will trigger the cooldown when activated."], "reqRow": 4, "reqCol": 1, "reqRank":1}
     ]}
]}
