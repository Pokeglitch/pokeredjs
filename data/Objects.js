const ITEM = 0x80,
    TRAINER = 0x40,
    OPP_ID_OFFSET = 200,
    Movement = {
        Walk : 0xFE,
        Stay : 0xFF
    },
    Direction = {
        Any : 0x00,
        Vertical : 0x01,
        Horizontal : 0x02,
        Pushable : 0x10,
        Down : 0xD0,
        Up : 0xD1,
        Left : 0xD2,
        Right : 0xD3,
        None : 0xFF
    };

let Objects = json('./Objects.json');

class ObjectsData {
    constructor(name, data){
        this.Name = name;
        this.Border = data.Border;
        this.Warps = data.Warps;
        this.Signs = data.Signs;
        this.Sprites = data.Sprites;

        this.Sprites.forEach(sprite => {
            sprite.Sprite = Sprites[ sprite.Sprite ];
            
            if( sprite.Type === "Pokemon" ){
                if( typeof sprite.Pokemon !== "number" ){
                    sprite.Pokemon = Pokemon[ sprite.Pokemon ];
                }                    
            }
            else if( sprite.Type === "Trainer" ){
                if( typeof sprite.Trainer !== "number" ){
                    sprite.Trainer = Trainers[ sprite.Trainer ];
                }
            }
            else if( sprite.Type === "Item" ){
                if( typeof sprite.Item !== "number" ){
                    sprite.Item = Items[ sprite.Item ];
                }
            }
        })

        this.WarpTos = data.WarpTos;

        this.Headers = new Set();
    }
    finalize(){
        // Upgrade all Map references to the actual Map instance
        this.Warps.forEach(warp => {
            let map = Maps[ warp.Map ];
            if( map ){
                warp.Map = map;
            }
        });

        Goto(this.Name)
        this.Pointer = Data(this.Name, this.toROM());
    }
    addHeader(header){
        this.Headers.add(header);
    }
    removeHeader(header){
        this.Headers.remove(header);
    }
    toROM(){
        let sprites = this.Sprites.map( sprite => {
                let data = {
                    Sprite : sprite.Sprite.ID,
                    Y : sprite.Y + 4,
                    X : sprite.X + 4,
                    Movement : sprite.Movement ? Movement.Walk : Movement.Stay,
                    Direction : Direction[sprite.Direction],
                    Text : sprite.Text
                }

                if( sprite.Type == "Trainer" ){
                    data.Text += TRAINER;
                    data.Trainer = typeof sprite.Trainer === "number" ?
                        sprite.Trainer :
                        sprite.Trainer.ID + OPP_ID_OFFSET;
                    data.Index = sprite.Index;
                }
                else if( sprite.Type == "Pokemon" ){
                    data.Text += TRAINER;
                    data.Pokemon = typeof sprite.Pokemon === "number" ?
                        sprite.Pokemon :
                        sprite.Pokemon.ID;
                    data.Level = sprite.Level;
                }
                else if( sprite.Type == "Item" ){
                    data.Text += ITEM;
                    data.Item = typeof sprite.Item === "number" ?
                        sprite.Item :
                        sprite.Item.ID;
                }

                return data;
            });

        return {
            Border : this.Border,
            Warps : {
                Count : this.Warps.length,
                Data : this.Warps.map( warp => {
                    return {
                        Y : warp.Y,
                        X : warp.X,
                        Index : warp.Index,
                        Map : typeof warp.Map === "number" ?
                            warp.Map :
                            warp.Map.ID
                    };
                }),
            },
            Signs : {
                Count : this.Signs.length,
                Data : this.Signs.map( sign => {
                    return {
                        Y : sign.Y,
                        X : sign.X,
                        Text : sign.Text
                    };
                })
            },
            Sprites : {
                Count : sprites.length,
                Data : sprites
            },
            WarpTos : this.WarpTos.map(warpTo => {
                let data = {},
                    [header] = this.Headers;

                if( warpTo.Address ){
                    data.OverworldBlock = [ warpTo.Address & 0xFF, warpTo.Address >> 8 ];
                }
                else{
                    let width = warpTo.hasOwnProperty("Width") ?
                        warpTo.Width :
                        header.Width;
                    
                    data.OverworldBlock = wOverworldMap[7 + width + (width + 6) * (warpTo.Y >> 1) + (warpTo.X >> 1)];
                }
                
                data.Y = warpTo.Y;
                data.X = warpTo.X;
                return data;
            })
        }
    }
}

Object.keys(Objects).forEach(name => {
    let value = Objects[name];
    Objects[name] = new ObjectsData(name, value);
});