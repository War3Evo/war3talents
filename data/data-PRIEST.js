{
  "name": "Priest", "tabs":[ {
      "name": "Discipline", "background": "./img/PriestDiscipline.png", "desc": "Uses magic to shield allies from taking damage as well as heal their wounds.", "icon": "./icon/Spell_Holy_PowerWordShield.png", "type": 4, "mastery":{
      "name": "Shield Discipline", "desc":"Increases the potency of all your damage absorption spells by 42%. Each point of Mastery increases the potency of absorbs by an additional 2.5%."}
      , "primaries":[ {
      "name": "Penance", "desc": "Launches a volley of holy light at the target, causing 832 Holy damage to an enemy, or 3067 healing to an ally instantly and every 1 sec for 2 sec.", "cast": "Channeled", "cost": "14% Base mana", "cooldown": "12 Sec", "range": "30 yd range", "range_f" :"40 yd range", "icon":"./icon/Spell_Holy_Penance.png"}
      , {
      "name": "Enlightenment", "desc": "Intellect increased by 15%.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Spell_Arcane_MindMastery.png"}
      , {
      "name": "Meditation", "desc": "Allows 50% of your mana regeneration from Spirit to continue while in combat.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Spell_Nature_Sleep.png"}
      , {
      "name": "Absolution", "desc": "Enables your Dispel Magic spell to be cast on friendly targets to remove 2 harful magical effects.", "cast": "Instant", "icon":"./icon/Spell_Holy_Absolution.png"}
      ], "talents":[ {
      "row": 0, "col": 1, "name": "Twin Disciplines", "img": "./icon/Spell_Holy_SealOfVengeance.png", "ranks": 3, "desc":["Increases your Shadow and Holy spell damage and healing by 2%.", "Increases your Shadow and Holy spell damage and healing by 4%.", "Increases your Shadow and Holy spell damage and healing by 6%."]}
      , {
      "row": 1, "col": 2, "name": "Inner Sanctum", "img": "./icon/Spell_Holy_InnerFire.png", "ranks": 3, "desc":["Your Inner Fire also reduces all spell damage taken by 2% while it is active, and the movement speed bonus of your Inner Will is increased by 2%.", "Your Inner Fire also reduces all spell damage taken by 4% while it is active, and the movement speed bonus of your Inner Will is increased by 4%.", "Spell damage taken is reduced by 6% while within Inner Fire, and the movement speed bonus of your Inner Will is increased by 6%."]}
      , {
      "row": 2, "col": 3, "name": "Inner Focus", "img": "./icon/Spell_Frost_WindWalkOn.png", "ranks": 1, "desc":["Reduces the mana cost of your next Flash Heal, Binding Heal, Greater Heal or Prayer of Healing by 100% and increases its critical effect chance by 25%."]}
      , {
      "row": 1, "col": 0, "name": "Evangelism", "img": "./icon/Spell_Holy_DivineIllumination.png", "ranks": 2, "desc":["When you cast Smite, Holy Fire or Mind Flay you gain Evangelism. Stacks up to 5 times. Lasts for 20 sec.<br/><br/><span style=\"color:white;\">Evangelism (Smite, Holy Fire)</span><br/>Increases the damage done by your Smite, Holy Fire, and Penance spells by 2% and reduces the mana cost of those spells by 3%.<br/><br/><span style=\"color:white;\">Dark Evangelism (Mind Flay)</span><br/>Increases the damage done by your Periodic Shadow spells by 1%.", "When you cast Smite, Holy Fire or Mind Flay you gain Evangelism. Stacks up to 5 times. Lasts for 20 sec.<br/><br/><span style=\"color:white;\">Evangelism (Smite, Holy Fire)</span><br/>Increases the damage done by your Smite, Holy Fire, and Penance spells by 4% and reduces the mana cost of those spells by 6%.<br/><br/><span style=\"color:white;\">Dark Evangelism (Mind Flay)</span><br/>Increases the damage done by your Periodic Shadow spells by 2%."]}
      , {
      "row": 0, "col": 2, "name": "Mental Agility", "img": "./icon/Ability_Hibernation.png", "ranks": 3, "desc":["Reduces the mana cost of your instant cast spells by 4%.", "Reduces the mana cost of your instant cast spells by 7%.", "Reduces the mana cost of your instant cast spells by 10%."]}
      , {
	  "row": 6, "col": 1, "name": "Power Word: Barrier", "img": "./icon/spell_holy_powerwordbarrier.png", "ranks": 1, "spell":{
	  "name": "Power Word: Barrier", "desc": "Summons a holy barrier on the target location that reduces all damage done to friendly targets by 25%. While within the barrier, spellcasting will not be interrupted by damage. The barrier lasts for 10 sec.", "cast": "Instant", "cost": "30% Base mana", "cooldown": "3 Min", "range": "40 yd range", "icon":"./icon/spell_holy_powerwordbarrier.png"}
      , "desc": ["Summons a holy barrier on the target location that reduces all damage done to friendly targets by 25%. While within the barrier, spellcasting will not be interrupted by damage. The barrier lasts for 10 sec."], "reqRow": 4, "reqCol": 1, "reqRank":3}
      , {
      "row": 3, "col": 3, "name": "Reflective Shield", "img": "./icon/ability_priest_reflectiveshield.png", "ranks": 2, "desc":["Causes 22% of the damage you absorb with Power Word: Shield to reflect back at the attacker. This damage causes no threat.", "Causes 45% of the damage you absorb with Power Word: Shield to reflect back at the attacker. This damage causes no threat."]}
      , {
      "row": 1, "col": 3, "name": "Soul Warding", "img": "./icon/ability_priest_soulwarding.png", "ranks": 2, "desc":["Reduces the cooldown of your Power Word: Shield ability by 1 sec.", "Reduces the cooldown of your Power Word: Shield ability by 2 sec."]}
      , {
      "row": 4, "col": 1, "name": "Divine Aegis", "img": "./icon/Spell_Holy_DevineAegis.png", "ranks": 3, "desc":["Critical heals and all heals from Prayer of Healing create a protective shield on the target, absorbing 10% of the amount healed. Lasts 15 sec.", "Critical heals and all heals from Prayer of Healing create a protective shield on the target, absorbing 20% of the amount healed. Lasts 15 sec.", "Critical heals and all heals from Prayer of Healing create a protective shield on the target, absorbing 30% of the amount healed. Lasts 15 sec."]}
      , {
	  "row": 2, "col": 1, "name": "Power Infusion", "img": "./icon/Spell_Holy_PowerInfusion.png", "ranks": 1, "spell":{
	  "name": "Power Infusion", "desc": "Infuses the target with power, increasing spell casting speed by 20% and reducing the mana cost of all spells by 20%. Lasts 15 sec.", "cast": "Instant", "cost": "16% Base mana", "cooldown": "2 Min", "range": "40 yd range", "icon":"./icon/Spell_Holy_PowerInfusion.png"}
      , "desc":["Infuses the target with power, increasing spell casting speed by 20% and reducing the mana cost of all spells by 20%. Lasts 15 sec."]}
      , {
      "row": 3, "col": 1, "name": "Rapture", "img": "./icon/Spell_Holy_Rapture.png", "ranks": 3, "desc":["When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with a 2% of your total mana. This effect can only occur once every 12 sec.", "When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with a 5% of your total mana. This effect can only occur once every 12 sec.", "When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with a 7% of your total mana. This effect can only occur once every 12 sec."]}
      , {
      "row": 5, "col": 0, "name": "Focused Will", "img": "./icon/ability_priest_focusedwill.png", "ranks": 2, "desc":["Whenever you are victim of any damage greater than 10% of your total health or critically hit by any non-periodic attack, you gain Focused Will reducing all damage taken by 5% lasting for 8 sec. Stacks up to 2 times.", "Whenever you are victim of any damage greater than 10% of your total health or critically hit by any non-periodic attack, you gain Focused Will reducing all damage taken by 10% lasting for 8 sec. Stacks up to 2 times."]}
      , {
	  "row": 4, "col": 2, "name": "Pain Suppression", "img": "./icon/Spell_Holy_PainSupression.png", "ranks": 1, "spell":{
	  "name": "Pain Suppression", "desc": "Instantly reduces a friendly target's threat by 5%, and reduces all damage they take by 40% for 8 sec.", "cast": "Instant", "cost": "8% Base mana", "cooldown": "3 Min", "range": "40 yd range", "icon":"./icon/Spell_Holy_PainSupression.png"}
      , "desc":["Instantly reduces a friendly target's threat by 5%, and reduces all damage they take by 40% for 8 sec."]}
      , {
      "row": 5, "col": 2, "name": "Grace", "img": "./icon/Spell_Holy_HopeAndGrace.png", "ranks": 2, "desc":["Your Flash Heal, Greater Heal, Heal and Penance spells bless the target with Grace, increasing all healing received from the Priest by 4%. This effect will stack up to 3 times. Effect lasts 15 sec.", "Your Flash Heal, Greater Heal, Heal and Penance spells bless the target with Grace, increasing all healing received from the Priest by 8%. This effect will stack up to 3 times. Effect lasts 15 sec."]}
      , {
      "row": 0, "col": 0, "name": "Improved Power Word: Shield", "img": "./icon/Spell_Holy_PowerWordShield.png", "ranks": 2, "desc":["Increases the damage absorbed by your Power Word: Shield by 10%.", "Increases the damage absorbed by your Power Word: Shield by 20%."]}
      , {
      "row": 2, "col": 0, "name": "Renewed Hope", "img": "./icon/Spell_Holy_HolyProtection.png", "ranks": 2, "desc":["Increases the critical effect chance of your Flash Heal, Greater Heal, Heal and Penance (Heal) spells by 5% on targets afflicted by the Weakened Soul effect, or blessed with your Grace effect.", "Increases the critical effect chance of your Flash Heal, Greater Heal, Heal and Penance (Heal) spells by 10% on targets afflicted by the Weakened Soul effect, or blessed with your Grace effect."]}
      , {
      "row": 3, "col": 2, "name": "Borrowed Time", "img": "./icon/Spell_Holy_BorrowedTime.png", "ranks": 2, "desc":["Grants 7% spell haste for your next spell after casting Power Word: Shield. Lasts for 6 sec.", "Grants 14% spell haste for your next spell after casting Power Word: Shield. Lasts for 6 sec."]}
      , {
      "row": 1, "col": 1, "name": "Archangel", "img": "./icon/ability_priest_archangel.png", "ranks": 1, "desc": ["Consumes your Evangelism effects, causing an effect depending what type of Evangelism effect is consumed:<br/><br/>Archangel (Evangelism) - Instantly restores 1% of your total mana and increases your healing done by 3% for each stack. Lasts for 18 sec. 30 sec cooldown.<br/><br/>Dark Archangel (Dark Evangelism) - Instantly restores 5% of your total mana and increases the damage done by your Mind Flay, Mind Spike, Mind Blast and Shadow Word: Death by 4% for each stack. Lasts for 18 sec. 90 sec cooldown."], "reqRow": 1, "reqCol": 0, "reqRank":2}
      , {
      "row": 2, "col": 2, "name": "Atonement", "img": "./icon/ability_priest_atonement.png", "ranks": 2, "desc":["When you deal damage with Smite or Holy Fire, you instantly heal a nearby low health friendly target within 15 yards from the enemy target equal to 50% of the damage dealt.<br/><br/>If the Priest is healed through Atonement, the effect is reduced in half.", "When you deal damage with Smite or Holy Fire, you instantly heal a nearby low health friendly target within 15 yards from the enemy target equal to 100% of the damage dealt.<br/><br/>If the Priest is healed through Atonement, the effect is reduced in half."]}
      , {
      "row": 4, "col": 0, "name": "Strength of Soul", "img": "./icon/Spell_Holy_AshesToAshes.png", "ranks": 2, "desc": ["When you heal a target with your Heal, Greater Heal or Flash Heal spell, the duration of the Weakened Soul debuff on the target is reduced by 2 sec.<br/><br/>In addition, when you cast Inner Focus you become immune to Silence, Interrupt and Dispel effects for 3 sec.", "When you heal a target with your Heal, Greater Heal or Flash Heal spell, the duration of the Weakened Soul debuff on the target is reduced by 4 sec.<br/><br/>In addition, when you cast Inner Focus you become immune to Silence, Interrupt and Dispel effects for 5 sec."], "reqRow": 2, "reqCol": 0, "reqRank":2}
      , {
      "row": 4, "col": 3, "name": "Train of Thought", "img": "./icon/Ability_Mage_StudentOfTheMind.png", "ranks": 2, "desc":["You have a 50% chance when you heal with Greater Heal to reduce the cooldown of your Inner Focus by 5 sec.<br/><br/>You have a 50% chance when you Smite to reduce the cooldown of your Penance by 0.5 sec.", "You have a 100% chance when you heal with Greater Heal to reduce the cooldown of your Inner Focus by 5 sec.<br/><br/>You have a 100% chance when you Smite to reduce the cooldown of your Penance by 0.5 sec."]}
     ]}
     ,
     {
      "name": "Holy", "background": "./img/PriestHoly.png", "desc": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.", "icon": "./icon/Spell_Holy_GuardianSpirit.png", "type": 4, "mastery":{
      "name": "Echo of Light", "desc":"Your direct healing spells heal for an additional 10% over 6 sec. Each point of Mastery provides an additional 1.25% healing over 6 sec."}
      , "primaries":[ {
      "name": "Spiritual Healing", "desc": "Healing increased by 15%.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Spell_Holy_ImpHolyConcentration.png"}
      , {
      "name": "Holy Word: Chastise", "desc": "Chastise the target for 715 Holy damage, and disorients them for 3 sec.", "cast": "Instant", "cost": "15% Base mana", "cooldown": "30 Sec", "range": "30 yd range", "icon":"./icon/Spell_Holy_Chastise.png"}
      , {
      "name": "Meditation", "desc": "Allows 50% of your mana regeneration from Spirit to continue while in combat.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Spell_Nature_Sleep.png"}
      , {
      "name": "Absolution", "desc": "Enables your Dispel Magic spell to be cast on friendly targets to remove 2 harmful magical effects.", "cast": "Instant", "icon":"./icon/Spell_Holy_Absolution.png"}
      ], "talents":[ {
      "row": 0, "col": 2, "name": "Divine Fury", "img": "./icon/Spell_Holy_SealOfWrath.png", "ranks": 3, "desc":["Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by .15 sec.", "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by .35 sec.", "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by .5 sec."]}
      , {
      "row": 0, "col": 1, "name": "Empowered Healing", "img": "./icon/Spell_Holy_GreaterHeal.png", "ranks": 3, "desc":["Increases the healing done by your Flash Heal, Heal, Binding Heal and Greater Heal by 5%.", "Increases the healing done by your Flash Heal, Heal, Binding Heal and Greater Heal by 10%.", "Increases the healing done by your Flash Heal, Heal, Binding Heal and Greater Heal by 15%."]}
      , {
      "row": 1, "col": 3, "name": "Inspiration", "img": "./icon/Spell_Holy_LayOnHands.png", "ranks": 2, "desc":["Reduces your target's physical damage taken by 5% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell.", "Reduces your target's physical damage taken by 10% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell."]}
      , {
      "row": 3, "col": 3, "name": "Serendipity", "img": "./icon/Spell_Holy_Serendipity.png", "ranks": 2, "desc":["When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 10% and mana cost reduced by 5%. Stacks up to 2 times. Lasts 20 sec.", "When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 20% and mana cost reduced by 10%. Stacks up to 2 times. Lasts 20 sec."]}
      , {
      "row": 2, "col": 1, "name": "Holy Concentration", "img": "./icon/Spell_Holy_Fanaticism.png", "ranks": 2, "desc":["Increases the amount of mana regeneration from Spirit while in combat by an additional 15%.", "Increases the amount of mana regeneration from Spirit while in combat by an additional 30%."]}
      , {
      "row": 4, "col": 0, "name": "Body and Soul", "img": "./icon/Spell_Holy_SymbolOfHope.png", "ranks": 2, "desc":["When you cast Power Word: Shield or Leap of Faith, you increase the target's movement speed by 30% for 4 sec, and you have a 50% chance when you cast Cure Disease on yourself to also cleanse 1 poison effect in addition to diseases.", "When you cast Power Word: Shield or Leap of Faith, you increase the target's movement speed by 60% for 4 sec, and you have a 100% chance when you cast Cure Disease on yourself to also cleanse 1 poison effect in addition to diseases."]}
      , {
      "row": 2, "col": 0, "name": "Divine Touch", "img": "./icon/Ability_Paladin_InfusionofLight.png", "ranks": 2, "desc": ["Your Renew will instantly heal the target for 5% of the total periodic effect.", "Your Renew will instantly heal the target for 10% of the total periodic effect."], "reqRow": 0, "reqCol": 0, "reqRank":2}
      , {
	  "row": 5, "col": 2, "name": "Circle of Healing", "img": "./icon/Spell_Holy_CircleOfRenewal.png", "ranks": 1, "spell":{
	  "name": "Circle of Healing", "desc": "Heals up to 5 friendly party or raid members within a1 yards of the target for 2479. Prioritizes healing the most injured party members.", "cast": "Instant", "cost": "21% Base mana", "cooldown": "10 Sec", "range": "40 yd range", "icon":"./icon/Spell_Holy_CircleOfRenewal.png"}
      , "desc":["Heals up to 5 friendly party or raid members within a1 yards of the target for 2479. Prioritizes healing the most injured party members."]}
      , {
      "row": 5, "col": 0, "name": "Test of Faith", "img": "./icon/Spell_Holy_TestOfFaith.png", "ranks": 3, "desc":["Increases healing by 4% on friendly targets at or below 50% health.", "Increases healing by 8% on friendly targets at or below 50% health.", "Increases healing by 12% on friendly targets at or below 50% health."]}
      , {
	  "row": 6, "col": 1, "name": "Guardian Spirit", "img": "./icon/Spell_Holy_GuardianSpirit.png", "ranks": 1, "spell":{
	  "name": "Guardian Spirit", "desc": "Calls upon a guardian spirit to watch over the friendly target. The spirit increases the healing received by the target by 60%, and also prevents the target from dying by sacrificing itself. This sacrifice terminates the effect but heals the target of 50% of their maximum health. Lasts 10 sec.", "cast": "Instant", "cost": "6% Base mana", "cooldown": "3 Min", "range": "40 yd range", "icon":"./icon/Spell_Holy_GuardianSpirit.png"}
      , "desc":["Calls upon a guardian spirit to watch over the friendly target. The spirit increases the healing received by the target by 60%, and also prevents the target from dying by sacrificing itself. This sacrifice terminates the effect but heals the target of 50% of their maximum health. Lasts 10 sec."]}
      , {
      "row": 0, "col": 0, "name": "Improved Renew", "img": "./icon/Spell_Holy_Renew.png", "ranks": 2, "desc":["Increases the amount healed by your Renew spell by 5%.", "Increases the amount healed by your Renew spell by 10%."]}
      , {
	  "row": 2, "col": 2, "name": "Lightwell", "img": "./icon/Spell_Holy_SummonLightwell.png", "ranks": 1, "spell":{
	  "name": "Lightwell", "desc": "Creates a Holy Lightwell. Friendly players can click the Lightwell to restore [((1+(SP*.308))*3)*(1.15*)] health over 6 sec. Attacks done to you equal to 30% of your total health will cancel the effect. Lightwell lasts for 3 min or 10 charges.", "cast": "0.5 Sec", "cost": "30% Base mana", "cooldown": "3 Min", "range": "40 yd range", "icon":"./icon/Spell_Holy_SummonLightwell.png"}
      , "desc":["Creates a Holy Lightwell. Friendly players can click the Lightwell to restore [((1+(SP*.308))*3)*(1.15*)] health over 6 sec. Attacks done to you equal to 30% of your total health will cancel the effect. Lightwell lasts for 3 min or 10 charges."]}
      , {
      "row": 4, "col": 1, "name": "Chakra", "img": "./icon/spell_priest_chakra.png", "ranks": 1, "desc": ["When activated, your next Heal, Flash Heal, Greater Heal, Binding Heal, Prayer of Healing, Prayer of Mending, Mind Spike or Smite will put you into a Chakra state.<br/><br/><span style=\"color:white;\">Serenity (Heal, Flash Heal, Greater Heal, Binding Heal)</span><br/>Increases the critical effect chance of your direct healing spells by 10%, and causes your direct heals to refresh the duration of your Renew on the target.<br/><br/><span style=\"color:white;\">Sanctuary (Prayer of Healing, Prayer of Mending)</span><br/>Increases the healing done by your area of effect spells and Renew by 15% and reduces the cooldown of your Circle of Healing by 2 sec.<br/><br/><span style=\"color:white;\">Chastise (Smite, Mind Spike)</span><br/>Increases your total damage done by Shadow and Holy spells by 15%."], "reqRow": 2, "reqCol": 1, "reqRank":2}
      , {
      "row": 5, "col": 1, "name": "Heavenly Voice", "img": "./icon/ability_priest_heavanlyvoice.png", "ranks": 2, "desc": ["Increases the healing done by your Divine Hymn spell by 50%, and reduces the cooldown by 2.5 minutes.", "Increases the healing done by your Divine Hymn spell by 100%, and reduces the cooldown by 5 minutes."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 1, "col": 1, "name": "Desperate Prayer", "img": "./icon/Spell_Holy_Restoration.png", "ranks": 1, "desc":["Instantly heals the caster for 30% of their total health."]}
      , {
      "row": 3, "col": 2, "name": "Spirit of Redemption", "img": "./icon/INV_Enchant_EssenceEternalLarge.png", "ranks": 1, "desc":["Upon death, the priest becomes the Spirit of Redemption for 15 sec. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form the priest can cast any healing spell free of cost. When the effect ends, the priest dies."]}
      , {
      "row": 4, "col": 3, "name": "Blessed Resilience", "img": "./icon/Spell_Holy_BlessedResillience.png", "ranks": 2, "desc":["Whenever you are victim of an attack equal to damage greater than 10% of your total health or critically hit by any non-periodic attack, you gain Blessed Resilience increasing all healing received by 15% lasting for 10 sec.", "Whenever you are victim of an attack equal to damage greater than 10% of your total health or critically hit by any non-periodic attack, you gain Blessed Resilience increasing all healing received by 30% lasting for 10 sec."]}
      , {
      "row": 4, "col": 2, "name": "Revelations", "img": "./icon/ability_priest_bindingprayers.png", "ranks": 1, "desc": ["While within Chakra: Serenity or Chakra: Sanctuary, your Holy Word: Chastise ability will transform into a different ability depending on which state you are in.<br/><br/><span style=\"color:white;\">Holy Word: Serenity</span><br/>Instantly heals the target for 1, and increases the critical effect chance of your healing spells on the target by 25% for 6 sec. 15 sec cooldown.<br/><br/><span style=\"color:white;\">Holy Word: Sanctuary</span><br/>Blesses the ground with Divine light, healing all within it for 1 every 2 sec for 18 sec. Only one Sanctuary can be active at any one time. 40 sec cooldown."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 1, "col": 2, "name": "Surge of Light", "img": "./icon/Spell_Holy_SurgeOfLight.png", "ranks": 2, "desc":["You have a 3% chance when you Smite, Heal, Flash Heal, Binding Heal or Greater Heal to cause your next Flash Heal to be instant cast and cost no mana.", "You have a 6% chance when you Smite, Heal, Flash Heal, Binding Heal or Greater Heal to cause your next Flash Heal to be instant cast and cost no mana."]}
      , {
      "row": 2, "col": 3, "name": "Tome of Light", "img": "./icon/INV_Misc_Book_07.png", "ranks": 2, "desc":["Reduces the cooldown of your Holy Word spells by 15%.", "Reduces the cooldown of your Holy Word spells by 30%."]}
      , {
      "row": 3, "col": 0, "name": "Rapid Renewal", "img": "./icon/Ability_Paladin_BlessedMending.png", "ranks": 1, "desc": ["Reduces the global cooldown of your Renew by 0.5 sec."], "reqRow": 2, "reqCol": 0, "reqRank":2}
     ]}
     ,
     {
      "name": "Shadow", "background": "./img/PriestShadow.png", "desc": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.", "icon": "./icon/Spell_Shadow_ShadowWordPain.png", "type": 8, "mastery":{
      "name": "Shadow Orb Power", "desc":"Increases the damage done by your Shadow Orbs by 11.6%. Each point of Mastery increases damage by an additional 1.45%."}
      , "primaries":[ {
      "name": "Mind Flay", "desc": "Assault the target's mind with Shadow energy, causing 726 Shadow damage over 3 sec and slowing their movement speed by 50%.", "cast": "Channeled", "cost": "8% Base mana", "range": "40 yd range", "icon":"./icon/Spell_Shadow_SiphonMana.png"}
      , {
      "name": "Shadow Power", "desc": "Spell damage increased by 15%.<br/><br/>Increases the critical damage of your Shadow spells by 100%.", "rank": "Passive", "cast": "Instant", "icon":"./icon/Spell_Shadow_ShadowPower.png"}
      , {
      "name": "Shadow Orbs", "desc": "You have a 10% chance for your Shadow Word: Pain and Mind Flay spells to grant you a Shadow Orb each time they deal a damage. Casting your Mind Blast or Mind Spike spell consumes all Shadow Orbs, increasing damage of that spell by 22% per Shadow Orb, and granting 22% increased damage on your periodic Shadow spells for 15 sec. You can have up to a maximum of 3 orbs.", "rank": "Passive", "cast": "Instant", "icon":"./icon/spell_priest_shadoworbs.png"}
      ], "talents":[ {
      "row": 0, "col": 0, "name": "Darkness", "img": "./icon/ability_priest_darkness.png", "ranks": 3, "desc":["Spell haste increased by 1%.", "Spell haste increased by 2%.", "Spell haste increased by 3%."]}
      , {
      "row": 0, "col": 1, "name": "Improved Shadow Word: Pain", "img": "./icon/Spell_Shadow_ShadowWordPain.png", "ranks": 2, "desc":["Increases the damage of your Shadow Word: Pain spell by 3%.", "Increases the damage of your Shadow Word: Pain spell by 6%."]}
      , {
      "row": 1, "col": 0, "name": "Improved Psychic Scream", "img": "./icon/Spell_Shadow_PsychicScream.png", "ranks": 2, "desc":["Reduces the cooldown of your Psychic Scream spell by 2 sec.", "Reduces the cooldown of your Psychic Scream spell by 4 sec."]}
      , {
      "row": 1, "col": 1, "name": "Improved Mind Blast", "img": "./icon/Spell_Shadow_UnholyFrenzy.png", "ranks": 3, "desc":["Reduces the cooldown of your Mind Blast spell by 0.5 sec, and while in Shadowform your Mind Blast also has a 33% chance to reduce all healing done to the target by 10% for 10 sec.", "Reduces the cooldown of your Mind Blast spell by 1 sec, and while in Shadowform your Mind Blast also has a 66% chance to reduce all healing done to the target by 10% for 10 sec.", "Reduces the cooldown of your Mind Blast spell by 1.5 sec, and while in Shadowform your Mind Blast also has a 100% chance to reduce all healing done to the target by 10% for 10 sec."]}
      , {
      "row": 0, "col": 2, "name": "Veiled Shadows", "img": "./icon/Spell_Magic_LesserInvisibilty.png", "ranks": 2, "desc":["Decreases the cooldown of your Fade ability by 3 sec, and reduces the cooldown of your Shadowfiend ability by 30 sec.", "Decreases the cooldown of your Fade ability by 6 sec, and reduces the cooldown of your Shadowfiend ability by 60 sec."]}
      , {
	  "row": 3, "col": 0, "Silence": "Stille", "img": "./icon/ability_priest_silence.png", "ranks": 1, "spell":{
	  "name": "Silence", "desc": "Silences the target, preventing them from casting spells for 5 sec. Non-player victim spellcasting is also interrupted for 3 sec.", "cast": "Instant", "cost": "225 Mana", "cooldown": "45 Sec", "range": "30 yd range", "icon":"./icon/ability_priest_silence.png"}
      , "desc": ["Silences the target, preventing them from casting spells for 5 sec. Non-player victim spellcasting is also interrupted for 3 sec."], "reqRow": 1, "reqCol": 0, "reqRank":2}
      , {
      "row": 3, "col": 1, "name": "Vampiric Embrace", "img": "./icon/Spell_Shadow_UnsummonBuilding.png", "ranks": 1, "desc":["Fills you with the embrace of Shadow energy, causing you to be healed for 6% and other party members to be healed for 3% of any single-target Shadow spell damage you deal."]}
      , {
      "row": 3, "col": 3, "name": "Mind Melt", "img": "./icon/Spell_Shadow_Skull.png", "ranks": 2, "desc":["Increases the damage done with your Shadow Word: Death by 15% on targets at or below 25% health, and when you deal damage with Mind Spike, the cast time of your next Mind Blast is reduced by 25% lasting 6 sec. Mind Melt can stack up to 2 times.", "Increases the damage done with your Shadow Word: Death by 30% on targets at or below 25% health, and when you deal damage with Mind Spike, the cast time of your next Mind Blast is reduced by 50% lasting 6 sec. Mind Melt can stack up to 2 times."]}
      , {
      "row": 1, "col": 2, "name": "Improved Devouring Plague", "img": "./icon/Spell_Shadow_DevouringPlague.png", "ranks": 2, "desc":["Your Devouring Plague instantly deals damage equal to 15% of its total periodic effect.", "Your Devouring Plague instantly deals damage equal to 30% of its total periodic effect."]}
      , {
	  "row": 2, "col": 1, "name": "Shadowform", "img": "./icon/Spell_Shadow_Shadowform.png", "ranks": 1, "spell":{
	  "name": "Shadowform", "desc": "Assume a Shadowform, increasing your Shadow damage by 15%, reducing all damage done to you by 15%, and increasing all party and raid members spell haste by 5%. However, you may not cast Holy spells while in this form.", "cast": "Instant", "cost": "13% Base mana", "cooldown": "1.5 Sec", "icon":"./icon/Spell_Shadow_Shadowform.png"}
      , "desc":["Assume a Shadowform, increasing your Shadow damage by 15%, reducing all damage done to you by 15%, and increasing all party and raid members spell haste by 5%. However, you may not cast Holy spells while in this form."]}
      , {
      "row": 2, "col": 2, "name": "Phantasm", "img": "./icon/Spell_Shadow_TwistedFaith.png", "ranks": 2, "desc":["Your Fade ability now has a 50% chance to remove all movement impairing effects.", "Your Fade ability now has a 100% chance to remove all movement impairing effects."]}
      , {
      "row": 5, "col": 2, "name": "Shadowy Apparition", "img": "./icon/ability_priest_shadowyapparition.png", "ranks": 3, "desc":["When you deal periodic damage with your Shadow Word: Pain, you have a 4% chance to summon a shadow version of yourself which will slowly move towards a target which is afflicted by your Shadow Word: Pain. Once reaching the target, it will instantly deal 585 shadow damage.<br/><br/>While moving, the chance to summon the shadowy apparation is increased to 20%. You can have up to 4 Shadowy Apparitions active at a time.", "When you deal periodic damage with your Shadow Word: Pain, you have a 8% chance to summon a shadow version of yourself which will slowly move towards a target which is afflicted by your Shadow Word: Pain. Once reaching the target, it will instantly deal 585 shadow damage. <br/><br/>While moving, the chance to summon the shadowy apparation is increased to 40%. You can have up to 4 Shadowy Apparitions active at a time.", "When you deal periodic damage with your Shadow Word: Pain, you have a 12% chance to summon a shadow version of yourself which will slowly move towards a target which is afflicted by your Shadow Word: Pain. Once reaching the target, it will instantly deal 585 shadow damage. <br/><br/>While moving, the chance to summon the shadowy apparation is increased to 60%. You can have up to 4 Shadowy Apparitions active at a time."]}
      , {
	  "row": 5, "col": 0, "name": "Psychic Horror", "img": "./icon/Spell_Shadow_PsychicHorrors.png", "ranks": 1, "spell":{
	  "name": "Psychic Horror", "desc": "You terrify the target, causing them to tremble in horror for 3 sec and drop their main hand and ranged weapons for 10 sec.", "cast": "Instant", "cost": "16% Base mana", "cooldown": "2 Min", "range": "30 yd range", "icon":"./icon/Spell_Shadow_PsychicHorrors.png"}
      , "desc":["You terrify the target, causing them to tremble in horror for 3 sec and drop their main hand and ranged weapons for 10 sec."]}
      , {
	  "row": 4, "col": 1, "name": "Vampiric Touch", "img": "./icon/Spell_Holy_Stoicism.png", "ranks": 1, "spell":{
	  "name": "Vampiric Touch", "desc": "Causes 815 Shadow damage over 15 sec, and when you deal damage with Mind Blast to an affected target you cause up to 10 party or raid members to gain 1% of their maximum mana per 10 sec.", "cast": "1.5 Sec", "cost": "16% Base mana", "range": "40 yd range", "icon":"./icon/Spell_Holy_Stoicism.png"}
      , "desc": ["Causes 815 Shadow damage over 15 sec, and when you deal damage with Mind Blast to an affected target you cause up to 10 party or raid members to gain 1% of their maximum mana per 10 sec."], "reqRow": 3, "reqCol": 1, "reqRank":1}
      , {
      "row": 4, "col": 0, "name": "Pain and Suffering", "img": "./icon/Spell_Shadow_PainAndSuffering.png", "ranks": 2, "desc":["Your Mind Flay has a 30% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 20%.", "Your Mind Flay has a 60% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 40%."]}
      , {
      "row": 6, "col": 1, "name": "Dispersion", "img": "./icon/Spell_Shadow_Dispersion.png", "ranks": 1, "desc":["You disperse into pure Shadow energy, reducing all damage taken by 90%. You are unable to attack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec.<br/><br/>Dispersion can be cast while stunned, feared or silenced. Clears all snare and movement impairing effects when cast, and makes you immune to them while dispersed."]}
      , {
      "row": 5, "col": 1, "name": "Sin and Punishment", "img": "./icon/Spell_Holy_PrayerofShadowProtection.png", "ranks": 2, "desc": ["When your Vampiric Touch is dispelled, the dispeller and all nearby enemy targets within 6 yards have a 50% chance to be instantly feared in horror for 3 sec.<br/><br/>When your Mind Flay critically hits, the cooldown of your Shadowfiend is reduced by 5 sec.", "When your Vampiric Touch is dispelled, the dispeller and all nearby enemy targets within 6 yards have a 100% chance to be instantly feared in horror for 3 sec.<br/><br/>When your Mind Flay critically hits, the cooldown of your Shadowfiend is reduced by 10 sec."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 2, "col": 3, "name": "Harnessed Shadows", "img": "./icon/INV_Misc_Orb_04.png", "ranks": 2, "desc":["Increases the chance for you to gain a Shadow Orb when dealing damage with your Mind Flay and Shadow Word: Pain by 4%, and you have a 50% chance to gain a Shadow Orb when critically hit by any attack.", "Increases the chance for you to gain a Shadow Orb when dealing damage with your Mind Flay and Shadow Word: Pain by 8%, and you have a 100% chance to gain a Shadow Orb when critically hit by any attack."]}
      , {
      "row": 4, "col": 2, "name": "Paralysis", "img": "./icon/Ability_Rogue_MasterOfSubtlety.png", "ranks": 2, "desc":["When you critically hit with your Mind Blast, you cause the target to be unable to move for 2 sec.", "When you critically hit with your Mind Blast, you cause the target to be unable to move for 4 sec."]}
      , {
      "row": 1, "col": 3, "name": "Twisted Faith", "img": "./icon/Spell_Shadow_MindTwisting.png", "ranks": 2, "desc":["Increases your Shadow spell damage by 1%, and grants you spell hit rating equal to 50% of any Spirit gained from items or effects.", "Increases your Shadow spell damage by 2%, and grants you spell hit rating equal to 100% of any Spirit gained from items or effects."]}
      , {
      "row": 3, "col": 2, "name": "Masochism", "img": "./icon/Spell_Shadow_Misery.png", "ranks": 2, "desc": ["When you take a damaging attack equal to or greater than 10% of your total health or damage yourself with your Shadow Word: Death, you instantly gain 5% of your total mana.", "When you take a damaging attack equal to or greater than 10% of your total health or damage yourself with your Shadow Word: Death, you instantly gain 10% of your total mana."], "reqRow": 3, "reqCol": 1, "reqRank":1}
     ]}
]}

