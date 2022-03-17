include('./constants/constants.js')
include('./data/data.js')

include('./home/home.js');
include('./maps.js');

Goto(0x01, 0x7092)
SafariZoneRestHouses.toROM();

Goto(0x03, 0x43E6)
ForcedBikeOrSurfMaps.toROM();

Goto(0x07, 0x421E)
PokemonNames.toROM();

Goto(0x18, 0x6442)
MapBadgeFlags.toROM();

Goto(0x1C, 0x4A3F)
DungeonMaps.toROM();

Goto(0x1C, 0x4F11)
TownMapOrder.toROM();

Goto(0x1C, 0x5313)
TownMapEntryTables.External.toROM();
TownMapEntryTables.Internal.toROM();
Section('TownMapNames');