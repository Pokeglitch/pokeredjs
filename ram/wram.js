Goto(0xc000)

def({
    wUnusedC000: 1,
    wSoundID: 1,
    wMuteAudioAndPauseMusic: 1,
    wDisableChannelOutputWhenSfxEnds: 1,
    wStereoPanning: 1,
    wSavedVolume: 1,
    wChannel : expand(Channel.Struct, Channel.Amount),
    wMusicWaveInstrument: 1,
    wSfxWaveInstrument: 1,
    wMusicTempo: 2,
    wSfxTempo: 2,
    wSfxHeaderPointer: 2,
    wNewSoundID: 1,
    wAudioROMBank: 1,
    wAudioSavedROMBank: 1,
    wFrequencyModifier: 1,
    wTempoModifier: 1
})

Skip(13)    //C0F3

def({
    wSpriteState : [
        Array(Sprite.Amount).fill(Sprite.Struct1),
        Array(Sprite.Amount).fill(Sprite.Struct2),
    ],
    wOAMBuffer : Array(OAMSprites.Amount).fill(OAMSprites.Struct),
    wTileMap : Array(Screen.Height).fill(Screen.Width)
})

def({
    wTileMapBackup : Array(Screen.Height).fill(Screen.Width)
},{
    wSerialPartyMonsPatchList : 200,
    wSerialEnemyMonsPatchList : 200
})

Skip(80)

def(
    { wTempPic : tiles(7*7) },
    { wOverworldMap : 1300 }
)
def({
    wRedrawRowOrColumnSrcTiles : Screen.Width * 2,
    wTopMenuItemY : 1,
    wTopMenuItemX : 1,
    wCurrentMenuItem : 1,
    wTileBehindCursor : 1,
    wMaxMenuItem : 1,
    wMenuWatchedKeys : 1,
    wLastMenuItem : 1,
    wPartyAndBillsPCSavedMenuItem : 1,
    wBagSavedMenuItem : 1,
    wBattleAndStartSavedMenuItem : 1,
    wPlayerMoveListIndex : 1,
    wPlayerMonNumber : 1,
    wMenuCursorLocation: 2,
    wUnusedCC32 : 2,
    wMenuJoypadPollCount : 1,
    wMenuItemToSwap : 1,
    wListScrollOffset : 1,
    wMenuWatchMovingOutOfBounds : 1,
    wTradeCenterPointerTableIndex : 1,
    wUnusedCC39 : 1,
    wTextDest: 2,
    wDoNotWaitForButtonPressAfterDisplayingText : 1

})

def(()=>{
    def({ wLinkMenuSelectionReceiveBuffer : 2 })
    Skip(3)
    def({ wLinkMenuSelectionSendBuffer : 2 })
    Skip(3)
    def({ wEnteringCableClub : 1 }, { wLinkTimeoutCounter : 1 });
},()=>{
    def({ wSerialExchangeNybbleTempReceiveData : 1 },{ wSerialSyncAndExchangeNybbleReceiveData : 1 })
    def({ wSerialExchangeNybbleReceiveData : 1})
    Skip(3)
    def({ wSerialExchangeNybbleSendData : 1 })
    Skip(4)
    def({ wUnknownSerialCounter : 2})
})

def({ wWhichTradeMonSelectionMenu : 1 }, {
    wMonDataLocation : 1,
    wMenuWrappingEnabled : 1,
    wCheckFor180DegreeTurn : 1,
})

Skip(1)

def({
    wMissableObjectIndex : 1,
    wPredefID : 1,
    wPredefHL : 2,
    wPredefDE : 2,
    wPredefBC : 2,
    wTrainerHeaderFlagBit : 1,
})

Skip(1)

def({
    wNPCMovementScriptPointerTableNum : 1,
    wNPCMovementScriptBank : 1,
})

Skip(2)

def({ wVermilionDockTileMapBuffer : 5 * BG.Map.Width + Screen.Width },
    { wOaksAideRewardItemName : Item.Name.Length },
    { wElevatorWarpMaps : 11 * 2 },
    { wFilteredBagItems : 4 },
    { wMonPartySpritesSavedOAM : 0x60 },
    { wTrainerCardBlkPacket : 0x40 },
    { wHallOfFame : HallOfFame.Size },
    { wNPCMovementDirections : 180 },
    {
        wDexRatingNumMonsSeen : 1,
        wDexRatingNumMonsOwned : 1,
        wDexRatingText : 1,
    },
    ()=>{
        def({ wSlotMachineSevenAndBarModeChance : 1 })
        Skip(2)
        def({ wSlotMachineSavedROMBank : 1 })
        Skip(166)
        def({ wLuckySlotHiddenObjectIndex : 1 })
    },
    ()=>{
        def({ wAnimationType : 1 }),
        Skip(29)
        def({ wAnimPalette : 1 })
    },
    ()=>{
        Skip(60)
        def({ wSwitchPartyMonTempBuffer : 44 }) // party_struct size,
    },
    { wBoostExpByExpAll : 1 },
    ()=>{
        def({ wUnusedCC5B : 1 })
        Skip(59)
        def({
            wNPCMovementDirections2 : 10,
            wNumStepsToTake : 1,
        })
        Skip(48)
        def({ wRLEByteCount : 1 });
        def({ wParentMenuItem : 1 },
            { wAddedToParty : 1 },
            { wCanEvolveFlags : 1 }
        )
        def({
            wForceEvolution : 1,
            wAILayer2Encouragement : 1,
        })
        Skip(1)
        def({
            wPlayerSubstituteHP : 1,
            wEnemySubstituteHP : 1,
            wTestBattlePlayerSelectedMove : 1,
        })
        Skip(1)
        def({
            wMoveMenuType : 1,
            wPlayerSelectedMove : 1,
            wEnemySelectedMove : 1,
            wLinkBattleRandomNumberListIndex : 1,
            wAICount : 1,
        })
        Skip(2)
        def({
            wEnemyMoveListIndex : 1,
            wLastSwitchInEnemyMonHP : 2,
            wTotalPayDayMoney : 3,
            wSafariEscapeFactor : 1,
            wSafariBaitFactor : 1,
        })
        Skip(1)
        def({
            wTransformedEnemyMonOriginalDVs : 2,
            wMonIsDisobedient : 1,
            wPlayerDisabledMoveNumber : 1,
            wEnemyDisabledMoveNumber : 1,
            wInHandlePlayerMonFainted : 1,
            wPlayerUsedMove : 1,
            wEnemyUsedMove : 1,
            wEnemyMonMinimized : 1,
            wMoveDidntMiss : 1,
            wPartyFoughtCurrentEnemyFlags : flag_array(Party.Length),
            wLowHealthAlarmDisabled : 1,
            wPlayerMonMinimized : 1,
        })
        Skip(13)
    def({ wEnemyNumHits : 1 },
        { wEnemyBideAccumulatedDamage : 2 }
    )
    Skip(8)
})

def({
    wInGameTradeGiveMonSpecies : 1,
    wInGameTradeTextPointerTablePointer : 2,
    wInGameTradeTextPointerTableIndex : 1,
    wInGameTradeGiveMonName : Name.Length,
    wInGameTradeReceiveMonName : Name.Length,
    wInGameTradeMonNick : Name.Length,
    wInGameTradeReceiveMonSpecies : 1,
}, ()=>{
    def({
        wPlayerMonUnmodifiedLevel : 1,
        wPlayerMonUnmodifiedMaxHP : 2,
        wPlayerMonUnmodifiedAttack : 2,
        wPlayerMonUnmodifiedDefense : 2,
        wPlayerMonUnmodifiedSpeed : 2,
        wPlayerMonUnmodifiedSpecial : 2
    })
    def({ wPlayerMonStatMods : 8 },
        {
            wPlayerMonAttackMod : 1,
            wPlayerMonDefenseMod : 1,
            wPlayerMonSpeedMod : 1,
            wPlayerMonSpecialMod : 1,
            wPlayerMonAccuracyMod : 1,
            wPlayerMonEvasionMod : 1,
    })
    Skip(3)
    def({
        wEnemyMonUnmodifiedLevel : 1,
        wEnemyMonUnmodifiedMaxHP : 2,
        wEnemyMonUnmodifiedAttack : 2,
        wEnemyMonUnmodifiedDefense : 2,
        wEnemyMonUnmodifiedSpeed : 2,
        wEnemyMonUnmodifiedSpecial : 2
    })
    def({ wEnemyMonStatMods : 8 },
        {
            wEnemyMonAttackMod : 1,
            wEnemyMonDefenseMod : 1,
            wEnemyMonSpeedMod : 1,
            wEnemyMonSpecialMod : 1,
            wEnemyMonAccuracyMod : 1,
            wEnemyMonEvasionMod : 1,
    })
}, ()=>{
    Skip(30)
    def({
        wEngagedTrainerClass : 1,
        wEngagedTrainerSet : 1,
    })
})

Skip(1)
def({ wNPCMovementDirections2Index : 1 },
    { wUnusedCD37 : 1 },
    {
        wFilteredBagItemsCount : 1,
        wSimulatedJoypadStatesIndex : 1,
        wWastedByteCD39 : 1,
        wWastedByteCD3A : 1,
        wOverrideSimulatedJoypadStatesMask : 1,    
})

Skip(1)
def(()=>{
    def({
        wTradedPlayerMonSpecies : 1,
        wTradedEnemyMonSpecies : 1,
    })
    Skip(2)
    def({
        wTradedPlayerMonOT : Name.Length,
        wTradedPlayerMonOTID : 2,
        wTradedEnemyMonOT : Name.Length,
        wTradedEnemyMonOTID : 2,
    })
},{
    wTradingWhichPlayerMon : 1,
    wTradingWhichEnemyMon : 1,
    wNameOfPlayerMonToBeTraded : Name.Length,
},{
    wFallingObjectsMovementData : 20,
},{
    wBoxMonCounts : Boxes.Amount,
},{
    wPriceTemp : 3  
},{
    wFieldMoves : Moves.Amount,
    wNumFieldMoves : 1,
    wFieldMovesLeftmostXCoord : 1,
    wLastFieldMoveID : 1
},{
    wBoxNumString : 3,  
},{
    wBattleTransitionCircleScreenQuadrantY : 1,
    wBattleTransitionCircleScreenQuadrantX : 1,
},{
    wBattleTransitionCopyTilesOffset : 2
},()=>{
    def({ wInwardSpiralUpdateScreenCounter : 1 })
    Skip(9)
    def({ wBattleTransitionSpiralDirection : 1 })
},{
    wSSAnneSmokeDriftAmount : 1,
    wSSAnneSmokeX : 1,
},{
    wHoFMonSpecies : 1
},{
    wHoFTeamIndex : 1,
    wHoFPartyMonIndex : 1,
    wHoFMonLevel : 1,
    wHoFMonOrPlayer : 1,
    wHoFTeamIndex2 : 1,
    wHoFTeamNo : 1,
},{
    wRivalStarterTemp : 1,
    wRivalStarterBallSpriteIndex : 1
},{
    wFlyAnimUsingCoordList : 1,
    wFlyLocationsList : Map.Cities + 2,
},{
    wWhichTownMapLocation : 1,
    wFlyAnimCounter : 1,
    wFlyAnimBirdSpriteImageIndex : 1
},()=>{
    Skip(1)
    def({
        wHUDPokeballGfxOffsetX : 1,
        wHUDGraphicsTiles : 3,
    })
},{
    wDayCareStartLevel : 1,
    wDayCareNumLevelsGrown : 1,
    wDayCareTotalCost : 2,
    wDayCarePerLevelCost : 2,
},()=>{
    def({
        wStoppingWhichSlotMachineWheel : 1,
        wSlotMachineWheel1Offset : 1,
        wSlotMachineWheel2Offset : 1,
        wSlotMachineWheel3Offset : 1,
    })
    def({ wSlotMachineWinningSymbol : 1 },
        {
            wSlotMachineWheel1BottomTile : 1,
            wSlotMachineWheel1MiddleTile : 1,
            wSlotMachineWheel1TopTile : 1,
            wSlotMachineWheel2BottomTile : 1,
            wSlotMachineWheel2MiddleTile : 1,
            wSlotMachineWheel2TopTile : 1,
            wSlotMachineWheel3BottomTile : 1,
            wSlotMachineWheel3MiddleTile : 1,
            wSlotMachineWheel3TopTile : 1,
            wPayoutCoins : 2,
            // These flags are set randomly and control when the wheels stop.
            // bit 6: allow the player to win in general
            // bit 7: allow the player to win with 7 or bar (plus the effect of bit 6)
            wSlotMachineFlags : 1,
            // wheel 1 can "slip" while this is non-zero
            wSlotMachineWheel1SlipCounter : 1,
            // wheel 2 can "slip" while this is non-zero
            wSlotMachineWheel2SlipCounter : 1,
            // The remaining number of times wheel 3 will roll down a symbol until a match is
            // found, when winning is enabled. It's initialized to 4 each bet.
            wSlotMachineRerollCounter : 1,
            // how many coins the player bet on the slot machine (1 to 3)
            wSlotMachineBet : 1,
    })
},()=>{
    def({ wCanPlaySlots : 1 })
    Skip(8)
    def({ wTempCoins1 : 2 })
    Skip(2)
    def({ wTempCoins2 : 2 })
},()=>{
    def({
        wHiddenObjectFunctionArgument : 1,
        wHiddenObjectFunctionRomBank : 1,
        wHiddenObjectIndex : 1,
        wHiddenObjectY : 1
    })
    def({ wHiddenItemOrCoinsIndex : 1 },
        { wHiddenObjectX : 1 }
    )
},()=>{
    def({
        wPlayerSpinInPlaceAnimFrameDelay : 1,
        wPlayerSpinInPlaceAnimFrameDelayDelta : 1,
        wPlayerSpinInPlaceAnimFrameDelayEndValue : 1,
        wPlayerSpinInPlaceAnimSoundID : 1,
    })
    Skip(7)
    def({ wFacingDirectionList : 4 })
    Skip(3)
    def({
        wSavedPlayerScreenY : 1,
        wSavedPlayerFacingDirection : 1,
    })
},{
    wPlayerSpinWhileMovingUpOrDownAnimDeltaY : 1,
    wPlayerSpinWhileMovingUpOrDownAnimMaxY : 1,
    wPlayerSpinWhileMovingUpOrDownAnimFrameDelay : 1,
},{
    wTrainerSpriteOffset : 1,
    wTrainerEngageDistance : 1,
    wTrainerFacingDirection : 1,
    wTrainerScreenY : 1,
    wTrainerScreenX : 1,
},{
    wTrainerInfoTextBoxWidthPlus1 : 1,
    wTrainerInfoTextBoxWidth : 1,
    wTrainerInfoTextBoxNextRowOffset : 1,
},{
    wOptionsTextSpeedCursorX : 1,
    wOptionsBattleAnimCursorX : 1,
    wOptionsBattleStyleCursorX : 1,
    wOptionsCancelCursorX : 1,
},()=>{
    def({
        wBadgeNumberTile : 1,
        wBadgeNameTile : 1,
        wBadgeOrFaceTiles : Badges.Amount + 1,
    })
    Skip(1)
    def({ wTempObtainedBadgesBooleans : Badges.Amount })
},{
    wUnusedCD3D : 1,
    wNumCreditsMonsDisplayed : 1,
},()=>{
    Skip(2)
    def({ wJigglypuffFacingDirections : 4 })
},()=>{
    Skip(16)
    def({ wCutTile : 1 })
    Skip(2)
    def({ wWhichAnimationOffsets : 1 })
},()=>{
    Skip(18)
    def({
        wEmotionBubbleSpriteIndex : 1,
        wWhichEmotionBubble : 1,
    })
},{
    wChangeBoxSavedMapTextPointer : 2,  
},
    { wSavedY : 1 },
    { wTempSCX : 1 },
    { wWhichTrade : 1 },
    { wDexMaxSeenMon : 1 },
    { wPPRestoreItem : 1 },
    { wWereAnyMonsAsleep : 1 },
    { wNumShakes : 1 },
    { wWhichBadge : 1 },
    { wTitleMonSpecies : 1 },
    { wPlayerCharacterOAMTile : 1 },
    { wMoveDownSmallStarsOAMCount : 1 },
    { wChargeMoveNum : 1 },
    { wCoordIndex : 1 },
    { wSwappedMenuItem : 1 },
    { wRodResponse : 1 },
() => {
    Skip(28)

    def({ wStandingOnWarpPadOrHole : 1 },
        { wOAMBaseTile : 1 },
        { wGymTrashCanIndex : 1 }
    )

    def({
        wSymmetricSpriteOAMAttributes : 1,
        wMonPartySpriteSpecies : 1,
        wLeftGBMonSpecies : 1,
        wRightGBMonSpecies : 1,
        wFlags_0xcd60 : 1,
    })
})

Skip(9)
def({
    wActionResultOrTookBattleTurn : 1,
    wJoyIgnore : 1
})
def({ wDownscaledMonSize : 1 },
    { wNumMovesMinusOne : 1 }
)

def({ wcd6d : Name.Buffer },
    { wEvosMoves : Evolutions.Max * Evolutions.Size + 1 },
()=>{
    Skip(4)
    def({ wStatusScreenCurrentPP : 1 })
    Skip(6)
    def({ wNormalMaxPPList : Moves.Amount })
    Skip(5)
})

def({ wSerialOtherGameboyRandomNumberListBlock : 0x11 },
    { wTileMapBackup2 : area(Screen) }
)

def({ wBuffer : 30 },
{
    wEvoOldSpecies : 1,
    wEvoNewSpecies : 1,
    wEvoMonTileOffset : 1,
    wEvoCancelled : 1,
},()=>{
    def({
        wNamingScreenNameLength : 1,
        wNamingScreenSubmitName : 1,
        wAlphabetCase : 1,
    })
    Skip(1)
    def({ wNamingScreenLetter : 1 })
},{
    wChangeMonPicEnemyTurnSpecies : 1,
    wChangeMonPicPlayerTurnSpecies : 1,
},()=>{
    def({
        wHPBarMaxHP : 2,
        wHPBarOldHP : 2,
        wHPBarNewHP : 2,
        wHPBarDelta : 1,
        wHPBarTempHP : 2,
    })
    Skip(11)
    def({ wHPBarHPDifference : 2 })
},()=>{
    def({ wTownMapCoords : 1 },
        { wLearningMovesFromDayCare : 1 }
    )
    Skip(27)
    def({
        wAIItem : 1,
        wUsedItemOnWhichPokemon : 1,
    })
})

def({
    wAnimSoundID : 1,
    wBankswitchHomeSavedROMBank : 1,
    wBankswitchHomeTemp : 1,
    wBoughtOrSoldItemInMart : 1,
    wBattleResult : 1,
    wAutoTextBoxDrawingControl : 1,
    wcf0d : 1,
    wTilePlayerStandingOn : 1,
    wNPCNumScriptedSteps : 1,
    wNPCMovementScriptFunctionNum : 1,
    wTextPredefFlag : 1,
    wPredefParentBank : 1,
    wSpriteIndex : 1,
    wCurSpriteMovement2 : 1,
})
Skip(2)
def({
    wNPCMovementScriptSpriteOffset : 1,
    wScriptedNPCWalkCounter : 1,
})
Skip(1)
def({
    wGBC : 1,
    wOnSGB : 1,
    wDefaultPaletteCommand : 1,
})

def({ wPlayerHPBarColor : 2 },
    {
        wWholeScreenPaletteMonSpecies : 1,
        wEnemyHPBarColor : 1,
    }
)

def({
    wPartyMenuHPBarColors : Party.Length,
    wStatusScreenHPBarColor : 1,
})

Skip(7)

def({ wCopyingSGBTileData : 1 },
    { wWhichPartyMenuHPBar : 1 },
    { wPalPacket : 1 }
)

def({ wPartyMenuBlkPacket : 0x30 },
()=>{
    Skip(29)
    def({wStringBuffer : 20})
},()=>{
    Skip(29)
    def({
        wExpAmountGained : 2,
        wGainBoostedExp : 1
    })
})

def({
    wGymCityName : 17,
    wGymLeaderName : Name.Length,
    wItemList : 16,
    wListPointer : 2,  
    // used to store pointers, but never read
    wUnusedCF8D : 2,
    wItemPrices : 2,
    wcf91 : 1, // used with a lot of things (too much to list here)
    // which pokemon you selected
    wWhichPokemon : 1,
    // if non-zero, then print item prices when displaying lists
    wPrintItemPrices : 1
})
def({
    // type of HP bar
    // $00 = enemy HUD in battle
    // $01 = player HUD in battle / status screen
    // $02 = party menu
    wHPBarType: 1
}, {
    // ID used by DisplayListMenuID
    wListMenuID : 1
});

def({    
    // if non-zero, RemovePokemon will remove the mon from the current box,
    // else it will remove the mon from the party
    wRemoveMonFromBox : 1,
}, {
    // 0 = move from box to party
    // 1 = move from party to box
    // 2 = move from daycare to party
    // 3 = move from party to daycare
    wMoveMonType : 1,
    wItemQuantity : 1,    
    wMaxItemQuantity : 1
})