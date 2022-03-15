include('./constants/constants.js')
include('./data/data.js')

include('./home/home.js');
include('./maps.js');

Goto(0x07, 0x421E)
PokemonNames.toROM();

Goto(0x1C, 0x5313)
TownMapEntryTables.External.toROM();
TownMapEntryTables.Internal.toROM();
Section('TownMapNames');