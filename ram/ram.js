include('../constants/ram.js')
include('./macros.js')

// VRAM
def({
    vChars0 : tiles(0x80),
    vChars1 : tiles(0x80),
    vChars2 : tiles(0x80),
    vBGMap0 : area(BG.Map),
    vBGMap1 : area(BG.Map)
}, {
    vSprites : tiles(0x80),
    vFont : tiles(0x80),
    vFrontPic : tiles(7*7),
    vBackPic : tiles(7*7)
},{
    vNPCSprites : tiles(0x80),
    vNPCSprites2 : tiles(0x80),
    vTileset : tiles(0x80)
},{
    vTitle_empty : tiles(0x80),
    vTitleLogo : tiles(0x80),
    vTitle_empty_sprite : tiles(7*7),
    vTitleLogo2: tiles(30)
})

include('./wram.js')
include('./hram.js')
