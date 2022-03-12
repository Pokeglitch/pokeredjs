def({
    FarCopyData2(){
        farcopy( hROMBankTemp );
    },

    FarCopyData3(){
        hROMBankTemp.ld(a);
        a.ld( hLoadedROMBank );
        af.push();
        setBank( hROMBankTemp );
        hl.push();
        de.push();
        de.push();
        d.ld(h);
        e.ld(l);
        hl.pop();
        $('CopyData').call();
        de.pop();
        hl.pop();
        af.pop();
        setBank();
    },

    FarCopyDataDouble(){
        hROMBankTemp.ld(a);
        a.ld( hLoadedROMBank );
        af.push();
        setBank( hROMBankTemp );
        def(()=>{
            a.ldi(hl);
            $de.ld(a);
            de.inc();
            $de.ld(a);
            de.inc();
            bc.dec();
            a.ld(c);
            a.or(b);
            self.jr.nz();
        })
        af.pop();
        setBank();
    },

    CopyVideoData(){
        a.ld( hAutoBGTransfer.Enabled );
        af.push();
        a.xor();
        hAutoBGTransfer.Enabled.ld(a);

        a.ld( hLoadedROMBank );
        hROMBankTemp.ld(a);

        setBank(b);
        a.ld(e);
        hVBlankCopySource[0].ld(a);
        a.ld(d);
        hVBlankCopySource[1].ld(a);

        a.ld(l);
        hVBlankCopyDest[0].ld(a);
        a.ld(h);
        hVBlankCopyDest[1].ld(a);

        def(()=>{
            a.ld(c);
            a.cp(8);
            $('exit:End').jr.nc();

            def({
                exit(){
                    hVBlankCopySize.ld(a);
                    $('DelayFrame').call();
                    setBank(hROMBankTemp);
                    af.pop();
                    hAutoBGTransfer.Enabled.ld(a);
                    ret();
                }
            })

            a.ld(8);
            hVBlankCopySize.ld(a);
            $('DelayFrame').call();
            a.ld(c);
            a.sub(8);
            c.ld(a);
            self.jr();
        })
    },

    CopyVideoDataDouble(){
        a.ld( hAutoBGTransfer.Enabled );
        af.push();
        a.xor();
        hAutoBGTransfer.Enabled.ld(a);

        a.ld( hLoadedROMBank );
        hROMBankTemp.ld(a);

        setBank(b);
        a.ld(e);
        hVBlankCopyDoubleSource[0].ld(a);
        a.ld(d);
        hVBlankCopyDoubleSource[1].ld(a);

        a.ld(l);
        hVBlankCopyDoubleDest[0].ld(a);
        a.ld(h);
        hVBlankCopyDoubleDest[1].ld(a);

        def(()=>{
            a.ld(c);
            a.cp(8);
            $('exit:End').jr.nc();

            def({
                exit(){
                    hVBlankCopyDoubleSize.ld(a);
                    $('DelayFrame').call();
                    setBank(hROMBankTemp);
                    af.pop();
                    hAutoBGTransfer.Enabled.ld(a);
                    ret();
                }
            })

            a.ld(8);
            hVBlankCopyDoubleSize.ld(a);
            $('DelayFrame').call();
            a.ld(c);
            a.sub(8);
            c.ld(a);
            self.jr();
        })
    },

    ClearScreenArea(){
        a.ld(" ");
        de.ld(20);
        def(()=>{
            hl.push();
            bc.push();
            def(()=>{
                $hl.ldi(a);
                c.dec();
                self.jr.nz();
            })
            bc.pop();
            hl.pop();
            hl.add(de);
            b.dec();
            self.jr.nz();
        })
    },

    CopyScreenTileBufferToVRAM(){
        c.ld(6);
        for(let i=0; i<3; i++){
            hl.ld( 0x600 * i );
            de.ld( wTileMap[6*i][0] );
            $('CopyScreenTileBufferToVRAMSetup').call();
            // TODO - option to auto switch call to jp if at end of routine...
            if( i < 2 ){
                $('DelayFrame').call();
            }
            else{
                $('DelayFrame').jp();
            }
        }
    },

    CopyScreenTileBufferToVRAMSetup(){
        a.ld(d);
        hVBlankCopyBGSource[1].ld(a);
        $('GetRowColAddressBgMap').call();
        a.ld(l);
        hVBlankCopyBGDest[0].ld(a);
        a.ld(h);
        hVBlankCopyBGDest[1].ld(a);
        a.ld(c);
        hVBlankCopyBGNumRows.ld(a);
        a.ld(e);
        hVBlankCopyBGSource.ld(a);
    },

    ClearScreen(){
        bc.ld( wTileMap.Size );
        b.inc();
        hl.ld( wTileMap );
        a.ld(" ");
        def(()=>{
            $hl.ldi(a);
            c.dec();
            self.jr.nz();
            b.dec();
            self.jr.nz();
            $('Delay3').jp();
        })
    }
});