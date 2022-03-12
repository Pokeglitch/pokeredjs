Goto(0xff00);

def({
    rJOYP : Flags({
        DPad : 4,
        Buttons : 5
    }),  // 0xff00 ; Joypad (R/W)
    rSB  : 1,   // 0xff01 ; Serial transfer data (R/W)
    rSC  : 1,   // 0xff02 ; Serial Transfer Control (R/W)
    rFF03 : 1,  // 0xff03
    rDIV : 1,   // 0xff04 ; Divider Register (R/W)
    rTIMA: 1,   // 0xff05 ; Timer counter (R/W)
    rTMA : 1,   // 0xff06 ; Timer Modulo (R/W)
    rTAC : 1,   // 0xff07 ; Timer Control (R/W)
    rFF08 : 7,  // 0xff08
    rIF  : 1,   // 0xff0f ; Interrupt Flag (R/W)
    rNR10 : 1, 	// 0xff10 ; Channel 1 Sweep register (R/W)
    rNR11 : 1, 	// 0xff11 ; Channel 1 Sound length/Wave pattern duty (R/W)
    rNR12 : 1, 	// 0xff12 ; Channel 1 Volume Envelope (R/W)
    rNR13 : 1, 	// 0xff13 ; Channel 1 Frequency lo (Write Only)
    rNR14 : 1, 	// 0xff14 ; Channel 1 Frequency hi (R/W)
    rFF15 : 1,  // 0xff15
    rNR21 : 1, 	// 0xff16 ; Channel 2 Sound Length/Wave Pattern Duty (R/W)
    rNR22 : 1, 	// 0xff17 ; Channel 2 Volume Envelope (R/W)
    rNR23 : 1, 	// 0xff18 ; Channel 2 Frequency lo data (W)
    rNR24 : 1, 	// 0xff19 ; Channel 2 Frequency hi data (R/W)
    rNR30 : 1, 	// 0xff1a ; Channel 3 Sound on/off (R/W)
    rNR31 : 1, 	// 0xff1b ; Channel 3 Sound Length
    rNR32 : 1, 	// 0xff1c ; Channel 3 Select output level (R/W)
    rNR33 : 1, 	// 0xff1d ; Channel 3 Frequency's lower data (W)
    rNR34 : 1, 	// 0xff1e ; Channel 3 Frequency's higher data (R/W)
    rFF1F : 1,  // 0xff1f
    rNR41 : 1, 	// 0xff20 ; Channel 4 Sound Length (R/W)
    rNR42 : 1, 	// 0xff21 ; Channel 4 Volume Envelope (R/W)
    rNR43 : 1, 	// 0xff22 ; Channel 4 Polynomial Counter (R/W)
    rNR44 : 1, 	// 0xff23 ; Channel 4 Counter/consecutive; Initial (R/W)
    rNR50 : 1, 	// 0xff24 ; Channel control / ON-OFF / Volume (R/W)
    rNR51 : 1, 	// 0xff25 ; Selection of Sound output terminal (R/W)
    rNR52 : 1, 	// 0xff26 ; Sound on/off
    rFF27 : 9,  // 0xff27
    rWave_0 : 1, 	// 0xff30
    rWave_1 : 1, 	// 0xff31
    rWave_2 : 1, 	// 0xff32
    rWave_3 : 1, 	// 0xff33
    rWave_4 : 1, 	// 0xff34
    rWave_5 : 1, 	// 0xff35
    rWave_6 : 1, 	// 0xff36
    rWave_7 : 1, 	// 0xff37
    rWave_8 : 1, 	// 0xff38
    rWave_9 : 1, 	// 0xff39
    rWave_a : 1, 	// 0xff3a
    rWave_b : 1, 	// 0xff3b
    rWave_c : 1, 	// 0xff3c
    rWave_d : 1, 	// 0xff3d
    rWave_e : 1, 	// 0xff3e
    rWave_f : 1, 	// 0xff3f
    rLCDC : Flags({ Enable : 7 }), 	// 0xff40 ; LCD Control (R/W)
    rSTAT : 1, 	// 0xff41 ; LCDC Status (R/W)
    rSCY  : 1, 	// 0xff42 ; Scroll Y (R/W)
    rSCX  : 1, 	// 0xff43 ; Scroll X (R/W)
    rLY   : 1, 	// 0xff44 ; LCDC Y-Coordinate (R)
    rLYC  : 1, 	// 0xff45 ; LY Compare (R/W)
    rDMA  : 1, 	// 0xff46 ; DMA Transfer and Start Address (W)
    rBGP  : 1, 	// 0xff47 ; BG Palette Data (R/W) - Non CGB Mode Only
    rOBP0 : 1, 	// 0xff48 ; Object Palette 0 Data (R/W) - Non CGB Mode Only
    rOBP1 : 1, 	// 0xff49 ; Object Palette 1 Data (R/W) - Non CGB Mode Only
    rWY   : 1, 	// 0xff4a ; Window Y Position (R/W)
    rWX   : 1, 	// 0xff4b ; Window X Position minus 7 (R/W)
    rFF4C : 1,  // 0xff4c
    rKEY1 : 1, 	// 0xff4d ; CGB Mode Only - Prepare Speed Switch
    rFF4E : 1,  // 0xff4e
    rVBK  : 1, 	// 0xff4f ; CGB Mode Only - VRAM Bank
    rFF50 : 1,  // 0xff50
    rHDMA1 : 1, 	// 0xff51 ; CGB Mode Only - New DMA Source, High
    rHDMA2 : 1, 	// 0xff52 ; CGB Mode Only - New DMA Source, Low
    rHDMA3 : 1, 	// 0xff53 ; CGB Mode Only - New DMA Destination, High
    rHDMA4 : 1, 	// 0xff54 ; CGB Mode Only - New DMA Destination, Low
    rHDMA5 : 1, 	// 0xff55 ; CGB Mode Only - New DMA Length/Mode/Start
    rRP   : 1, 	// 0xff56 ; CGB Mode Only - Infrared Communications Port
    rFF57 : 17,  // 0xff57
    rBGPI : 1, 	// 0xff68 ; CGB Mode Only - Background Palette Index
    rBGPD : 1, 	// 0xff69 ; CGB Mode Only - Background Palette Data
    rOBPI : 1, 	// 0xff6a ; CGB Mode Only - Sprite Palette Index
    rOBPD : 1, 	// 0xff6b ; CGB Mode Only - Sprite Palette Data
    rUNKNOWN1 : 1, 	// 0xff6c ; (FEh) Bit 0 (Read/Write) - CGB Mode Only
    rFF6D : 3,  // 0xff6d
    rSVBK : 1, 	// 0xff70 ; CGB Mode Only - WRAM Bank
    rFF71 : 1,  // 0xff71
    rUNKNOWN2 : 1, 	// 0xff72 ; (00h) - Bit 0-7 (Read/Write)
    rUNKNOWN3 : 1, 	// 0xff73 ; (00h) - Bit 0-7 (Read/Write)
    rUNKNOWN4 : 1, 	// 0xff74 ; (00h) - Bit 0-7 (Read/Write) - CGB Mode Only
    rUNKNOWN5 : 1, 	// 0xff75 ; (8Fh) - Bit 4-6 (Read/Write)
    rUNKNOWN6 : 1, 	// 0xff76 ; (00h) - Always 00h (Read Only)
    rUNKNOWN7 : 1, 	// 0xff77 ; (00h) - Always 00h (Read Only)
})

Goto(0xff8a)
def({
    hSoftReset : 1
})

def(
    { hDexWeight : 1,
      hPartyMonIndex : 1},
    { hWarpDestinationMap : 1 },
    { hOAMTile : 1 },
    { hROMBankTemp : 1 },
    { hPreviousTileset : 1 },
    { hRLEByteValue : 1 },
    { hBaseTileID : 1,
      hSpriteIndexOrTextID : 1,
      hVRAMSlot : 1 }
)

def({ hFourTileSpriteCount : 1 },{ hHalveItemPrices : 1 })

Goto(0xffb8)
def({
    hLoadedROMBank : 1,
    hSavedROMBank : 1,
    hAutoBGTransfer : {
        Enabled : 1,
        Portion : 1,
        Dest : 2,
    },
    hRedrawMapViewRowOffset : 1,
    hSPTemp : 2,
    hVBlankCopyBGSource : 2,
    hVBlankCopyBGDest : 2,
    hVBlankCopyBGNumRows : 1,
    hVBlankCopySize : 1,
    hVBlankCopySource : 2,
    hVBlankCopyDest : 2,
    hVBlankCopyDoubleSize : 1,
    hVBlankCopyDoubleSource : 2,
    hVBlankCopyDoubleDest : 2
})


Goto(0xfff8)
def({
    hJoyInput : 1,  // 0xfff8
    hDisableJoypadPolling : 1,  // 0xfff9
    hFFFA : 5,  // 0xfffa
    rIE : Flags(['VBlank', 'LCDCStat', 'Timer', 'Serial', 'Joypad']) // 0xffff ; Interrupt Enable (R/W)
})