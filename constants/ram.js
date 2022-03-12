class HallOfFameClass {
    constructor(){
        this.NumTeams = 0x10
        this.Size = Party.Length * this.NumTeams;
    }
}

const 
Evolutions = {
    Max : 3,
    Size : 4
},
Map = {
    Cities : 11
},
Badges = {
    Amount : 8
},
Boxes = {
    Amount : 12
},
Moves = {
    Amount : 4
},
Name = {
    Buffer : 20,
    Length : 11
},
Item = {
    Name : {
        Length : 13
    }
},
Party = {
    Length : 6,
},
HallOfFame = new HallOfFameClass(),
Screen = {
    Height : 18,
    Width : 20
},
Tile = {
    '2bpp' : {
        Length : 2
    }
},
BG = {
    Map : {
        Height : 32,
        Width : 32
    },
},
OAMSprites = {
    Amount : 40,
    Struct : {
        YCoord : 1,
        XCoord: 1,
        TileID : 1,
        Attributes : 1
    }
},
Sprite = {
    Amount : 16,
    Struct1 : {
        PictureID: 1,               // - 0: picture ID (fixed, loaded at map init)
        MovementStatus: 1,          // - 1: movement status (0: uninitialized, 1: ready, 2: delayed, 3: moving)
        ImageIndex: 1,              // - 2: sprite image index (changed on update, $ff if off screen, includes facing direction, progress in walking animation and a sprite-specific offset)
        YStepVector: 1,             // - 3: Y screen position delta (-1,0 or 1// added to Y pixels on each walking animation update)
        YPixels: 1,                 // - 4: Y screen position (in pixels, always 4 pixels above grid which makes sprites appear to be in the center of a tile)
        XStepVector: 1,             // - 5: X screen position delta (-1,0 or 1// added to field X pixels on each walking animation update)
        XPixels: 1,                 // - 6: X screen position (in pixels, snaps to grid if not currently walking)
        IntraAnimFrameCounter: 1,   // - 7: intra-animation-frame counter (counting upwards to 4 until animation frame counter is incremented)
        AnimFrameCounter: 1,        // - 8: animation frame counter (increased every 4 updates, hold four states (totalling to 16 walking frames)
        FacingDirection: 1,         // - 9: facing direction ($0: down, $4: up, $8: left, $c: right)
        YAdjusted: 1,               // - A: adjusted Y coordinate
        XAdjusted: 1,               // - B: adjusted X coordinate
        CollisionData: 1,           // - C: direction of collision
        Unused_D : 1,               // - D
        Unused_E : 1,               // - E
        Unused_F : 1,               // - F
    },
    Struct2 : {
        WalkAnimationCounter: 1,    // - 0: walk animation counter (counting from $10 backwards when moving)
        Unused_1 : 1,               // - 1:
        YDisplacement: 1,           // - 2: Y displacement (initialized at 8, supposed to keep moving sprites from moving too far, but bugged)
        XDisplacement: 1,           // - 3: X displacement (initialized at 8, supposed to keep moving sprites from moving too far, but bugged)
        MapY: 1,                    // - 4: Y position (in 2x2 tile grid steps, topmost 2x2 tile has value 4)
        MapX: 1,                    // - 5: X position (in 2x2 tile grid steps, leftmost 2x2 tile has value 4)
        MovementByte1: 1,           // - 6: movement byte 1 (determines whether a sprite can move, $ff:not moving, $fe:random movements, others unknown)
        GrassPriority: 1,           // - 7: (?) (set to $80 when in grass, else $0// may be used to draw grass above the sprite)
        MovementDelay: 1,           // - 8: delay until next movement (counted downwards, movement status is set to ready if reached 0)
        OrigFacingDirection: 1,     // - 9: original facing direction (backed up by DisplayTextIDInit, restored by CloseTextDisplay)
        Unused_A : 1,               // - A
        Unused_B : 1,               // - B
        Unused_C : 1,               // - C
        PictureID: 1,               // - D: picture ID
        ImageBaseOffset: 1,         // - E: sprite image base offset (in video ram, player always has value 1, used to compute sprite image index)
        Unused_F: 1                 // - C
    }
},
Channel = {
    Amount : 8,
    Struct : {
        CommandPointer : 2,
        ReturnAddress : 2,
        SoundID : 1,
        Flags : [1, 1],
        Duty : {
            Cycle : 1,
            CyclePattern : 1
        },
        Vibrato : {
            DelayCounter : 1,
            Extent : 1,
            Rate : 1
        },
        FrequencyLowByte : 1,
        VibratoDelayCounterReloadValue : 1,
        PitchSlide : {
            LengthModifiers: 1,
            Frequency : {
                Step : 1,
                StepFractionalPart : 1,
            },
            CurrentFrequency : {
                FractionalPart: 1,
                HighByte: 1,
                LowByte: 1
            },
            TargetFrequency : {
                HighByte: 1,
                LowByte: 1
            }
        },
        NoteDelayCounter : 1,
        LoopCounter : 1,
        Note : {
            Speed : 1,
            CounterFractionalPart : 1
        },
        Octave : 1,
        Volume : 1
    }
};