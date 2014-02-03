{
  "name": "Hunter", "tabs":[ {
      "name": "Beast Mastery", "background": "../img/HunterBeastMastery.png", "desc": "A master of the wild who can tame a wide variety of beasts to assist him in combat.", "icon": "../icon/ability_hunter_bestialdiscipline.png", "type": 8, "mastery":{
      "name": "Master of Beasts", "desc":"Increases the damage done by your pets by 13%. Each poiint of Mastery increases pet damage by an additional 1.67%."}
      , "primaries":[ {
      "name": "Intimidation", "desc": "Command your pet to intimidate the target, causing a high amount of threat and stunning the target for 3 sec. Lasts 15 sec.", "cast": "Instant", "cooldown": "1 Min", "range": "100 yd range", "icon":"../icon/Ability_Devour.png"}
      , {
      "name": "Animal Handler", "desc": "Attack Power increased by 30%.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Ability_Hunter_AnimalHandler.png"}
      ], "talents":[ {
      "row": 0, "col": 1, "name": "One with Nature", "img": "../icon/ability_hunter_onewithnature.png", "ranks": 3, "desc":["Increases the attack power bonus of your Aspect of the Hawk by 10%, and increases the amount of Focus restored by your Aspect of the Fox by 1.", "Increases the attack power bonus of your Aspect of the Hawk by 20%, and increases the amount of Focus restored by your Aspect of the Fox by 2.", "Increases the attack power bonus of your Aspect of the Hawk by 30%, and increases the amount of Focus restored by your Aspect of the Fox by 3."]}
      , {
      "row": 0, "col": 2, "name": "Bestial Discipline", "img": "../icon/ability_hunter_bestialdiscipline.png", "ranks": 3, "desc":["Increases the Focus regeneration of your pets by 10%.", "Increases the Focus regeneration of your pets by 20%.", "Increases the Focus regeneration of your pets by 30%."]}
      , {
      "row": 0, "col": 0, "name": "Improved Kill Command", "img": "../icon/Ability_Hunter_SilentHunter.png", "ranks": 2, "desc":["Increases the critical strike chance of your Kill Command by 5%.", "Increases the critical strike chance of your Kill Command by 10%."]}
      , {
      "row": 1, "col": 0, "name": "Pathfinding", "img": "../icon/ability_hunter_pathfinding2.png", "ranks": 2, "desc":["Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 4%, and increases your speed while mounted by 5%. The mounted movement speed increase does not stack with other effects.", "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 8%, and increases your speed while mounted by 10%. The mounted movement speed increase does not stack with other effects."]}
      , {
      "row": 2, "col": 1, "name": "Fervor", "img": "../icon/Ability_Hunter_AspectoftheViper.png", "ranks": 1, "desc":["Instantly restores 50 Focus to you and your pet."]}
      , {
      "row": 1, "col": 3, "name": "Improved Mend Pet", "img": "../icon/Ability_Hunter_MendPet.png", "ranks": 2, "desc":["Gives the Mend Pet ability a 25% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.", "Gives the Mend Pet ability a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."]}
      , {
      "row": 1, "col": 2, "name": "Frenzy", "img": "../icon/INV_Misc_MonsterClaw_03.png", "ranks": 3, "desc":["Your pet gains 2% attack speed after attacking with a Basic Attack, lasting for 10 sec and stacking up to 5 times.", "Your pet gains 4% attack speed after attacking with a Basic Attack, lasting for 10 sec and stacking up to 5 times.", "Your pet gains 6% attack speed after attacking with a Basic Attack, lasting for 10 sec and stacking up to 5 times."]}
      , {
      "row": 1, "col": 1, "name": "Spirit Bond", "img": "../icon/Ability_Druid_DemoralizingRoar.png", "ranks": 2, "desc":["While your pet is active, you and your pet will regenerate 1% of total health every 10 sec., and increases healing done to you and your pet by 5%.", "While your pet is active, you and your pet will regenerate 2% of total health every 10 sec., and increases healing done to you and your pet by 10%."]}
      , {
      "row": 4, "col": 2, "name": "Ferocious Inspiration", "img": "../icon/Ability_Hunter_FerociousInspiration.png", "ranks": 1, "desc":["All party and raid members have all damage increased by 3% within 100 yards of your pet."]}
      , {
      "row": 2, "col": 2, "name": "Focus Fire", "img": "../icon/ability_hunter_focusfire.png", "ranks": 1, "desc": ["Consumes your pet's Frenzy Effect stack, restoring 4 Focus to your pet and increasing your ranged haste by 3% for each Frenzy Effect stack consumed. Lasts for 20 sec."], "reqRow": 1, "reqCol": 2, "reqRank":3}
      , {
      "row": 5, "col": 2, "name": "Invigoration", "img": "../icon/Ability_Hunter_Invigeration.png", "ranks": 2, "desc": ["When your pet scores a critical hit with a Basic Attack, you instantly regenerate 3 Focus.", "When your pet scores a critical hit with a Basic Attack, you instantly regenerate 6 Focus."], "reqRow": 4, "reqCol": 2, "reqRank":1}
      , {
	  "row": 4, "col": 1, "name": "Bestial Wrath", "img": "../icon/Ability_Druid_FerociousBite.png", "ranks": 1, "spell":{
	  "name": "Bestial Wrath", "desc": "Send your pet into a rage causing 20% additional damage for 10 sec. The beast does not feel pity or remorse or fear and it cannot be stopped unless killed.", "cast": "Instant", "cooldown": "2 Min", "range": "100 yd range", "icon":"../icon/Ability_Druid_FerociousBite.png"}
      , "desc": ["Send your pet into a rage causing 20% additional damage for 10 sec. The beast does not feel pity or remorse or fear and it cannot be stopped unless killed."], "reqRow": 2, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 2, "name": "Killing Streak", "img": "../icon/achievement_bg_kill_carrier_opposing_flagroom.png", "ranks": 2, "desc":["When you score two Kill Command critical hits in a row, your third will deal 10% more damage and have its cost reduced by 5 Focus.", "When you score two Kill Command critical hits in a row, your third will deal 20% more damage and have its cost reduced by 10 Focus."]}
      , {
      "row": 2, "col": 0, "name": "Cobra Strikes", "img": "../icon/Ability_Hunter_CobraStrikes.png", "ranks": 3, "desc":["You have a 5% chance when you hit with Arcane Shot to cause your pet's next 2 Basic Attacks to critically hit.", "You have a 10% chance when you hit with Arcane Shot to cause your pet's next 2 Basic Attacks to critically hit.", "You have a 15% chance when you hit with Arcane Shot to cause your pet's next 2 Basic Attacks to critically hit."]}
      , {
      "row": 3, "col": 0, "name": "Longevity", "img": "../icon/Ability_Hunter_Longevity.png", "ranks": 3, "desc":["Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 10%.", "Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 20%.", "Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 30%."]}
      , {
      "row": 5, "col": 1, "name": "The Beast Within", "img": "../icon/Ability_Hunter_BeastWithin.png", "ranks": 1, "desc": ["While your pet is under the effects of Bestial Wrath, you also go into a rage causing 10% additional damage and reducing the focus cost of all shots and abilities by 50% for 10 sec."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 5, "col": 0, "name": "Kindred Spirits", "img": "../icon/Ability_Hunter_SeparationAnxiety.png", "ranks": 2, "desc":["Increases you and your pet's maximum Focus by 5.", "Increases you and your pet's maximum Focus by 10."]}
      , {
      "row": 6, "col": 1, "name": "Beast Mastery", "img": "../icon/Ability_Hunter_BeastMastery.png", "ranks": 1, "desc":["You master the art of beast training, teaching you the ability to tame Exotic pets and increasing your total number of Pet Skill Points by 4."]}
      , {
      "row": 4, "col": 0, "name": "Crouching Tiger, Hidden Chimera", "img": "../icon/ability_hunter_pet_chimera.png", "ranks": 2, "desc":["Whenever you are hit by a melee attack, the cooldown of your Disengage is instantly reduced by 2 sec.<br/><br/>Whenever you are hit by a ranged attack or spell, the cooldown of your Deterrence is instantly reduced by 4 sec.<br/><br/>These effects have a 2 sec cooldown.", "Whenever you are hit by a melee attack, the cooldown of your Disengage is instantly reduced by 4 sec.<br/><br/>Whenever you are hit by a ranged attack or spell, the cooldown of your Deterrence is instantly reduced by 8 sec.<br/><br/>These effects have a 2 sec cooldown."]}
     ]}
     ,
     {
      "name": "Marksmanship", "background": "../img/HunterMarksmanship.png", "desc": "A master archer or sharpshooter who excels in bringing down enemies from far.", "icon": "../icon/Ability_Hunter_FocusedAim.png", "type": 8, "mastery":{
      "name": "WildQuiver", "desc":"Grants a 16.8% chance for your ranged attacks to also instantly fire an additional ranget shot.Each point of Mastery increases the chance by an additional 2.1%."}
      , "primaries":[ {
      "name": "Aimed shot", "desc": "A powerful aimed shot that deals 160% ranged weapon damage plus 404.", "cast": "2.9 Sec", "cost": "50 Focus", "range": "40 yd range", "icon":"../icon/INV_Spear_07.png"}
      , {
      "name": "Artisan Quiver", "desc": "Auto Shot damage increased by 15%.", "rank": "Passive", "cast": "Instant", "icon":"../icon/inv_misc_quiver_06.png"}
      ], "talents":[ {
      "row": 0, "col": 2, "name": "Rapid Killing", "img": "../icon/Ability_Hunter_RapidKilling.png", "ranks": 2, "desc":["After killing an opponent that yields experience or honor, your next Aimed Shot, Steady Shot or Cobra Shot causes 10% additional damage. Lasts 20 sec.", "After killing an opponent that yields experience or honor, your next Aimed Shot, Steady Shot or Cobra Shot causes 20% additional damage. Lasts 20 sec."]}
      , {
      "row": 0, "col": 1, "name": "Efficiency", "img": "../icon/Ability_Hunter_FocusedAim.png", "ranks": 3, "desc":["Reduces the Focus cost of your Arcane Shot by 1, and your Explosive Shot and Chimera Shot by 2.", "Reduces the Focus cost of your Arcane Shot by 2, and your Explosive Shot and Chimera Shot by 4.", "Reduces the Focus cost of your Arcane Shot by 3, and your Explosive Shot and Chimera Shot by 6."]}
      , {
      "row": 0, "col": 0, "name": "Go for the Throat", "img": "../icon/Ability_Hunter_GoForTheThroat.png", "ranks": 2, "desc":["Your ranged auto-shot critical hits cause your pet to generate 5 Focus.", "Your ranged auto-shot critical hits cause your pet to generate 10 Focus."]}
      , {
      "row": 1, "col": 0, "name": "Sic 'Em!", "img": "../icon/ability_hunter_sickem.png", "ranks": 2, "desc": ["When you critically hit with your Arcane Shot, Aimed Shot or Explosive Shot the Focus cost of your pet's next Basic Attack is reduced by 50% for 12 sec.", "When you critically hit with your Arcane Shot, Aimed Shot or Explosive Shot the Focus cost of your pet's next Basic Attack is reduced by 100% for 12 sec."], "reqRow": 0, "reqCol": 0, "reqRank":2}
      , {
      "row": 1, "col": 2, "name": "Careful Aim", "img": "../icon/Ability_Hunter_ZenArchery.png", "ranks": 2, "desc":["Increases the critical strike chance of your Steady Shot, Cobra Shot and Aimed Shot by 30% on targets who are above 90% health.", "Increases the critical strike chance of your Steady Shot, Cobra Shot and Aimed Shot by 60% on targets who are above 90% health."]}
      , {
      "row": 1, "col": 1, "name": "Improved Steady Shot", "img": "../icon/Ability_Hunter_ImprovedSteadyShot.png", "ranks": 3, "desc":["When you Steady Shot twice in a row, your ranged attack speed will be increased by 5% for 8 sec.", "When you Steady Shot twice in a row, your ranged attack speed will be increased by 10% for 8 sec.", "When you Steady Shot twice in a row, your ranged attack speed will be increased by 15% for 8 sec."]}
      , {
      "row": 4, "col": 3, "name": "Readiness", "img": "../icon/Ability_Hunter_Readiness.png", "ranks": 1, "desc":["When activated, this ability immediately finishes the cooldown on all Hunter abilities."]}
      , {
      "row": 2, "col": 1, "name": "Concussive Barrage", "img": "../icon/ability_hunter_efficiency.png", "ranks": 2, "desc":["Your successful Chimera Shot and Multi-Shot attacks have a 50% chance to daze the target for 4 sec.", "Your successful Chimera Shot and Multi-Shot attacks have a 100% chance to daze the target for 4 sec."]}
      , {
      "row": 3, "col": 0, "name": "Bombardment", "img": "../icon/Ability_Marksmanship.png", "ranks": 2, "desc":["When you critically hit with Multi-Shot, the focus cost of Multi-Shot is reduced by 25% for 5 sec.", "When you critically hit with Multi-Shot, the focus cost of Multi-Shot is reduced by 50% for 5 sec."]}
      , {
      "row": 3, "col": 1, "name": "Trueshot Aura", "img": "../icon/Ability_TrueShot.png", "ranks": 1, "desc":["Increases melee attack power by 20% and ranged attack power by 10% of party and raid members within 100 yards."]}
      , {
      "row": 3, "col": 2, "name": "Termination", "img": "../icon/Ability_Warrior_FocusedRage.png", "ranks": 2, "desc":["Your Steady Shot and Cobra Shot abilities grant an additional 3 Focus when dealt on targets at or below 25% health.", "Your Steady Shot and Cobra Shot abilities grant an additional 6 Focus when dealt on targets at or below 25% health."]}
      , {
      "row": 4, "col": 1, "name": "Master Marksman", "img": "../icon/Ability_Hunter_MasterMarksman.png", "ranks": 3, "desc":["You have a 20% chance when you Steady Shot to gain the Master Marksman effect, lasting 30 sec. After reaching 5 stacks, your next Aimed Shot's cast time and focus cost are reduced by 100% for 10 sec.", "You have a 40% chance when you Steady Shot to gain the Master Marksman effect, lasting 30 sec. After reaching 5 stacks, your next Aimed Shot's cast time and focus cost are reduced by 100% for 10 sec.", "You have a 60% chance when you Steady Shot to gain the Master Marksman effect, lasting 30 sec. After reaching 5 stacks, your next Aimed Shot's cast time and focus cost are reduced by 100% for 10 sec."]}
      , {
      "row": 3, "col": 3, "name": "Resistance is Futile", "img": "../icon/ability_hunter_resistanceisfutile.png", "ranks": 2, "desc":["When your marked target attempts to run, flee or move, you have a 4% chance to cause your next Kill Command on the marked target within 8 sec to refund the Focus cost.", "When your marked target attempts to run, flee or move, you have a 8% chance to cause your next Kill Command on the marked target within 8 sec to refund the Focus cost."]}
      , {
      "row": 4, "col": 0, "name": "Rapid Recuperation", "img": "../icon/Ability_Hunter_RapidRegeneration.png", "ranks": 2, "desc":["You gain 6 focus every 3 sec while under the effect of Rapid Fire, and you gain 25 Focus instantly when you gain Rapid Killing.", "You gain 12 focus every 3 sec while under the effect of Rapid Fire, and you gain 50 Focus instantly when you gain Rapid Killing."]}
      , {
	  "row": 2, "col": 0, "name": "Silencing Shot", "img": "../icon/Ability_TheBlackArrow.png", "ranks": 1, "spell":{
	  "name": "Silencing Shot", "desc": "A shot that silences the target and interrupts spellcasting for 3 sec.", "cast": "Instant", "cooldown": "20 Sec", "range": "35 yd range", "icon":"../icon/Ability_TheBlackArrow.png"}
      , "desc":["A shot that silences the target and interrupts spellcasting for 3 sec."]}
      , {
      "row": 5, "col": 0, "name": "Posthaste", "img": "../icon/ability_hunter_posthaste.png", "ranks": 2, "desc":["Reduces the cooldown of your Rapid Fire by 1 min, and your movement speed is increased by 15% for 4 sec after you use Disengage.", "Reduces the cooldown of your Rapid Fire by 2 min, and your movement speed is increased by 30% for 4 sec after you use Disengage."]}
      , {
      "row": 5, "col": 2, "name": "Marked for Death", "img": "../icon/Ability_Hunter_Assassinate.png", "ranks": 2, "desc": ["Your Arcane Shot and Chimera Shot have a 50% chance to automatically apply the Marked for Death effect.<br/><br/>Marked for Death is the same as Hunter's Mark, but is undispellable, does not grant unerring sight of the target, and lasts for 15 sec.", "Your Arcane Shot and Chimera Shot have a 100% chance to automatically apply the Marked for Death effect.<br/><br/>Marked for Death is the same as Hunter's Mark, but is undispellable, does not grant unerring sight of the target, and lasts for 15 sec."], "reqRow": 4, "reqCol": 1, "reqRank":3}
      , {
	  "row": 6, "col": 1, "name": "Chimera Shot", "img": "../icon/Ability_Hunter_ChimeraShot2.png", "ranks": 1, "spell":{
	  "name": "Chimera Shot", "desc": "An instant shot that causes ranged weapon Nature damage plus , refreshing the duration of your Serpent Sting and healing you for 5% of your total health.", "cast": "Instant", "cost": "50 Focus", "cooldown": "10 Sec", "range": "40 yd range", "icon":"../icon/Ability_Hunter_ChimeraShot2.png"}
      , "desc": ["An instant shot that causes ranged weapon Nature damage plus , refreshing the duration of your Serpent Sting and healing you for 5% of your total health."], "reqRow": 4, "reqCol": 1, "reqRank":3}
      , {
      "row": 2, "col": 2, "name": "Piercing Shots", "img": "../icon/Ability_Hunter_PiercingShots.png", "ranks": 3, "desc":["Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 10% of the damage dealt over 8 sec.", "Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 20% of the damage dealt over 8 sec.", "Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 30% of the damage dealt over 8 sec."]}
     ]}
     ,
     {
      "name": "Survival", "background": "../img/HunterSurvival.png", "desc": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.", "icon": "../icon/ability_hunter_camouflage.png", "type": 8, "mastery":{
      "name": "Essence of the Viper", "desc":"Increases all magical damage you deal by 8%. Each point of Mastery increases magical damage by an additional 1.0%."}
      , "primaries":[ {
      "name": "Explosive shot", "desc": "You fire an explosive charge into the enemy target, dealing 601 Fire damage. The charge will blast the target every second for an additional 2 sec.", "cast": "Instant", "cost": "50 Focus", "cooldown": "6 Sec", "range": "40 yd range", "icon":"../icon/Ability_Hunter_ExplosiveShot.png"}
      , {
      "name": "Into the Wilderness", "desc": "Agility increased by 10%.", "rank": "Passive", "cast": "Instant", "icon":"../icon/Achievement_Zone_AlteracMountains_01.png"}
      ], "talents":[ {
      "row": 0, "col": 1, "name": "Pathing", "img": "../icon/Ability_Hunter_ImprovedTracking.png", "ranks": 3, "desc":["Increases ranged haste by 1%.", "Increases ranged haste by 2%.", "Increases ranged haste by 3%."]}
      , {
      "row": 1, "col": 2, "name": "Entrapment", "img": "../icon/Spell_Nature_StrangleVines.png", "ranks": 2, "desc":["When your Ice Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 2 sec.", "When your Ice Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 4 sec."]}
      , {
      "row": 0, "col": 0, "name": "Hunter vs. Wild", "img": "../icon/Ability_Hunter_HunterVsWild.png", "ranks": 3, "desc":["Increases your total Stamina by 5%.", "Increases your total Stamina by 10%.", "Increases your total Stamina by 15%."]}
      , {
      "row": 1, "col": 0, "name": "Survival Tactics", "img": "../icon/Ability_Rogue_FeignDeath.png", "ranks": 2, "desc":["Reduces the chance that your trap spells will be resisted by 2%, and reduces the cooldown of your Disengage ability by 2 sec.", "Reduces the chance that your trap spells will be resisted by 4%, and reduces the cooldown of your Disengage ability by 4 sec."]}
      , {
	  "row": 2, "col": 1, "name": "Counterattack", "img": "../icon/Ability_Warrior_Challange.png", "ranks": 1, "spell":{
	  "name": "Counterattack", "desc": "A strike that becomes active after parrying an opponent's attack. This attack deals 409 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.", "cast": "Instant", "cooldown": "5 Sec", "range": "Melee Range", "icon":"../icon/Ability_Warrior_Challange.png"}
      , "desc":["A strike that becomes active after parrying an opponent's attack. This attack deals 409 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."]}
      , {
      "row": 0, "col": 2, "name": "Improved Serpent Sting", "img": "../icon/Ability_Hunter_Quickshot.png", "ranks": 2, "desc":["Your Serpent Sting also does instant damage equal to 15% of its total periodic effect.<br/><br/>Also increases the periodic critical strike chance of your Serpent Sting by 5%.", "Your Serpent Sting also does instant damage equal to 30% of its total periodic effect.<br/><br/>Also increases the periodic critical strike chance of your Serpent Sting by 10%."]}
      , {
      "row": 2, "col": 2, "name": "Lock and Load", "img": "../icon/Ability_Hunter_LockAndLoad.png", "ranks": 2, "desc":["You have a 50% chance when you trap a target with Freezing Trap or Ice Trap to cause your next two Explosive Shots to cost no Focus and trigger no cooldown. Effect lasts for 12 sec.", "You have a 100% chance when you trap a target with Freezing Trap or Ice Trap to cause your next two Explosive Shots to cost no Focus and trigger no cooldown. Effect lasts for 12 sec."]}
      , {
      "row": 3, "col": 0, "name": "Resourcefulness", "img": "../icon/Ability_Hunter_Resourcefulness.png", "ranks": 3, "desc":["Reduces the cooldown of all traps and Black Arrow by 2 sec.", "Reduces the cooldown of all traps and Black Arrow by 4 sec.", "Reduces the cooldown of all traps and Black Arrow by 6 sec."]}
      , {
      "row": 3, "col": 2, "name": "T.N.T.", "img": "../icon/INV_Misc_Bomb_05.png", "ranks": 2, "desc": ["When you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow you have a 10% chance to trigger Lock and Load.", "When you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow you have a 20% chance to trigger Lock and Load."], "reqRow": 2, "reqCol": 2, "reqRank":2}
      , {
      "row": 4, "col": 0, "name": "Toxicology", "img": "../icon/inv_alchemy_enchantedvial.png", "ranks": 2, "desc":["Increases the periodic critical damage of your Serpent Sting and Black Arrow by 50%.", "Increases the periodic critical damage of your Serpent Sting and Black Arrow by 100%."]}
      , {
	  "row": 4, "col": 1, "name": "Wyvern Sting", "img": "../icon/INV_Spear_02.png", "ranks": 1, "spell":{
	  "name": "Wyvern Sting", "desc": "A stinging shot that puts the target to sleep for 30 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 2739 Nature damage over 6 sec. Only one Sting per Hunter can be active on the target at a time.", "cast": "Instant", "cost": "10 Focus", "cooldown": "1 Min", "range": "35 yd range", "icon":"../icon/INV_Spear_02.png"}
      , "desc":["A stinging shot that puts the target to sleep for 30 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 2739 Nature damage over 6 sec. Only one Sting per Hunter can be active on the target at a time."]}
      , {
      "row": 1, "col": 3, "name": "Point of No Escape", "img": "../icon/Ability_Hunter_PointofNoEscape.png", "ranks": 2, "desc":["Increases the ranged critical strike chance of all of your attacks on targets affected by your Ice Trap and Freezing Trap by 3%.", "Increases the ranged critical strike chance of all of your attacks on targets affected by your Ice Trap and Freezing Trap by 6%."]}
      , {
      "row": 4, "col": 2, "name": "Noxious Stings", "img": "../icon/Ability_Hunter_PotentVenom.png", "ranks": 2, "desc": ["Increases your ranged damage done on targets afflicted by your Serpent Sting by 5%.<br/><br/>If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 25% of the duration remaining.", "Increases your ranged damage done on targets afflicted by your Serpent Sting by 10%.cIf Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 50% of the duration remaining."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 4, "col": 3, "name": "Hunting Party", "img": "../icon/Ability_Hunter_HuntingParty.png", "ranks": 1, "desc":["Increases your total Agility by an additional 2%, and increases the ranged and melee attack speed of all party and raid members by 10%."]}
      , {
      "row": 5, "col": 0, "name": "Sniper Training", "img": "../icon/Ability_Hunter_LongShots.png", "ranks": 3, "desc":["Increases the critical strike chance of your Kill Shot ability by 5%, and after remaining stationary for 6 sec, your Steady Shot and Cobra Shot deal 2% more damage for 15 sec.", "Increases the critical strike chance of your Kill Shot ability by 10%, and after remaining stationary for 6 sec, your Steady Shot and Cobra Shot deal 4% more damage for 15 sec.", "Increases the critical strike chance of your Kill Shot ability by 15%, and after remaining stationary for 6 sec, your Steady Shot and Cobra Shot deal 6% more damage for 15 sec."]}
      , {
	  "row": 6, "col": 1, "name": "Black Arrow", "img": "../icon/Spell_Shadow_PainSpike.png", "ranks": 1, "spell":{
	  "name": "Black Arrow", "desc": "Fires a Black Arrow at the target, dealing 10 Shadow damage over 20 sec. Black Arrow shares a cooldown with other Fire Trap spells.", "cast": "Instant", "cost": "35 Focus", "cooldown": "30 Sec", "range": "40 yd range", "icon":"../icon/Spell_Shadow_PainSpike.png"}
      , "desc": ["Fires a Black Arrow at the target, dealing 10 Shadow damage over 20 sec. Black Arrow shares a cooldown with other Fire Trap spells."], "reqRow": 4, "reqCol": 1, "reqRank":1}
      , {
      "row": 3, "col": 1, "name": "Mirrored Blades", "img": "../icon/inv_weapon_shortblade_99.png", "ranks": 2, "desc":["When attacked by a spell while in Deterrence, you have a 50% chance to reflect it back at the attacker.", "When attacked by a spell while in Deterrence, you have a 100% chance to reflect it back at the attacker."]}
      , {
      "row": 2, "col": 0, "name": "Thrill of the Hunt", "img": "../icon/Ability_Hunter_ThrilloftheHunt.png", "ranks": 3, "desc":["You have a 5% chance when you use Arcane Shot, Explosive Shot or Black Arrow to instantly regain 40% of the base Focus cost of the shot.", "You have a 10% chance when you use Arcane Shot, Explosive Shot or Black Arrow to instantly regain 40% of the base Focus cost of the shot.", "You have a 15% chance when you use Arcane Shot, Explosive Shot or Black Arrow to instantly regain 40% of the base Focus cost of the shot."]}
      , {
      "row": 1, "col": 1, "name": "Trap Mastery", "img": "../icon/Ability_Ensnare.png", "ranks": 3, "desc":["Ice Trap and Freezing Trap - Increases the duration by 10%.<br/><br/>Immolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 10%.<br/><br/>Snake Trap - Increases the number of snakes summoned by 2.", "Ice Trap and Freezing Trap - Increases the duration by 20%.<br/><br/>Immolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 20%.<br/><br/>Snake Trap - Increases the number of snakes summoned by 4.", "Ice Trap and Freezing Trap - Increases the duration by 30%.<br/><br/>Immolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 30%.<br/><br/>Snake Trap - Increases the number of snakes summoned by 6."]}
      , {
      "row": 5, "col": 2, "name": "Serpent Spread", "img": "../icon/Ability_Hunter_SerpentSwiftness.png", "ranks": 2, "desc":["Targets hit by your Multi-Shot are also afflicted by your Serpent Sting equal to 6 sec of its total duration.", "Targets hit by your Multi-Shot are also afflicted by your Serpent Sting equal to 9 sec of its total duration."]}
     ]}
]}

