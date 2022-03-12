def({
    // Draw a c×b text box at hl
    TextBoxBorder(){
        //Top row
        hl.push();
        a.ld("┌");
        $hl.ldi(a);
        a.inc();
        $('PlaceChars').call();
        a.inc();
        $hl.ld(a);
        hl.pop();
        de.ld(Screen.Width);
        hl.add(de);

        def(()=>{
            hl.push();
            a.ld("│");
            $hl.ldi(a);
            $('PlaceChars').call(" ");
            $hl.ld("│");
            hl.pop();

            de.ld(Screen.Width);
            hl.add(de);
            b.dec();
            self.jr.nz();
        })

        // Bottom row
        a.ld("└");
        $hl.ldi(a);
        $('PlaceChars').call("─");
        $hl.ld("┘");
    }
});

Routine('PlaceChars',
    char => {
        if( char !== undefined ){
            a.ld(char);
        }
    },
    ()=>{
        d.ld(c);

        def(()=>{
            $hl.ldi(a);
            d.dec();
            self.jr.nz();
        })
    }
)