function setBank(bank=null){
    if(bank != null){
        a.ld(bank)
    }
    hLoadedROMBank.ld(a)
    $('MBC1RomBank').ld(a)
}

function homecall(routine){
    a.ld( hLoadedROMBank )
    af.push()

    setBank( routine.Bank )
    routine.call()

    af.pop()
    setBank()
}

function farjump(routine){
    b.ld(routine.Bank)
    hl.ld(routine)
    $('Bankswitch').jp()
}

function farcopy(ram){
    ram.ld(a)
    a.ld( hLoadedROMBank )
    af.push()

    setBank( ram )
    $('CopyData').call()

    af.pop()
    setBank()
}