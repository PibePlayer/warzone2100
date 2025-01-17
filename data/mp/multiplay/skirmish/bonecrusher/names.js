debugMsg('Module: names.js','init');

//Цвета
const colors = ["Green","Orange","Grey","Black","Red","Blue","Pink","Cyan","Yellow","Purple","White","Bright blue","Neon green","Infrared","Ultraviolet","Brown"];

const droidTypes = [
	"DROID_WEAPON",  ///< Weapon droid
	"DROID_SENSOR",           ///< Sensor droid
	"DROID_ECM",              ///< ECM droid
	"DROID_CONSTRUCT",        ///< Constructor droid
	"DROID_PERSON",           ///< person
	"DROID_CYBORG",           ///< cyborg-type thang
	"DROID_TRANSPORTER",      ///< guess what this is!
	"DROID_COMMAND",          ///< Command droid
	"DROID_REPAIR",           ///< Repair droid
	"DROID_DEFAULT",          ///< Default droid
	"DROID_CYBORG_CONSTRUCT", ///< cyborg constructor droid - new for update 28/5/99
	"DROID_CYBORG_REPAIR",    ///< cyborg repair droid - new for update 28/5/99
	"DROID_CYBORG_SUPER",     ///< cyborg repair droid - new for update 7/6/99
	"DROID_SUPERTRANSPORTER", ///< SuperTransport (MP)
	"DROID_ANY"               ///< Any droid. Used as a parameter for various stuff.
];

var droidOrders = [
	"DORDER_NONE",   /**< no order set. */

	"DORDER_STOP",            /**< stop the current order. */
	"DORDER_MOVE",            /**< 2 - move to a location. */
	"DORDER_ATTACK",          /**< attack an enemy. */
	"DORDER_BUILD",           /**< 4 - build a structure. */
	"DORDER_HELPBUILD",       /**< help to build a structure. */
	"DORDER_LINEBUILD",       /**< 6 - build a number of structures in a row (walls + bridges). */
	"DORDER_DEMOLISH",        /**< demolish a structure. */
	"DORDER_REPAIR",          /**< 8 - repair a structure. */
	"DORDER_OBSERVE",         /**< keep a target in sensor view. */
	"DORDER_FIRESUPPORT",     /**< 10 - attack whatever the linked sensor droid attacks. */
	"DORDER_RETREAT",         /**< return to the players retreat position. */
	"DORDER_UNUSED_2",
	"DORDER_RTB",             /**< return to base. */
	"DORDER_RTR",             /**< 14 - return to repair at any repair facility. */
	"DORDER_RUN",             /**< run away after moral failure. */
	"DORDER_EMBARK",          /**< 16 - board a transporter. */
	"DORDER_DISEMBARK",       /**< get off a transporter. */
	"DORDER_ATTACKTARGET",    /**< 18 - a suggestion to attack something i.e. the target was chosen because the droid could see it. */
	"DORDER_COMMANDERSUPPORT",/**< Assigns droid to the target commander. */
	"DORDER_BUILDMODULE",     /**< 20 - build a module (power, research or factory). */
	"DORDER_RECYCLE",         /**< return to factory to be recycled. */
	"DORDER_TRANSPORTOUT",    /**< 22 - offworld transporter order. */
	"DORDER_TRANSPORTIN",     /**< onworld transporter order. */
	"DORDER_TRANSPORTRETURN", /**< 24 - transporter return after unloading. */
	"DORDER_GUARD",           /**< guard a structure. */
	"DORDER_DROIDREPAIR",     /**< 26 - repair a droid. */
	"DORDER_RESTORE",         /**< restore resistance points for a structure. */
	"DORDER_SCOUT",           /**< 28 - same as move, but stop if an enemy is seen. */
	"DORDER_UNUSED_3",
	"DORDER_UNUSED",
	"DORDER_PATROL",          /**< move between two way points. */
	"DORDER_REARM",           /**< 32 - order a vtol to rearming pad. */
	"DORDER_RECOVER",         /**< pick up an artifact. */
	"DORDER_LEAVEMAP",        /**< 34 - vtol flying off the map. */
	"DORDER_RTR_SPECIFIED"    /**< return to repair at a specified repair center. */
];
droidOrders[40] = "DORDER_CIRCLE";   /**< circles target location and engage. */
droidOrders[41] = "DORDER_HOLD";     /**< hold position until given next order. */


//Исследования
const research_name = {
	"R-Sys-ECM-Upgrade01" : "Electronic Countermeasures",
	"R-Comp-CommandTurret01" : "Command Turret",
	"R-Comp-SynapticLink" : "Synaptic Link",
	"R-Comp-MissileCodes01" : "Missile Targeting Codes",
	"R-Comp-MissileCodes02" : "Second Level Missile Targeting Codes",
	"R-Comp-MissileCodes03" : "Third Level Missile Firing Codes",
	"R-Cyborg-Armor-Heat01" : "Cyborg Thermal Armor",
	"R-Cyborg-Armor-Heat02" : "Cyborg Thermal Armor Mk2",
	"R-Cyborg-Armor-Heat03" : "Cyborg Thermal Armor Mk3",
	"R-Cyborg-Armor-Heat04" : "Cyborg High Intensity Thermal Armor",
	"R-Cyborg-Armor-Heat05" : "Cyborg High Intensity Thermal Armor Mk2",
	"R-Cyborg-Armor-Heat06" : "Cyborg High Intensity Thermal Armor Mk3",
	"R-Cyborg-Metals01" : "Cyborg Composite Alloys",
	"R-Cyborg-Metals02" : "Cyborg Composite Alloys Mk2",
	"R-Cyborg-Metals03" : "Cyborg Composite Alloys Mk3",
	"R-Cyborg-Metals04" : "Cyborg Dense Composite Alloys",
	"R-Cyborg-Metals05" : "Cyborg Dense Composite Alloys Mk2",
	"R-Cyborg-Metals06" : "Cyborg Dense Composite Alloys Mk3",
	"R-Cyborg-Metals07" : "Cyborg Superdense Composite Alloys",
	"R-Cyborg-Metals08" : "Cyborg Superdense Composite Alloys Mk2",
	"R-Cyborg-Metals09" : "Cyborg Superdense Composite Alloys Mk3",
	"R-Cyborg-Transport" : "Cyborg Transport",
	"R-SuperTransport" : "Super Transport",
	"R-Cyborg-Wpn-BB" : "Bunker Blaster Cyborg",
	"R-Cyborg-Wpn-Cannon" : "Heavy Gunner Cyborg",
	"R-Cyborg-Wpn-Flamer" : "Flamer Cyborg",
	"R-Cyborg-Wpn-MG" : "Machinegunner Cyborg",
	"R-Cyborg-Wpn-BB-Jump" : "Jump Bunker Blaster",
	"R-Cyborg-Wpn-Cannon-Jump" : "Jump Heavy Gunner",
	"R-Cyborg-Wpn-Rocket-Jump" : "Jump Lancer",
	"R-Cyborg-Wpn-RotMG-Jump" : "Jump Assault Gunner",
	"R-Cyborg-Wpn-Rail1-Jump" : "Jump Needle Gunner",
	"R-Cyborg-Wpn-ATMiss-Jump" : "Jump Scourge",
	"R-Cyborg-Wpn-Laser1-Jump" : "Jump Flashlight Gunner",
	"R-Cyborg-Jump01" : "Cyborg Jump Pack",
	"R-Cyborg-Legs01" : "Cyborg Propulsion",
	"R-Cyborg-Legs02" : "Cyborg Propulsion II",
	"R-Cyborg-Legs03" : "Cyborg Propulsion III",
	"R-Defense-HardcreteWall" : "Hardcrete",
	"R-Defense-HardcreteWall-NP" : "NP-Hardcrete",
	"R-Defense-WallUpgrade01" : "Improved Hardcrete",
	"R-Defense-WallUpgrade02" : "Improved Hardcrete Mk2",
	"R-Defense-WallUpgrade03" : "Improved Hardcrete Mk3",
	"R-Defense-WallUpgrade04" : "Supercrete",
	"R-Defense-WallUpgrade05" : "Supercrete Mk2",
	"R-Defense-WallUpgrade06" : "Supercrete Mk3",
	"R-Defense-WallUpgrade07" : "Plascrete",
	"R-Defense-WallUpgrade08" : "Plascrete Mk2",
	"R-Defense-WallUpgrade09" : "Plascrete Mk3",
	"R-Defense-WallUpgrade10" : "Plasteel",
	"R-Defense-WallUpgrade11" : "Plasteel Mk2",
	"R-Defense-WallUpgrade12" : "Plasteel Mk3",
	"R-Defense-HardcreteGate" : "Hardcrete Gate",
	"R-Defense-AASite-QuadBof" : "AA Cyclone Flak Cannon Emplacement",
	"R-Defense-AASite-QuadBof02" : "AA Tornado Flak Cannon Emplacement",
	"R-Defense-AASite-QuadMg1" : "Hurricane AA Site",
	"R-Defense-AASite-QuadRotMg" : "Whirlwind AA Site",
	"R-Defense-AASite-TwinBof" : "Tornado AA Flak Site",
	"R-Defense-Emplacement-HPVcannon" : "Hyper Velocity Cannon Emplacement",
	"R-Defense-Howitzer" : "Howitzer Emplacement",
	"R-Defense-HvyA-Trocket" : "Tank Killer Emplacement",
	"R-Defense-HvyFlamer" : "Inferno Bunker",
	"R-Defense-HvyHowitzer" : "Ground Shaker Emplacement",
	"R-Defense-HvyMor" : "Bombard Pit",
	"R-Defense-IDFRocket" : "Ripple Rocket Battery",
	"R-Defense-MdArtMissile" : "Seraph Missile Battery",
	"R-Defense-HvyArtMissile" : "Archangel Missile Battery",
	"R-Defense-MortarPit" : "Mortar Pit",
	"R-Defense-MRL" : "Mini-Rocket Battery",
	"R-Defense-Pillbox01" : "Machinegun Bunker",
	"R-Defense-Pillbox03" : "Heavy Machinegun Bunker",
	"R-Defense-Pillbox04" : "Light Cannon Bunker",
	"R-Defense-Pillbox05" : "Flamer Bunker",
	"R-Defense-Pillbox06" : "Lancer Tower",
	"R-Defense-PulseLas" : "Pulse Laser Tower",
	"R-DefenssLas" : "Flashlight Emplacement",
	"R-Defense-Rail2" : "Rail Gun Emplacement",
	"R-Defense-Rail3" : "Gauss Cannon Emplacement",
	"R-Defense-RotHow" : "Hellstorm Emplacement",
	"R-Defense-RotMG" : "Rotary MG Bunker",
	"R-Defense-RotMor" : "Pepperpot Pit",
	"R-Defense-SamSite1" : "Avenger SAM Site",
	"R-Defense-SamSite2" : "Vindicator SAM Site",
	"R-Defense-TankTrap01" : "Tank Traps",
	"R-Defense-TankTrap02" : "Dragon's Teeth",
	"R-Defense-Tower01" : "Machinegun Guard Tower",
	"R-Defense-Tower03" : "Heavy Machinegun Tower",
	"R-Defense-Tower04" : "Flamer Tower",
	"R-Defense-Tower05" : "Lancer Tower",
	"R-Defense-Tower06" : "Mini-Rocket Tower",
	"R-Defense-GuardTower-ATMiss" : "Scourge Missile Tower",
	"R-Defense-GuardTower-Rail1" : "Needle Gun Tower",
	"R-Defense-WallTower01" : "Heavy Machinegun Hardpoint",
	"R-Defense-WallTower02" : "Light Cannon Hardpoint",
	"R-Defense-WallTower03" : "Medium Cannon Hardpoint",
	"R-Defense-WallTower04" : "Heavy Cannon Hardpoint",
	"R-Defense-WallTower05" : "Flamer Hardpoint",
	"R-Defense-WallTower06" : "Lancer Hardpoint",
	"R-Defense-Wall-RotMg" : "Assault Gun Hardpoint",
	"R-Defense-Wall-VulcanCan" : "Assault Cannon Hardpoint",
	"R-Defense-WallTower-A-Tmiss" : "Scourge Missile Hardpoint",
	"R-Defense-WallTower-HvyA-Trocket" : "Tank Killer Hardpoint",
	"R-Defense-WallTower-HPVcannon" : "Hyper Velocity Cannon Hardpoint",
	"R-Defense-WallTower-PulseLas" : "Pulse Laser Hardpoint",
	"R-Defense-WallTower-Rail2" : "Rail Gun Hardpoint",
	"R-Defense-WallTower-Rail3" : "Gauss Cannon Hardpoint",
	"R-Struc-CommandRelay" : "Command Relay Post",
	"R-Struc-Factory-Cyborg" : "Cyborg Factory",
	"R-Struc-Factory-Module" : "Factory Module",
	"R-Struc-Factory-Upgrade01" : "Automated Manufacturing",
	"R-Struc-Factory-Upgrade04" : "Robotic Manufacturing",
	"R-Struc-Factory-Upgrade07" : "Advanced Manufacturing",
	"R-Struc-Factory-Upgrade09" : "Self-Replicating Manufacturing",
	"R-Struc-Factory-Upgrade10" : "Advanced Manufacturing Mk3",
	"R-Struc-Materials01" : "Reinforced Base Structure Materials",
	"R-Struc-Materials02" : "Reinforced Base Structure Materials Mk2",
	"R-Struc-Materials03" : "Reinforced Base Structure Materials Mk3",
	"R-Struc-Materials04" : "Hardened Base Structure Materials",
	"R-Struc-Materials05" : "Hardened Base Structure Materials Mk2",
	"R-Struc-Materials06" : "Hardened Base Structure Materials Mk3",
	"R-Struc-Materials07" : "Advanced Base Structure Materials",
	"R-Struc-Materials08" : "Advanced Base Structure Materials Mk2",
	"R-Struc-Materials09" : "Advanced Base Structure Materials Mk3",
	"R-Struc-PowerModuleMk1" : "Power Module",
	"R-Struc-Power-Upgrade01" : "Gas Turbine Generator",
	"R-Struc-Power-Upgrade02" : "Vapor Turbine Generator",
	"R-Struc-RepairFacility" : "Repair Facility",
	"R-Struc-RprFac-Upgrade01" : "Automated Repair Facility",
	"R-Struc-RprFac-Upgrade04" : "Robotic Repair Facility",
	"R-Struc-RprFac-Upgrade06" : "Advanced Repair Facility",
	"R-Struc-RprFac-Upgrade07" : "Robotic Repair Facility Mk3",
	"R-Struc-RprFac-Upgrade08" : "Advanced Repair Facility Mk2",
	"R-Struc-RprFac-Upgrade09" : "Advanced Repair Facility Mk3",
	"R-Struc-Research-Module" : "Research Module",
	"R-Struc-Research-Upgrade01" : "Synaptic Link Data Analysis",
	"R-Struc-Research-Upgrade02" : "Synaptic Link Data Analysis Mk2",
	"R-Struc-Research-Upgrade03" : "Synaptic Link Data Analysis Mk3",
	"R-Struc-Research-Upgrade04" : "Dedicated Synaptic Link Data Analysis",
	"R-Struc-Research-Upgrade05" : "Dedicated Synaptic Link Data Analysis Mk2",
	"R-Struc-Research-Upgrade06" : "Dedicated Synaptic Link Data Analysis Mk3",
	"R-Struc-Research-Upgrade07" : "Neural Synapse Research Brain",
	"R-Struc-Research-Upgrade08" : "Neural Synapse Research Brain Mk2",
	"R-Struc-Research-Upgrade09" : "Neural Synapse Research Brain Mk3",
	"R-Struc-VTOLPad" : "VTOL Rearming Pad",
	"R-Struc-VTOLPad-Upgrade01" : "Automated VTOL Rearming",
	"R-Struc-VTOLPad-Upgrade02" : "Automated VTOL Rearming Mk2",
	"R-Struc-VTOLPad-Upgrade03" : "Automated VTOL Rearming Mk3",
	"R-Struc-VTOLPad-Upgrade04" : "Robotic VTOL Rearming",
	"R-Struc-VTOLPad-Upgrade05" : "Robotic VTOL Rearming Mk2",
	"R-Struc-VTOLPad-Upgrade06" : "Robotic VTOL Rearming Mk3",
	"R-Struc-VTOLPad-Upgrade07" : "Robotic VTOL Rearming Mk4",
	"R-Struc-VTOLFactory" : "VTOL Factory",
	"R-Sys-Autorepair-Cyborg" : "Cyborg Self-Repair",
	"R-Sys-Autorepair-Cyborg-Upgrade01" : "Automated Cyborg Repair Mk2",
	"R-Sys-Autorepair-Cyborg-Upgrade02" : "Automated Cyborg Repair Mk3",
	"R-Sys-Autorepair-Def" : "Defenses Self-Repair",
	"R-Sys-Autorepair-Def-Upgrade01" : "Automated Defenses Repair Mk2",
	"R-Sys-Autorepair-Def-Upgrade02" : "Automated Defenses Repair Mk3",
	"R-Sys-Autorepair-Struc" : "Base Structure Self-Repair",
	"R-Sys-Autorepair-Struc-Upgrade01" : "Automated Base Structure Repair Mk2",
	"R-Sys-Autorepair-Struc-Upgrade02" : "Automated Base Structure Repair Mk3",
	"R-Sys-Autorepair-Vehicle" : "Vehicle Self-Repair",
	"R-Sys-Autorepair-Vehicle-Upgrade01" : "Automated Vehicle Repair Mk2",
	"R-Sys-Autorepair-Vehicle-Upgrade02" : "Automated Vehicle Repair Mk3",
	"R-Sys-Autorepair-General" : "Auto-Repair",
	"R-Sys-Sensor-Upgrade01" : "Sensor Upgrade",
	"R-Sys-Spade1Mk1" : "Construction Unit",
	"R-Sys-Engineering01" : "Engineering",
	"R-Sys-Engineering02" : "Improved Engineering",
	"R-Sys-Engineering03" : "Advanced Engineering",
	"R-Sys-MobileRepairTurret01" : "Mobile Repair Turret",
	"R-Sys-MobileRepairTurret02" : "Heavy Repair Turret",
	"R-Sys-MobileRepairTurret-01" : "Mobile Repair Upgrade",
	"R-Sys-MobileRepairTurret-02" : "Mobile Repair Upgrade Mk2",
	"R-Sys-Sensor-Turret01" : "Sensor Turret",
	"R-Sys-Sensor-Tower01" : "Sensor Tower",
	"R-Sys-Sensor-Tower02" : "Hardened Sensor Tower",
	"R-Sys-CBSensor-Turret01" : "CB Turret",
	"R-Sys-CBSensor-Tower01" : "CB Tower",
	"R-Sys-CBSensor-Upgrade01" : "CB Sensor Upgrade",
	"R-Sys-CBSensor-Upgrade02" : "CB Sensor Upgrade 2",
	"R-Sys-CBSensor-Upgrade03" : "CB Sensor Upgrade 3",
	"R-Sys-VTOLCBS-Turret01" : "VTOL CB Turret",
	"R-Sys-VTOLCBS-Tower01" : "VTOL CB Tower",
	"R-Sys-VTOLCBS-Upgrade01" : "VTOL CB Upgrade",
	"R-Sys-VTOLCBS-Upgrade02" : "VTOL CB Upgrade 2",
	"R-Sys-VTOLCBS-Upgrade03" : "VTOL CB Upgrade 3",
	"R-Sys-VTOLStrike-Upgrade01" : "VTOL Strike Upgrade",
	"R-Sys-VTOLStrike-Upgrade02" : "VTOL Strike Upgrade Mk2",
	"R-Sys-VTOLStrike-Upgrade03" : "VTOL Strike Upgrade Mk3",
	"R-Sys-VTOLStrike-Turret01" : "VTOL Strike Turret",
	"R-Sys-VTOLStrike-Tower01" : "VTOL Strike Tower",
	"R-Sys-SpyTurret" : "Nexus Link Turret",
	"R-Sys-SpyTurret-Upgrade01" : "Improved Scrambler",
	"R-Sys-SpyTurret-Upgrade02" : "Scrambler Turret Mk2",
	"R-Sys-Resistance" : "Nexus Intruder Program",
	"R-Sys-Resistance-Upgrade01" : "Nexus Resistance Circuits",
	"R-Sys-Resistance-Upgrade02" : "Nexus Resistance Circuits Mk2",
	"R-Sys-Resistance-Upgrade03" : "Nexus Resistance Circuits Mk3",
	"R-Sys-SensorLock" : "Sensor Lock",
	"R-Vehicle-Armor-Heat01" : "Thermal Armor",
	"R-Vehicle-Armor-Heat02" : "Thermal Armor Mk2",
	"R-Vehicle-Armor-Heat03" : "Thermal Armor Mk3",
	"R-Vehicle-Armor-Heat04" : "High Intensity Thermal Armor",
	"R-Vehicle-Armor-Heat05" : "High Intensity Thermal Armor Mk2",
	"R-Vehicle-Armor-Heat06" : "High Intensity Thermal Armor Mk3",
	"R-Vehicle-Body01" : "Light Body - Viper",
	"R-Vehicle-Body02" : "Light Body - Leopard",
	"R-Vehicle-Body03" : "Light Body - Retaliation",
	"R-Vehicle-Body04" : "Light Body - Bug",
	"R-Vehicle-Body05" : "Medium Body - Cobra",
	"R-Vehicle-Body06" : "Medium Body - Panther",
	"R-Vehicle-Body07" : "Medium Body - Retribution",
	"R-Vehicle-Body08" : "Medium Body - Scorpion",
	"R-Vehicle-Body09" : "Heavy Body - Tiger",
	"R-Vehicle-Body10" : "Heavy Body - Vengeance",
	"R-Vehicle-Body11" : "Heavy Body - Python",
	"R-Vehicle-Body12" : "Heavy Body - Mantis",
	"R-Vehicle-Engine01" : "Fuel Injection Engine",
	"R-Vehicle-Engine02" : "Fuel Injection Engine Mk2",
	"R-Vehicle-Engine03" : "Fuel Injection Engine Mk3",
	"R-Vehicle-Engine04" : "Turbo-Charged Engine",
	"R-Vehicle-Engine05" : "Turbo-Charged Engine Mk2",
	"R-Vehicle-Engine06" : "Turbo-Charged Engine Mk3",
	"R-Vehicle-Engine07" : "Gas Turbine Engine",
	"R-Vehicle-Engine08" : "Gas Turbine Engine Mk2",
	"R-Vehicle-Engine09" : "Gas Turbine Engine Mk3",
	"R-Vehicle-Metals01" : "Composite Alloys",
	"R-Vehicle-Metals02" : "Composite Alloys Mk2",
	"R-Vehicle-Metals03" : "Composite Alloys Mk3",
	"R-Vehicle-Metals04" : "Dense Composite Alloys",
	"R-Vehicle-Metals05" : "Dense Composite Alloys Mk2",
	"R-Vehicle-Metals06" : "Dense Composite Alloys Mk3",
	"R-Vehicle-Metals07" : "Superdense Composite Alloys",
	"R-Vehicle-Metals08" : "Superdense Composite Alloys Mk2",
	"R-Vehicle-Metals09" : "Superdense Composite Alloys Mk3",
	"R-Vehicle-Prop-Hover" : "Hover Propulsion",
	"R-Vehicle-Prop-Hover02" : "Hover Propulsion II",
	"R-Vehicle-Prop-Halftracks" : "Half-tracked Propulsion",
	"R-Vehicle-Prop-Halftracks02" : "Half-tracked Propulsion II",
	"R-Vehicle-Prop-Tracks" : "Tracked Propulsion",
	"R-Vehicle-Prop-Tracks02" : "Tracked Propulsion II",
	"R-Vehicle-Prop-VTOL" : "VTOL Propulsion",
	"R-Vehicle-Prop-VTOL02" : "VTOL Propulsion II",
	"R-Vehicle-Prop-Wheels" : "Wheeled Propulsion",
	"R-Vehicle-Prop-Wheels02" : "Wheeled Propulsion II",
	"R-Wpn-AAGun01" : "AA Cyclone Flak Cannon",
	"R-Wpn-AAGun02" : "AA Tornado Flak Turret",
	"R-Wpn-AAGun03" : "Hurricane AA Turret",
	"R-Wpn-AAGun04" : "Whirlwind AA Turret",
	"R-Wpn-AAGun-Accuracy01" : "AA Thermal Imaging Sensor",
	"R-Wpn-AAGun-Accuracy02" : "AA Target Acquisition Shells",
	"R-Wpn-AAGun-Accuracy03" : "AA Target Prediction Computer",
	"R-Wpn-AAGun-Damage01" : "AA HE Flak",
	"R-Wpn-AAGun-Damage02" : "AA HE Flak Mk2",
	"R-Wpn-AAGun-Damage03" : "AA HE Flak Mk3",
	"R-Wpn-AAGun-Damage04" : "AA HEAP Flak",
	"R-Wpn-AAGun-Damage05" : "AA HEAP Flak Mk2",
	"R-Wpn-AAGun-Damage06" : "AA HEAP Flak Mk3",
	"R-Wpn-AAGun-ROF01" : "AA Ammunition Hopper",
	"R-Wpn-AAGun-ROF02" : "AA Ammunition Hopper Mk2",
	"R-Wpn-AAGun-ROF03" : "AA Ammunition Hopper Mk3",
	"R-Wpn-AAGun-ROF04" : "AA Chainfeed Loader",
	"R-Wpn-AAGun-ROF05" : "AA Chainfeed Loader Mk2",
	"R-Wpn-AAGun-ROF06" : "AA Chainfeed Loader Mk3",
	"R-Wpn-Bomb01" : "Cluster Bomb Bay",
	"R-Wpn-Bomb02" : "HEAP Bomb Bay",
	"R-Wpn-Bomb03" : "Phosphor Bomb Bay",
	"R-Wpn-Bomb04" : "Thermite Bomb Bay",
	"R-Wpn-Bomb-Damage01" : "HE Bomb Shells",
	"R-Wpn-Bomb-Damage02" : "Improved Bomb Warhead",
	"R-Wpn-Bomb-Damage03" : "Advanced Bomb Warhead",
	"R-Wpn-Cannon-Accuracy01" : "Cannon Laser Rangefinder",
	"R-Wpn-Cannon-Accuracy02" : "Cannon Laser Designator",
	"R-Wpn-Cannon-Damage01" : "HEAT Cannon Shells",
	"R-Wpn-Cannon-Damage02" : "HEAT Cannon Shells Mk2",
	"R-Wpn-Cannon-Damage03" : "HEAT Cannon Shells Mk3",
	"R-Wpn-Cannon-Damage04" : "APFSDS Cannon Rounds",
	"R-Wpn-Cannon-Damage05" : "APFSDS Cannon Rounds Mk2",
	"R-Wpn-Cannon-Damage06" : "APFSDS Cannon Rounds Mk3",
	"R-Wpn-Cannon-Damage07" : "HVAPFSDS Cannon Rounds",
	"R-Wpn-Cannon-Damage08" : "HVAPFSDS Cannon Rounds Mk2",
	"R-Wpn-Cannon-Damage09" : "HVAPFSDS Cannon Rounds Mk3",
	"R-Wpn-Cannon-ROF01" : "Cannon Autoloader",
	"R-Wpn-Cannon-ROF02" : "Cannon Autoloader Mk2",
	"R-Wpn-Cannon-ROF03" : "Cannon Autoloader Mk3",
	"R-Wpn-Cannon-ROF04" : "Cannon Rapid Loader",
	"R-Wpn-Cannon-ROF05" : "Cannon Rapid Loader Mk2",
	"R-Wpn-Cannon-ROF06" : "Cannon Rapid Loader Mk3",
	"R-Wpn-Cannon1Mk1" : "Light Cannon",
	"R-Wpn-Cannon2Mk1" : "Medium Cannon",
	"R-Wpn-Cannon3Mk1" : "Heavy Cannon",
	"R-Wpn-Cannon4AMk1" : "Hyper Velocity Cannon",
	"R-Wpn-Cannon5" : "Assault Cannon",
	"R-Wpn-Energy-Accuracy01" : "Improved Laser Focusing",
	"R-Wpn-Energy-Accuracy02" : "Improved Laser Focusing Mk2",
	"R-Wpn-Energy-Accuracy03" : "Improved Laser Focusing Mk3",
	"R-Wpn-Energy-Damage01" : "Hi-Energy Laser Emitter",
	"R-Wpn-Energy-Damage02" : "Hi-Energy Laser Emitter Mk2",
	"R-Wpn-Energy-Damage03" : "Hi-Energy Laser Emitter Mk3",
	"R-Wpn-Energy-ROF01" : "Thermopole Energizer",
	"R-Wpn-Energy-ROF02" : "Thermopole Energizer Mk2",
	"R-Wpn-Energy-ROF03" : "Thermopole Energizer Mk3",
	"R-Wpn-Flamer-Damage01" : "High Temperature Flamer Gel",
	"R-Wpn-Flamer-Damage02" : "High Temperature Flamer Gel Mk2",
	"R-Wpn-Flamer-Damage03" : "High Temperature Flamer Gel Mk3",
	"R-Wpn-Flamer-Damage04" : "Superhot Flamer Gel",
	"R-Wpn-Flamer-Damage05" : "Superhot Flamer Gel Mk2",
	"R-Wpn-Flamer-Damage06" : "Superhot Flamer Gel Mk3",
	"R-Wpn-Flamer-ROF01" : "Flamer Autoloader",
	"R-Wpn-Flamer-ROF02" : "Flamer Autoloader Mk2",
	"R-Wpn-Flamer-ROF03" : "Flamer Autoloader Mk3",
	"R-Wpn-Flamer01Mk1" : "Flamer",
	"R-Wpn-Flame2" : "Heavy Flamer - Inferno",
	"R-Wpn-HowitzerMk1" : "Howitzer",
	"R-Wpn-HvyHowitzer" : "Heavy Howitzer - Ground Shaker",
	"R-Wpn-Howitzer03-Rot" : "Rotary Howitzer - Hellstorm",
	"R-Wpn-Howitzer-Accuracy01" : "Target Acquisition Artillery Shells",
	"R-Wpn-Howitzer-Accuracy02" : "Target Acquisition Artillery Shells Mk2",
	"R-Wpn-Howitzer-Accuracy03" : "Target Prediction Artillery Shells",
	"R-Wpn-Howitzer-Damage01" : "HE Howitzer Shells",
	"R-Wpn-Howitzer-Damage02" : "HE Howitzer Shells Mk2",
	"R-Wpn-Howitzer-Damage03" : "HE Howitzer Shells Mk3",
	"R-Wpn-Howitzer-Damage04" : "HEAP Howitzer Shells",
	"R-Wpn-Howitzer-Damage05" : "HEAP Howitzer Shells Mk2",
	"R-Wpn-Howitzer-Damage06" : "HEAP Howitzer Shells Mk3",
	"R-Wpn-Howitzer-ROF01" : "Howitzer Autoloader",
	"R-Wpn-Howitzer-ROF02" : "Howitzer Autoloader Mk2",
	"R-Wpn-Howitzer-ROF03" : "Howitzer Autoloader Mk3",
	"R-Wpn-Howitzer-ROF04" : "Howitzer Fast Loader",
	"R-Wpn-Laser01" : "Laser - Flashlight",
	"R-Wpn-Laser02" : "Pulse Laser",
	"R-Wpn-MG-Damage01" : "Hardened MG Bullets",
	"R-Wpn-MG-Damage02" : "APDSB MG Bullets",
	"R-Wpn-MG-Damage03" : "APDSB MG Bullets Mk2",
	"R-Wpn-MG-Damage04" : "APDSB MG Bullets Mk3",
	"R-Wpn-MG-Damage05" : "Tungsten-Tipped MG Bullets",
	"R-Wpn-MG-Damage06" : "Tungsten-Tipped MG Bullets Mk2",
	"R-Wpn-MG-Damage07" : "Tungsten-Tipped MG Bullets Mk3",
	"R-Wpn-MG-Damage08" : "Depleted Uranium MG Bullets",
	"R-Wpn-MG-Damage09" : "Depleted Uranium MG Bullets Mk2",
	"R-Wpn-MG-ROF01" : "Chaingun Upgrade",
	"R-Wpn-MG-ROF02" : "Rapid Fire Chaingun",
	"R-Wpn-MG-ROF03" : "Hyper Fire Chaingun Upgrade",
	"R-Wpn-MG1Mk1" : "Machinegun",
	"R-Wpn-MG2Mk1" : "Twin Machinegun",
	"R-Wpn-MG3Mk1" : "Heavy Machinegun",
	"R-Wpn-MG4" : "Assault Gun",
	"R-Wpn-Missile-Accuracy01" : "Target Prediction Missiles",
	"R-Wpn-Missile-Accuracy02" : "Search & Destroy Missiles",
	"R-Wpn-Missile-Damage01" : "Advanced Missile Warhead",
	"R-Wpn-Missile-Damage02" : "Advanced Missile Warhead Mk2",
	"R-Wpn-Missile-Damage03" : "Advanced Missile Warhead Mk3",
	"R-Wpn-Missile-ROF01" : "Advanced Missile Allocation System",
	"R-Wpn-Missile-ROF02" : "Advanced Missile Allocation System Mk2",
	"R-Wpn-Missile-ROF03" : "Advanced Missile Allocation System Mk3",
	"R-Wpn-MissileSlow-Damage01" : "HEAP Missile Warhead",
	"R-Wpn-MissileSlow-Damage02" : "HEAP Missile Warhead Mk2",
	"R-Wpn-MissileSlow-Damage03" : "HEAP Missile Warhead Mk3",
	"R-Wpn-MissileSlow-ROF01" : "Improved Missile Loading System",
	"R-Wpn-Missile-LtSAM" : "Avenger SAM",
	"R-Wpn-Missile-HvSAM" : "Vindicator SAM",
	"R-Wpn-Missile2A-T" : "Scourge Missile",
	"R-Wpn-MdArtMissile" : "Seraph Missile Array",
	"R-Wpn-HvArtMissile" : "Archangel Missile",
	"R-Wpn-Mortar-Acc01" : "Mortar Targeting Computer",
	"R-Wpn-Mortar-Acc02" : "Thermal Imaging Mortar Shells",
	"R-Wpn-Mortar-Acc03" : "Target Acquisition Mortar Shells",
	"R-Wpn-Mortar-Damage01" : "HE Mortar Shells",
	"R-Wpn-Mortar-Damage02" : "HE Mortar Shells Mk2",
	"R-Wpn-Mortar-Damage03" : "HE Mortar Shells Mk3",
	"R-Wpn-Mortar-Damage04" : "HEAP Mortar Shells",
	"R-Wpn-Mortar-Damage05" : "HEAP Mortar Shells Mk2",
	"R-Wpn-Mortar-Damage06" : "HEAP Mortar Shells Mk3",
	"R-Wpn-Mortar-ROF01" : "Mortar Autoloader",
	"R-Wpn-Mortar-ROF02" : "Mortar Autoloader Mk2",
	"R-Wpn-Mortar-ROF03" : "Mortar Autoloader Mk3",
	"R-Wpn-Mortar-ROF04" : "Mortar Fast Loader",
	"R-Wpn-Mortar01Lt" : "Mortar",
	"R-Wpn-Mortar02Hvy" : "Heavy Mortar - Bombard",
	"R-Wpn-Mortar3" : "Rotary Mortar - Pepperpot",
	"R-Wpn-RailGun01" : "Needle Gun",
	"R-Wpn-RailGun02" : "Rail Gun",
	"R-Wpn-RailGun03" : "Gauss Cannon",
	"R-Wpn-Rail-Accuracy01" : "Rail Target Prediction Computer",
	"R-Wpn-Rail-Damage01" : "Hardened Rail Dart",
	"R-Wpn-Rail-Damage02" : "Hardened Rail Dart Mk2",
	"R-Wpn-Rail-Damage03" : "Hardened Rail Dart Mk3",
	"R-Wpn-Rail-ROF01" : "Rail Gun ROF",
	"R-Wpn-Rail-ROF02" : "Rail Gun ROF Mk2",
	"R-Wpn-Rail-ROF03" : "Rail Gun ROF Mk3",
	"R-Wpn-Rocket-Accuracy01" : "Stabilized Rockets",
	"R-Wpn-Rocket-Accuracy02" : "Improved Rocket Wire Guidance",
	"R-Wpn-RocketSlow-Accuracy01" : "Rocket Laser Designator",
	"R-Wpn-RocketSlow-Accuracy02" : "Thermal Imaging Rockets",
	"R-Wpn-Rocket-Damage01" : "HE Rockets",
	"R-Wpn-Rocket-Damage02" : "HE Rockets Mk2",
	"R-Wpn-Rocket-Damage03" : "HE Rockets Mk3",
	"R-Wpn-Rocket-Damage04" : "HEAT Rocket Warhead",
	"R-Wpn-Rocket-Damage05" : "HEAT Rocket Warhead Mk2",
	"R-Wpn-Rocket-Damage06" : "HEAT Rocket Warhead Mk3",
	"R-Wpn-Rocket-Damage07" : "HESH Rocket Warhead",
	"R-Wpn-Rocket-Damage08" : "HESH Rocket Warhead Mk2",
	"R-Wpn-Rocket-Damage09" : "HESH Rocket Warhead Mk3",
	"R-Wpn-Rocket-ROF01" : "Rocket Autoloader",
	"R-Wpn-Rocket-ROF02" : "Rocket Autoloader Mk2",
	"R-Wpn-Rocket-ROF03" : "Rocket Autoloader Mk3",
	"R-Wpn-Rocket-ROF04" : "Rapid Fire Mini-Rockets",
	"R-Wpn-Rocket-ROF05" : "Rapid Fire Mini-Rockets Mk2",
	"R-Wpn-Rocket-ROF06" : "Rapid Fire Mini-Rockets Mk3",
	"R-Wpn-Rocket01-LtAT" : "Lancer AT Rocket",
	"R-Wpn-Rocket02-MRL" : "Mini-Rocket Array",
	"R-Wpn-Rocket03-HvAT" : "Bunker Buster Rocket",
	"R-Wpn-Rocket05-MiniPod" : "Mini-Rocket Pod",
	"R-Wpn-Rocket06-IDF" : "Ripple Rockets",
	"R-Wpn-Rocket07-Tank-Killer" : "Tank Killer Rocket",
	"R-Wpn-TUTMG" : "Machinegun Artifact",
	"R-Lab-AdvWarfare" : "Advanced Warfare",
	"R-Lab-Chemical" : "Chemical Laboratory",
	"R-Lab-Cyborg" : "Cyborg Laboratory",
	"R-Lab-Electronics" : "Electronics Laboratory",
	"R-Lab-Engineering" : "Engineering Laboratory",
	"R-Lab-Robotics" : "Robotics Laboratory",
	"R-Defense-PrisLas" : "Flashlight Emplacement",
	"R-Sys-Sensor-Upgrade02" : "Sensor Upgrade Mk2",
	"R-Sys-Sensor-Upgrade03" : "Sensor Upgrade Mk3",
	"R-Struc-Power-Upgrade03" : "Vapor Turbine Generator Mk2",
	"R-Struc-Power-Upgrade01b" : "Gas Turbine Generator Mk2",
	"R-Struc-Power-Upgrade01c" : "Gas Turbine Generator Mk3",
	"R-Struc-Power-Upgrade03a" : "Vapor Turbine Generator Mk3",
	"R-Wpn-Howitzer-Incendiary" : "Incendiary Howitzer",
	"R-Defense-Howitzer-Incendiary" : "Incendiary Howitzer Emplacement",
	"R-Wpn-Plasmite-Flamer" : "Plasmite Flamer",
	"R-Defense-PlasmiteFlamer" : "Plasmite Flamer Bunker",
	"R-Wpn-Mortar-Incendiary" : "Incendiary Mortar",
	"R-Defense-MortarPit-Incendiary" : "Incendiary Mortar Pit",
	"R-Sys-MobileRepairTurretHvy" : "Heavy Repair Turret",
	"R-Cyborg-Armor-Heat07" : "Cyborg Superdense Thermal Armor",
	"R-Cyborg-Armor-Heat08" : "Cyborg Superdense Thermal Armor Mk2",
	"R-Cyborg-Armor-Heat09" : "Cyborg Superdense Thermal Armor Mk3",
	"R-Vehicle-Armor-Heat07" : "Vehicle Superdense Thermal Armor",
	"R-Vehicle-Armor-Heat08" : "Vehicle Superdense Thermal Armor Mk2",
	"R-Vehicle-Armor-Heat09" : "Vehicle Superdense Thermal Armor Mk3",
	"R-Cyborg-Hvywpn-Mcannon" : "Super Heavy-Gunner",
	"R-Cyborg-Hvywpn-Acannon" : "Super Auto-Cannon Cyborg",
	"R-Cyborg-Hvywpn-HPV" : "Super HPV Cyborg",
	"R-Cyborg-Hvywpn-TK" : "Super Tank-Killer Cyborg",
	"R-Wpn-HvyLaser" : "Heavy Laser",
	"R-Defense-HeavyLas" : "Heavy Laser Emplacement",
	"R-Sys-Resistance-Circuits" : "Nexus Resistance Circuits",
	"R-Wpn-Cannon6TwinAslt" : "Twin Assault Cannon",
	"R-Defense-Cannon6" : "Twin Assault Cannon Bunker",
	"R-Sys-Sensor-WS" : "Wide Spectrum Sensor",
	"R-Sys-Sensor-WSTower" : "Wide Spectrum Sensor Tower",
	"R-Sys-Sensor-SatLink" : "Satellite Uplink Center",
	"R-Wpn-LasSat" : "Laser Satellite Command Post",
	"R-Sys-Sensor-UpLink" : "Satellite Uplink Center",
	"R-Sys-RadarDetector01" : "Radar Detector",
	"R-Wpn-PlasmaCannon" : "Plasma Cannon",
	"R-Defense-PlasmaCannon" : "Plasma Cannon Emplacement",
	"R-Wpn-Sunburst" : "Sunburst AA Rocket Array",
	"R-Defense-Sunburst" : "Sunburst AA Site",
	"R-Cyborg-Hvywpn-PulseLsr" : "Super Pulse Laser Cyborg",
	"R-Cyborg-Hvywpn-RailGunner" : "Super Rail-Gunner",
	"R-Cyborg-Hvywpn-A-T" : "Super Scourge Cyborg",
	"R-Sys-SpyTower" : "Nexus Link Tower",
	"R-Defense-EMPCannon" : "EMP Cannon Hardpoint",
	"R-Wpn-EMPCannon" : "EMP Cannon",
	"R-Defense-MassDriver" : "Mass Driver Fortress",
	"R-Defense-Super-Cannon" : "Cannon Fortress",
	"R-Defense-Super-Rocket" : "Heavy Rocket Bastion",
	"R-Defense-Super-Missile" : "Missile Fortress",
	"R-Vehicle-Body13" : "Heavy Body - Wyvern",
	"R-Vehicle-Body14" : "Multi Turret Body - Dragon",
	"R-Wpn-Flamer-Damage07" : "Superhot Plasmite Gel",
	"R-Wpn-Flamer-Damage08" : "Superhot Plasmite Gel Mk2",
	"R-Wpn-Flamer-Damage09" : "Superhot Plasmite Gel Mk3",
	"R-Wpn-MortarEMP" : "EMP Mortar",
	"R-Defense-EMPMortar" : "EMP Mortar Pit",
	"R-Defense-AA-Laser" : "Stormbringer Emplacement",
	"R-Wpn-AALaser" : "Stormbringer AA Laser",
	"R-Defense-WallTower-SamHvy" : "Vindicator Hardpoint",
	"R-Defense-WallTower-QuadRotAA" : "Whirlwind Hardpoint",
	"R-Defense-WallTower-DoubleAAgun" : "AA Cyclone Flak Cannon Hardpoint",
	"R-Defense-WallTower-DoubleAAgun02" : "AA Tornado Flak Cannon Hardpoint",
	"R-Defense-WallTower-SamSite" : "Avenger Hardpoint",
	"R-Wpn-MG5" : "Twin Assault Gun",
	"R-Defense-WallTower-TwinAGun" : "Twin Assault Gun Hardpoint",
	"R-Wpn-Bomb05" : "Plasmite Bomb",
	"R-Wpn-Bomb06" : "EMP Missile Launcher",
	"R-Comp-CommandTurret02" : "Command Turret II",
	"R-Comp-CommandTurret03" : "Command Turret III",
	"R-Comp-CommandTurret04" : "Command Turret IV"
}
