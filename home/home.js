Goto(0, 0x61);

def({
    DisableLCD(){
        let LY_VBLANK = 145;
        
        a.xor();
        rIF.ld(a);

        a.ld( rIE );
        b.ld( a );
        a[ rIE.VBlank.Index ].res();
        rIE.ld(a);

        def({
            loop(){
                a.ld( rLY );
                a.cp(LY_VBLANK);
                self.jr.nz();
            }
        })

        a.ld( rLCDC );
        a.and( rLCDC.Enable.Mask.off );
        rLCDC.ld(a);

        a.ld(b);
        rIE.ld(a);
    },

    EnableLCD(){
        a.ld( rLCDC );
        a[ rLCDC.Enable.Index ].set();
        rLCDC.ld(a);
    },

    ClearSprites(){
        a.xor();
        hl.ld( wOAMBuffer );
        b.ld( wOAMBuffer.Size );
        def({
            loop(){
                hl.ldi(a);
                b.dec();
                self.jr.nz();
            }
        });
    },

    HideSprites(){
        // TODO - this is setting the value to 160..is it setting a flag and just coincidentally matches .Size?
        a.ld( wOAMBuffer.Size );
        hl.ld( wOAMBuffer );
        de.ld( wOAMBuffer[0].Size );
        b.ld( wOAMBuffer.Length );
        def({
            loop(){
                $hl.ld(a);
                hl.add(de);
                b.dec();
                self.jr.nz();
            }
        });
    },

    FarCopyData(){
        farcopy( wBuffer );
    },

    CopyData(){
        a.ldi( $hl )
        $de.ld(a)
        de.inc()
        bc.dec()
        a.ld(c)
        a.or(b)
        self.jr.nz()
    }
});

Goto(0, 0x100)

def({
    Entry(){
        nop();
        Start.jp();
    }
});

Goto(0, 0x150)

def({
    Start(){
        let GBC = 0x11;
        
        a.cp(GBC);
        $('gbc').jr.z();
        
        a.xor();
        $('gbc:End').jr();
        
        def({
            gbc(){
                a.ld(0);
            }
        });
        
        wGBC.ld(a);
        $('Init').jp();
    },

    ReadJoypad(){
        a.ld( rJOYP.Buttons.Mask.on );
        c.ld( 0 );

        rJOYP.ld(a);
        for(let i=0;i<6;i++){
            a.ld( rJOYP );
        }

        a.cpl();
        a.and(0b1111);
        a.swap();
        b.ld(a);

        a.ld( rJOYP.DPad.Mask.on );
        rJOYP.ld(a);
        for(let i=0;i<10;i++){
            a.ld( rJOYP );
        }

        a.cpl();
        a.and(0b1111);
        a.or(b);

        hJoyInput.ld(a);
        a.ld( (1 << 4) | (1 << 5) );
        rJOYP.ld(a);
    },

    Joypad(){
        homecall( $('_Joypad') );
    }
})

MapHeaderPointers.toROM();

def({
    HandleMidJump(){
        farjump( $('_HandleMidJump') );
    }
});

Goto(0, 0x17F7);
include('./copy2.js');
include('./text.js');
