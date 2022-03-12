let js2gb = require('js2gb');

let rom = new js2gb({
    Header : {
        Title : "POKEMON RED",
        NewLicensee : "01",
        SuperGB: true,
        Type: 0x13,
        ROMBanks: 64,
        RAMBanks: 4,
        ForJapan: false
    },
    CharMap : require('./charmap.js'),
    Base : {
        ROM : './baserom.gb',
        SYM : './baserom.sym'
    },
    Output : {
        ROM : './pokered.gb',
        SYM : './pokered.sym'
    },
    Options : {
        Strict : false,
    },
    Source : {
        RAM : './ram/ram.js',
        ROM : './main.js'
    }
});