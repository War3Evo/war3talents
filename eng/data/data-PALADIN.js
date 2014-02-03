{
  "name": "Paladin", "tabs":[ {
      "name": "Holy", "background": "../img/PALADINHOLY.png", "desc": "Invokes the power of the light to protect and to heal.", "icon": "../icon/Spell_Holy_HolyBolt.png", "type": 4, "mastery":{
      "name": "Illuminated Healing", "desc":"Your direct healing spells also place an absorb shield on your target for 12% of the amount healed lasting 15 sec. Each point of Mastery increases the absorb amount by an additional 1.50%."}
      , "primaries":[ {
      "name": "Holy Shock", "desc": "Blasts the target with Holy energy, causing 1499 Holy damage to an enemy, or 2763 healing to an ally, and grants a charge of Holy Power", "cast": "Instant", "cost": "7% Base mana", "cooldown": "6 Sec", "range": "20 yd range", "range_f": "40 yd range", "icon":"../icon/Spell_Holy_SearingLight.png"}
      , {
      "name": "Walk in the light", "desc": "Increases the effectiveness of your healing spells by 10%, the effectiveness of your Word of Glory by 30%, and removes the cooldown on Word of Glory.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Spell_Holy_ChampionsGrace.png"}
      , {
      "name": "Meditation", "desc": "Allows 50% of your mana regeneration from spirit to continue while in combat.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Spell_Nature_Sleep.png"}
      ], "talents":[ {
      "row": 1, "col": 1, "name": "Last Word", "img": "../icon/Spell_Holy_HolyGuidance.png", "ranks": 2, "desc":["Gives your Word of Glory a 30% increased critical chance when used on targets with 35% or less health.", "Gives your Word of Glory a 60% increased critical chance when used on targets with 35% or less health."]}
      , {
      "row": 0, "col": 0, "name": "Arbiter of the Light", "img": "../icon/Spell_Holy_HealingAura.png", "ranks": 2, "desc":["Increases the critical effect chance of your Judgement and Templar's Verdict by 6%.", "Increases the critical effect chance of your Judgement and Templar's Verdict by 12%."]}
      , {
      "row": 2, "col": 0, "name": "Denounce", "img": "../icon/Spell_Holy_Excorcism_02.png", "ranks": 2, "desc":["Reduces the mana cost of Exorcism by 38%. In addition, you have a 50% chance to cause the Denounce effect on the targets of your Exorcism. The Denounce effect prevents targets from causing critical effects for the next 6 sec.", "Reduces the mana cost of Exorcism by 75%. In addition, you have a 100% chance to cause the Denounce effect on the targets of your Exorcism. The Denounce effect prevents targets from causing critical effects for the next 6 sec."]}
      , {
      "row": 3, "col": 0, "name": "Enlightened Judgements", "img": "../icon/Ability_Paladin_EnlightenedJudgements.png", "ranks": 2, "desc":[ "Grants hit rating equal to 50% of any Spirit gained from items or effects, and increases the range of your Judgement by 5 yards. In addition, your Judgement instantly heals you for 1343.", "Grants hit rating equal to 100% of any Spirit gained from items or effects, and increases the range of your Judgement by 10 yards. In addition, your Judgement instantly heals you for 2686."]}
      , {
      "row": 4, "col": 2, "name": "Aura Mastery", "img": "../icon/Spell_Holy_AuraMastery.png", "ranks": 1, "desc":["Causes your Concentration Aura to make all affected targets immune to Silence and Interrupt effects and improve the effect of Devotion Aura, Resistance Aura, and Retribution Aura by 100%. Lasts 6 sec."]}
      , {
      "row": 5, "col": 2, "name": "Blessed Life", "img": "../icon/Spell_Holy_BlessedLife.png", "ranks": 2, "desc":["You have a 50% chance to gain a charge of Holy Power whenever you take direct damage. This effect cannot occur more than once every 8 seconds.", "You have a 100% chance to gain a charge of Holy Power whenever you take direct damage. This effect cannot occur more than once every 8 seconds."]}
      , {
      "row": 3, "col": 3, "name": "Sacred Cleansing", "img": "../icon/Ability_Paladin_SacredCleansing.png", "ranks": 1, "desc":["Your Cleanse spell now also dispels 1 Magic effect."]}
      , {
      "row": 0, "col": 2, "name": "Judgements of the Pure", "img": "../icon/Ability_Paladin_JudgementofthePure.png", "ranks": 3, "desc":["Your Judgement increases your casting and melee haste by 3% for 1 min and your mana regeneration from Spirit while in combat by 10%.", "Your Judgement increases your casting and melee haste by 6% for 1 min and your mana regeneration from Spirit while in combat by 20%.", "Your Judgement increases your casting and melee haste by 9% for 1 min and your mana regeneration from Spirit while in combat by 30%."]}
      , {
      "row": 2, "col": 2, "name": "Infusion of Light", "img": "../icon/Ability_Paladin_InfusionofLight.png", "ranks": 2, "desc":["Increases the critical effect chance of your Holy Shock by 5%. In addition, your Holy Shock critical effects reduce the cast time of your next Flash of Light, Holy Light, Divine Light or Holy Radiance by 0.75 sec.", "Increases the critical effect chance of your Holy Shock by 10%. In addition, your Holy Shock critical effects reduce the cast time of your next Flash of Light, Holy Light, Divine Light or Holy Radiance by 1.2 sec."]}
      , {
	  "row": 3, "col": 1, "name": "Beacon of Light", "img": "../icon/Ability_Paladin_BeaconofLight.png", "ranks": 1, "spell":{
	  "name": "Beacon of Light", "desc": "The target becomes a Beacon of Light to all targets within a 60 yard radius. Your Word of Glory, Holy Shock, Flash of Light, Divine Light and Light of Dawn will also heal the Beacon for 50% of the amount healed. Holy Light will heal for 50% of the amount. Only one target can be the Beacon of Light at a time. Lasts 5 min.", "cast": "Instant", "cost": "6% Base mana", "range": "60 yd range", "icon":"../icon/Ability_Paladin_BeaconofLight.png"}
      , "desc":["The target becomes a Beacon of Light to all targets within a 60 yard radius. Your Word of Glory, Holy Shock, Flash of Light, Divine Light and Light of Dawn will also heal the Beacon for 50% of the amount healed. Holy Light will heal for 50% of the amount. Only one target can be the Beacon of Light at a time. Lasts 5 min."]}
      , {
      "row": 5, "col": 1, "name": "Tower of Radiance", "img": "../icon/Achievement_BG_winSOA.png", "ranks": 3, "desc": ["Healing the target of your Beacon of Light with Flash of Light or Divine Light has a 33% chance to generate a charge of Holy Power. In addition, casting Holy Radiance will always generate one charge of Holy Power.", "Healing the target of your Beacon of Light with Flash of Light or Divine Light has a 66% chance to generate a charge of Holy Power. In addition, casting Holy Radiance will always generate one charge of Holy Power.", "Healing the target of your Beacon of Light with Flash of Light or Divine Light has a 100% chance to generate a charge of Holy Power. In addition, casting Holy Radiance will always generate one charge of Holy Power."], "reqRow": 3, "reqCol": 1, "reqRank":1}
      , {
      "row": 2, "col": 1, "name": "Divine Favor", "img": "../icon/Spell_Holy_DivineIllumination.png", "ranks": 1, "desc":["Increases your spell casting haste by 20% and spell critical chance by 20% for 20 sec."]}
      , {
	  "row": 6, "col": 1, "name": "Light of Dawn", "img": "../icon/spell_paladin_lightofdawn.png", "ranks": 1, "spell":{
	  "name": "Light of Dawn", "desc": "Consumes all Holy Power to send a wave of healing energy before you, healing up to 544 of the most injured targets in your party or raid within a 30 yard frontal cone for 1 per charge of Holy Power.", "cast": "Instant", "cost": "1 Holy Power", "icon":"../icon/spell_paladin_lightofdawn.png"}
      , "desc":["Consumes all Holy Power to send a wave of healing energy before you, healing up to 544 of the most injured targets in your party or raid within a 30 yard frontal cone for 1 per charge of Holy Power."]}
      , {
      "row": 1, "col": 0, "name": "Clarity of Purpose", "img": "../icon/spell_paladin_clarityofpurpose.png", "ranks": 3, "desc":["Reduces the casting time of your Holy Light, Divine Light and Holy Radiance by 0.15 sec.", "Reduces the casting time of your Holy Light, Divine Light and Holy Radiance by 0.3 sec.", "Reduces the casting time of your Holy Light, Divine Light and Holy Radiance by 0.5 sec."]}
      , {
      "row": 3, "col": 2, "name": "Speed of Light", "img": "../icon/paladin_icon_speedoflight.png", "ranks": 3, "desc": ["Grants 1% spell haste. In addition, casting Divine Protection increases your movement speed by 20% for 4 sec.", "Grants 2% spell haste. In addition, casting Divine Protection increases your movement speed by 40% for 4 sec.", "Grants 3% spell haste. In addition, casting Divine Protection increases your movement speed by 60% for 4 sec."], "reqRow": 2, "reqCol": 2, "reqRank":2}
      , {
      "row": 2, "col": 3, "name": "Daybreak", "img": "../icon/INV_QirajIdol_Sun.png", "ranks": 2, "desc":["Your Flash of Light, Holy Light and Divine Light have a 10% chance to make your next Holy Shock not trigger a cooldown if used within 12 sec.", "Your Flash of Light, Holy Light and Divine Light have a 20% chance to make your next Holy Shock not trigger a cooldown if used within 12 sec."]}
      , {
      "row": 4, "col": 0, "name": "Conviction", "img": "../icon/ability_paladin_conviction.png", "ranks": 3, "desc":["Gives you a 1% bonus to damage and healing for 15 sec after causing a critical effect from a weapon swing, non-periodic spell, or ability. This effect stacks up to 3 times.", "Gives you a 2% bonus to damage and healing for 15 sec after causing a critical effect from a weapon swing, non-periodic spell, or ability. This effect stacks up to 3 times.", "Gives you a 3% bonus to damage and healing for 15 sec after causing a critical effect from a weapon swing, non-periodic spell, or ability. This effect stacks up to 3 times."]}
      , {
      "row": 1, "col": 2, "name": "Blazing Light", "img": "../icon/Spell_Holy_HolyBolt.png", "ranks": 2, "desc":["Increases the damage of your Holy Shock and Exorcism by 10%.", "Increases the damage of your Holy Shock and Exorcism by 20%."]}
      , {
      "row": 4, "col": 3, "name": "Paragon of Virtue", "img": "../icon/Spell_Holy_AvengineWrath.png", "ranks": 2, "desc":["Reduces the cooldown of Divine Protection by 15 sec, Hand of Sacrifice by 15 sec and Avenging Wrath by 30 sec.", "Reduces the cooldown of Divine Protection by 30 sec, Hand of Sacrifice by 30 sec and Avenging Wrath by 60 sec."]}
      , {
      "row": 0, "col": 1, "name": "Protector of the Innocent", "img": "../icon/ability_paladin_protectoroftheinnocent.png", "ranks": 3, "desc":["Casting a targeted heal on any target, except yourself, also heals you for 935.", "Casting a targeted heal on any target, except yourself, also heals you for 1871.", "Casting a targeted heal on any target, except yourself, also heals you for 2806."]}
     ]}
     ,
     {
      "name": "Protection", "background": "../img/PALADINPROTECTION.png", "desc": "Uses Holy magic to shield himself and defend allies from attackers.", "icon": "../icon/Ability_Paladin_ShieldoftheTemplar.png", "type": 2, "mastery":{
      "name": "Divine Bulwark", "desc":"Increases your chance to block melee attacks by 18%. Each point of Mastery increases block chance by an additional 2.25%."}
      , "primaries":[ {
      "name": "Avenger's Shield", "desc": "<span style=\"color:red;\">Requires Shields</span><br/>Hurls a holy shield to the enemy, dealing 3376 Holy damage, silencing and interrupting spellcasting for 3 sec, and then jumping to additional nearby enemies. Affects 3 total targets.", "cast": "Instant", "cost": "6% Base mana", "cooldown": "15 Sec", "range": "30 yd range", "icon":"../icon/Spell_Holy_AvengersShield.png"}
      , {
      "name": "Vengeance", "desc": "Each time you take damage, you gain 5% of the damage taken as attack power, up to a maximum of 10% of your health.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Ability_Paladin_ShieldofVengeance.png"}
      , {
      "name": "Touched by the Light", "desc": "Increases your total Stamina by 15%, increases your spell hit by 8%, and increases your spell power by an amount equal to 60% of your Strength.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Ability_Paladin_TouchedbyLight.png"}
      , {
      "name": "Judgements of the Wise", "desc": "Using your Judgement ability grants you 30% of your base mana over 10 sec.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Ability_Paladin_JudgementoftheWise.png"}
      ], "talents":[ {
      "row": 0, "col": 1, "name": "Seals of the Pure", "img": "../icon/INV_Mace_46.png", "ranks": 2, "desc":["Increases the damage done by your Seal of Righteousness, Seal of Truth, and Seal of Justice by 6%.", "Increases the damage done by your Seal of Righteousness, Seal of Truth, and Seal of Justice by 12%."]}
      , {
      "row": 1, "col": 1, "name": "Toughness", "img": "../icon/Spell_Holy_Devotion.png", "ranks": 3, "desc":["Increases your armor value from items by 3%.", "Increases your armor value from items by 6%.", "Increases your armor value from items by 10%."]}
      , {
	  "row": 4, "col": 3, "name": "Divine Guardian", "img": "../icon/spell_holy_powerwordbarrier.png", "ranks": 1, "spell":{
	  "name": "Divine Guardian", "desc": "All party or raid members within 30 yards, excluding the Paladin, take 20% reduced damage for 6 sec.", "cast": "Instant", "cooldown": "3 Min", "range": "100 yd range", "icon":"../icon/spell_holy_powerwordbarrier.png"}
      , "desc":["All party or raid members within 30 yards, excluding the Paladin, take 20% reduced damage for 6 sec."]}
      , {
      "row": 1, "col": 2, "name": "Improved Hammer of Justice", "img": "../icon/Spell_Holy_SealOfMight.png", "ranks": 2, "desc":["Decreases the cooldown of your Hammer of Justice spell by 10 sec.", "Decreases the cooldown of your Hammer of Justice spell by 20 sec."]}
      , {
      "row": 5, "col": 2, "name": "Shield of the Templar", "img": "../icon/Ability_Paladin_ShieldoftheTemplar.png", "ranks": 3, "desc":["Reduces the cooldown of Avenging Wrath by 20 sec and Guardian of Ancient Kings by 40 sec. In addition, your Divine Plea will generate 1 Holy Power.", "Reduces the cooldown of Avenging Wrath by 40 sec and Guardian of Ancient Kings by 80 sec. In addition, your Divine Plea will generate 2 Holy Power.", "Reduces the cooldown of Avenging Wrath by 60 sec and Guardian of Ancient Kings by 120 sec. In addition, your Divine Plea will generate 3 Holy Power."]}
      , {
      "row": 2, "col": 0, "name": "Hallowed Ground", "img": "../icon/Spell_Holy_InnerFire.png", "ranks": 2, "desc":["Increases the damage of your Consecration by 20% and decreases its mana cost by 40%.", "Increases the damage of your Consecration by 40% and decreases its mana cost by 80%."]}
      , {
      "row": 2, "col": 1, "name": "Sanctuary", "img": "../icon/Spell_Nature_LightningShield.png", "ranks": 3, "desc":["Reduces the chance you'll be critically hit by melee attacks by 2% and reduces all damage taken by 3%. In addition when you block or dodge a melee attack you gain 1% of maximum mana.", "Reduces the chance you'll be critically hit by melee attacks by 4% and reduces all damage taken by 7%. In addition when you block or dodge a melee attack you gain 2% of maximum mana.", "Reduces the chance you'll be critically hit by melee attacks by 6% and reduces all damage taken by 10%. In addition when you block or dodge a melee attack you gain 3% of maximum mana."]}
      , {
      "row": 6, "col": 1, "name": "Ardent Defender", "img": "../icon/Spell_Holy_ArdentDefender.png", "ranks": 1, "desc":["Reduce damage taken by 20% for 10 sec. While Ardent Defender is active, the next attack that would otherwise kill you will instead cause you to be healed for 15% of your maximum health."]}
      , {
	  "row": 4, "col": 1, "name": "Holy Shield", "img": "../icon/Spell_Holy_BlessingOfProtection.png", "ranks": 1, "spell":{
	  "name": "Holy Shield", "desc": "Increases the amount your shield blocks by an additional 20% for 10 sec.", "cast": "Instant", "cost": "3% Base mana", "cooldown": "30 Sec", "icon":"../icon/Spell_Holy_BlessingOfProtection.png"}
      , "desc": ["Increases the amount your shield blocks by an additional 20% for 10 sec."], "reqRow": 3, "reqCol": 1, "reqRank":1}
      , {
      "row": 5, "col": 1, "name": "Sacred Duty", "img": "../icon/Spell_Holy_DivineIntervention.png", "ranks": 2, "desc": ["Your Judgement and Avenger Shield have a 25% chance of making your next Shield of the Righteous a critical strike. Lasts 10 sec.", "Your Judgement and Avenger's Shield have a 50% chance of making your next Shield of the Righteous a critical strike. Lasts 10 sec."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 1, "col": 0, "name": "Judgements of the Just", "img": "../icon/Ability_Paladin_JudgementsoftheJust.png", "ranks": 2, "desc":["Your Judgement reduces the melee and ranged attack speed of the target by 10% for 20 sec. In addition, increases the duration of your Seal of Justice effect by 0.5 sec.", "Your Judgement reduces the melee and ranged attack speed of the target by 20% for 20 sec. In addition, increases the duration of your Seal of Justice effect by 1 sec."]}
      , {
	  "row": 2, "col": 2, "name": "Hammer of the Righteous", "img": "../icon/Ability_Paladin_HammeroftheRighteous.png", "ranks": 1, "spell":{
	  "name": "Hammer of the Righteous", "desc": "Hammer the current target for 30% weapon damage, causing a wave of light that hits all targets within 8 yards for 833 Holy damage. Grants a charge of Holy Power.", "cast": "Instant", "cost": "10% Base mana", "cooldown": "4.5 Sec", "range": "Melee Range", "icon":"../icon/Ability_Paladin_HammeroftheRighteous.png"}
      , "desc":["Hammer the current target for 30% weapon damage, causing a wave of light that hits all targets within 8 yards for 833 Holy damage. Grants a charge of Holy Power."]}
      , {
      "row": 4, "col": 0, "name": "Vindication", "img": "../icon/Spell_Holy_Vindication.png", "ranks": 1, "desc":["Your Crusader Strike and Hammer of the Righteous reduce physical damage done by their primary targets by 10% for 30 sec."]}
      , {
      "row": 2, "col": 3, "name": "Wrath of the Lightbringer", "img": "../icon/inv_mace_82.png", "ranks": 2, "desc":["Increases the damage of your Crusader Strike and Judgement abilities by 50%, and increases the critical strike chance of your Holy Wrath and Hammer of Wrath spells by 15%.", "Increases the damage of your Crusader Strike and Judgement abilities by 100%, and increases the critical strike chance of your Holy Wrath and Hammer of Wrath spells by 30%."]}
      , {
      "row": 3, "col": 0, "name": "Reckoning", "img": "../icon/Spell_Holy_BlessingOfStrength.png", "ranks": 2, "desc":["You have a 10% chance after blocking an attack for your next 4 weapon swings within 8 sec to generate an additional attack.", "You have a 20% chance after blocking an attack for your next 4 weapon swings within 8 sec to generate an additional attack."]}
      , {
      "row": 3, "col": 2, "name": "Grand Crusader", "img": "../icon/INV_Helmet_74.png", "ranks": 2, "desc": ["When your Crusader Strike or Hammer of the Righteous deal damage to your primary target, they have a 10% chance of refreshing the cooldown on your next Avenger's Shield and causing it to generate a charge of Holy Power if used within 6 sec.", "When your Crusader Strike or Hammer of the Righteous deal damage to your primary target, they have a 20% chance of refreshing the cooldown on your next Avenger's Shield and causing it to generate a charge of Holy Power if used within 6 sec."], "reqRow": 2, "reqCol": 2, "reqRank":1}
      , {
      "row": 4, "col": 2, "name": "Guarded by the Light", "img": "../icon/Ability_Paladin_GaurdedbytheLight.png", "ranks": 2, "desc":["Increases your Word of Glory by 5% when used to heal yourself.", "Increases your Word of Glory by 10% when used to heal yourself. In addition, any overhealing will create a protective shield equal to the amount of overhealing that lasts for 6 sec."]}
      , {
	  "row": 3, "col": 1, "name": "Shield of the Righteous", "img": "../icon/Ability_Paladin_ShieldofVengeance.png", "ranks": 1, "spell":{
	  "name": "Shield of the Righteous", "desc": "Slam the target with your shield, causing Holy damage. Consumes all charges of Holy Power to determine damage dealt:<br/><br/>1 Holy Power: 667 damage<br/>2 Holy Power: 2001 damage<br/>3 Holy Power: 4002 damage", "cast": "Instant", "cost": "1 Holy Power", "range": "Melee Range", "icon":"../icon/Ability_Paladin_ShieldofVengeance.png"}
      , "desc": ["Slam the target with your shield, causing Holy damage. Consumes all charges of Holy Power to determine damage dealt:<br/><br/>1 Holy Power: 667 damage<br/>2 Holy Power: 2001 damage<br/>3 Holy Power: 4002 damage"], "reqRow": 2, "reqCol": 1, "reqRank":3}
      , {
      "row": 0, "col": 2, "name": "Eternal Glory", "img": "../icon/INV_Torch_Thrown.png", "ranks": 2, "desc":["Your Word of Glory has a 15% chance not to consume Holy Power.", "Your Word of Glory has a 30% chance not to consume Holy Power."]}
      , {
      "row": 0, "col": 0, "name": "Divinity", "img": "../icon/Spell_Holy_BlindingHeal.png", "ranks": 3, "desc":["Increases all healing done by you and all healing effects on you by 2%.", "Increases all healing done by you and all healing effects on you by 4%.", "Increases all healing done by you and all healing effects on you by 6%."]}
     ]}
     ,
     {
      "name": "Retribution", "background": "../img/PALADINCOMBAT.png", "desc": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.", "icon": "../icon/Spell_Holy_AuraOfLight.png", "type": 8, "mastery":{
      "name": "Hand of Light", "desc":"Your Templar's Verdict, Crusader Strike and Divine Storm deal 17% additional damage as Holy damage. Each point of Mastery increases the damage by an additional 2.1%."}
      , "primaries":[ {
      "name": "Templar's Verdict", "desc": "An instant weapon attack that causes a percentage of weapon damage. Consules all charges of Holy Power to increase damage dealt:<br/><br/>1 Holy Power: 30% Weapon Damage<br/>2 Holy Power: 90% Weapon Damage<br/>3 Holy Powers: 235% Weapon Damage", "cast": "Instant", "cost": "All Holy Power", "range": "Melee Range", "icon":"../icon/spell_paladin_templarsverdict.png"}
      , {
      "name": "Sheath of Light", "desc": "Increases your spell power by an amount equal to 30% of your attack power and increases your chance to hit with spells by 8%.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Ability_Paladin_SheathofLight.png"}
      , {
      "name": "Two-Handed Weapon Specialization", "desc": "Increases the damage you deal with two-handed melee weapons by 25%.", "rank": "Passive", "cast": "Instant", "icon":"../icon/INV_Hammer_04.png"}
      , {
      "name": "Judgements of the Bold", "desc": "Your Judgement grants you 25% of your base mana over 10 sec.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Ability_Paladin_JudgementoftheWise.png"}
      ], "talents":[ {
      "row": 4, "col": 2, "name": "Divine Purpose", "img": "../icon/Spell_Holy_DivinePurpose.png", "ranks": 2, "desc":["The following attacks have a 7% chance to cause your next Holy Power ability to consume no Holy Power and to cast as if 3 Holy Power were consumed:<br/><br/>- Judgement<br/>- Exorcismc- Templar's Verdict<br/>- Divine Storm<br/>- Inquisition<br/>- Holy Wrath<br/>- Hammer of Wrath", "The following attacks have a 15% chance to cause your next Holy Power ability to consume no Holy Power and to cast as if 3 Holy Power were consumed:<br/><br/>- Judgement<br/>- Exorcism<br/>- Templar's Verdict<br/>- Divine Storm<br/>- Inquisition<br/>- Holy Wrath<br/>- Hammer of Wrath"]}
      , {
      "row": 3, "col": 2, "name": "Seals of Command", "img": "../icon/Ability_Warrior_InnerRage.png", "ranks": 1, "desc":["Your Seal of Righteousness, Seal of Truth, and Seal of Justice now also deal 7% weapon damage when triggered. In addition, your Seal of Righteousness now hits all enemy targets within melee range."]}
      , {
      "row": 0, "col": 0, "name": "Eye for an Eye", "img": "../icon/Spell_Holy_EyeforanEye.png", "ranks": 2, "desc":["All magic attacks against you have a 20% chance to cause 30% of the damage taken back to the attacker as well.", "All magic attacks against you have a 40% chance to cause 30% of the damage taken back to the attacker as well."]}
      , {
      "row": 0, "col": 1, "name": "Crusade", "img": "../icon/Spell_Holy_Crusade.png", "ranks": 3, "desc":["Increases the damage of your Crusader Strike, Hammer of the Righteous, and Templar's Verdict by 10%, and the damage and healing of your Holy Shock by 10%. In addition, for 15 sec after you kill an enemy that yields experience or honor, your next Holy Light heals for an additional 100%.", "Increases the damage of your Crusader Strike, Hammer of the Righteous, and Templar's Verdict by 20%, and the damage and healing of your Holy Shock by 20%. In addition, for 15 sec after you kill an enemy that yields experience or honor, your next Holy Light heals for an additional 200%.", "Increases the damage of your Crusader Strike, Hammer of the Righteous, and Templar's Verdict by 30%, and the damage and healing of your Holy Shock by 30%. In addition, for 15 sec after you kill an enemy that yields experience or honor, your next Holy Light heals for an additional 300%."]}
      , {
      "row": 2, "col": 1, "name": "The Art of War", "img": "../icon/Ability_Paladin_ArtofWar.png", "ranks": 3, "desc":["Your autoattacks have a 7% chance to make your next Exorcism instant, free and cause 100% additional damage.", "Your autoattacks have a 14% chance to make your next Exorcism instant, free and cause 100% additional damage.", "Your autoattacks have a 20% chance to make your next Exorcism instant, free and cause 100% additional damage."]}
      , {
	  "row": 4, "col": 1, "name": "Repentance", "img": "../icon/Spell_Holy_PrayerOfHealing.png", "ranks": 1, "spell":{
	  "name": "Repentance", "desc": "Puts the enemy target in a state of meditation, incapacitating them for up to 1 min. Any damage from sources other than Censure will awaken the target. Usable against Demons, Dragonkin, Giants, Humanoids and Undead.", "cast": "Instant", "cost": "9% Base mana", "cooldown": "1 Min", "range": "30 yd range", "icon":"../icon/Spell_Holy_PrayerOfHealing.png"}
      , "desc":["Puts the enemy target in a state of meditation, incapacitating them for up to 1 min. Any damage from sources other than Censure will awaken the target. Usable against Demons, Dragonkin, Giants, Humanoids and Undead."]}
      , {
      "row": 2, "col": 0, "name": "Communion", "img": "../icon/Ability_Paladin_JudgementoftheWise.png", "ranks": 1, "desc":["Your auras increase your party and raid's damage dealt by 3%, and your own damage is increased by an additional 2% at all times. In addition, your Judgement causes Replenishment.<br/><br/>Replenishment - Grants up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 10 sec. Lasts for 15 sec."]}
      , {
      "row": 3, "col": 3, "name": "Sanctified Wrath", "img": "../icon/Ability_Paladin_SanctifiedWrath.png", "ranks": 3, "desc":["Increases the critical strike chance of Hammer of Wrath by 2%, reduces the cooldown of Avenging Wrath by 20 secs and allows the use of Hammer of Wrath at all times during Avenging Wrath.", "Increases the critical strike chance of Hammer of Wrath by 4%, reduces the cooldown of Avenging Wrath by 40 secs and allows the use of Hammer of Wrath at all times during Avenging Wrath.", "Increases the critical strike chance of Hammer of Wrath by 6%, reduces the cooldown of Avenging Wrath by 60 secs and allows the use of Hammer of Wrath at all times during Avenging Wrath."]}
      , {
      "row": 5, "col": 1, "name": "Inquiry of Faith", "img": "../icon/Ability_Paladin_RighteousVengeance.png", "ranks": 3, "desc":["Increases the periodic damage done by your Seal of Truth by 10%, and the duration of your Inquisition by 66%.", "Increases the periodic damage done by your Seal of Truth by 20%, and the duration of your Inquisition by 133%.", "Increases the periodic damage done by your Seal of Truth by 30%, and the duration of your Inquisition by 200%."]}
      , {
	  "row": 2, "col": 3, "name": "Divine Storm", "img": "../icon/Ability_Paladin_DivineStorm.png", "ranks": 1, "spell":{
	  "name": "Divine Storm", "desc": "An instant attack that causes 100% weapon damage to all enemies within 8 yards. The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused, and will grant a charge of Holy Power if it hits 4 or more targets.", "cast": "Instant", "cost": "5% Base mana", "cooldown": "4.5 Sec", "icon":"../icon/Ability_Paladin_DivineStorm.png"}
      , "desc":["An instant attack that causes 100% weapon damage to all enemies within 8 yards. The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused, and will grant a charge of Holy Power if it hits 4 or more targets."]}
      , {
      "row": 3, "col": 0, "name": "Sacred Shield", "img": "../icon/Ability_Paladin_BlessedMending.png", "ranks": 1, "desc":["When reduced below 30% health, you gain the Sacred Shield effect. The Sacred Shield absorbs 1628 damage and increases healing received by 20%. Lasts 15 sec. This effect cannot occur more than once every 60 sec."]}
      , {
      "row": 5, "col": 2, "name": "Acts of Sacrifice", "img": "../icon/Ability_Paladin_BlessedHands.png", "ranks": 2, "desc":["Reduces the cooldown by 10% and mana cost by 10% of your Hand of Freedom, Hand of Salvation and Hand of Sacrifice. In addition, your Cleanse will remove one movement impairing effect if cast on yourself.", "Reduces the cooldown by 20% and mana cost by 20% of your Hand of Freedom, Hand of Salvation and Hand of Sacrifice. In addition, your Cleanse will remove one movement impairing effect if cast on yourself."]}
      , {
	  "row": 6, "col": 1, "name": "Zealotry", "img": "../icon/Spell_Holy_ProclaimChampion_02.png", "ranks": 1, "spell":{
	  "name": "Zealotry", "desc": "Your Crusader Strike generates 3 charges of Holy Power per strike for the next 20 sec. Requires 3 Holy Power to use, but does not consume Holy Power.", "cast": "Instant", "cost": "3 Holy Power", "cooldown": "2 Min", "icon":"../icon/Spell_Holy_ProclaimChampion_02.png"}
      , "desc":["Your Crusader Strike generates 3 charges of Holy Power per strike for the next 20 sec. Requires 3 Holy Power to use, but does not consume Holy Power."]}
      , {
      "row": 1, "col": 1, "name": "Rule of Law", "img": "../icon/INV_Relics_LibramofHope.png", "ranks": 3, "desc":["Increases the critical effect chance of your Crusader Strike, Hammer of the Righteous and Word of Glory by 5%.", "Increases the critical effect chance of your Crusader Strike, Hammer of the Righteous and Word of Glory by 10%.", "Increases the critical effect chance of your Crusader Strike, Hammer of the Righteous and Word of Glory by 15%."]}
      , {
      "row": 4, "col": 0, "name": "Selfless Healer", "img": "../icon/spell_holy_rune.png", "ranks": 2, "desc":["Reduces the cooldown of Word of Glory by 5 sec. In addition, when you heal others with your Word of Glory, it increases the effectiveness of the heal by 25% and increases your damage done by 2% per charge of Holy Power for 10 sec.", "Reduces the cooldown of Word of Glory by 10 sec. In addition, when you heal others with your Word of Glory, it increases the effectiveness of the heal by 50% and increases your damage done by 4% per charge of Holy Power for 10 sec."]}
      , {
      "row": 3, "col": 1, "name": "Sanctity of Battle", "img": "../icon/inv_sword_136.png", "ranks": 1, "desc":["Haste effects lower the cooldown of your Crusader Strike and Divine Storm abilities."]}
      , {
      "row": 2, "col": 2, "name": "Long Arm of the Law", "img": "../icon/Ability_Paladin_JudgementRed.png", "ranks": 2, "desc": ["Your Judgement has a 50% chance to increase your movement speed by 45% for 4 sec when used on targets at or further than 15 yards from you.", "Your Judgement has a 100% chance to increase your movement speed by 45% for 4 sec when used on targets at or further than 15 yards from you."], "reqRow": 0, "reqCol": 2, "reqRank":2}
      , {
      "row": 1, "col": 3, "name": "Pursuit of Justice", "img": "../icon/Spell_Holy_PersuitofJustice.png", "ranks": 2, "desc":["You have a 50% chance to gain a charge of Holy Power when struck by a Stun, Fear or Immobilize effect. In addition, increases your movement and mounted movement speed by 8%. This effect does not stack with other movement speed increasing effects.", "You have a 100% chance to gain a charge of Holy Power when struck by a Stun, Fear or Immobilize effect. In addition, increases your movement and mounted movement speed by 15%. This effect does not stack with other movement speed increasing effects."]}
      , {
      "row": 0, "col": 2, "name": "Improved Judgement", "img": "../icon/Ability_Paladin_JudgementBlue.png", "ranks": 2, "desc":["Increases the range of your Judgement by 10 yards.", "Increases the range of your Judgement by 20 yards."]}
      , {
      "row": 1, "col": 0, "name": "Guardian's Favor", "img": "../icon/Spell_Holy_SealOfProtection.png", "ranks": 2, "desc":["Reduces the cooldown of your Hand of Protection by 60 sec and increases the duration of your Hand of Freedom by 2 sec.", "Reduces the cooldown of your Hand of Protection by 2 min and increases the duration of your Hand of Freedom by 4 sec."]}
     ]}
]}

