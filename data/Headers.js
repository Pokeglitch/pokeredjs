const MAP = {
    BORDER : 3,
    CONNECTIONS : {
        EAST : 1,
        WEST : 2,
        SOUTH : 4,
        NORTH : 8
    }
};

let Headers = json('./Headers.json');

class HeaderData {
    constructor(id, data){
        this.ID = id;
        this.Maps = new Set();

        this.Height = data.Height;
        this.Width = data.Width;

        this.Tileset = Tilesets[data.Tileset];
        this.Tileset.addHeader(this);

        this.Blocks = Blocks[data.Blocks];
        this.Blocks.addHeader(this);

        this.Texts = null;
        this.Scripts = null;
        this.Connections = data.Connections;

        this.Objects = Objects[data.Objects];
        this.Objects.addHeader(this);

        this.Pointer = null;
    }
    // Upgrade everything that points to another map
    finalize(){
        Object.keys(this.Connections).forEach(dir => {
            let data = this.Connections[dir];
            data.Map = Maps[data.Map];
        });

        Goto(this.ID)
        this.Pointer = Data(this.ID, this.toROM() )
    }
    addMap(map){
        this.Maps.add(map);
    }
    removeMap(map){
        this.Maps.remove(map);
    }
    toROM(){
        let id = this.ID.replace("Header","");
        return {
            Tileset : this.Tileset.Index,
            Height : this.Height,
            Width : this.Width,
            Blocks : this.Blocks.Pointer,
            Texts : $(id + '_TextPointers'),
            //Texts : this.Texts.Pointer,
            Scripts : $(id + '_Script'),
            //Scripts : this.Scripts.Pointer,
            Connections : this.ROMConnections(),
            Objects : $(id + 'Objects'),
            //Objects : this.Objects.Pointer
        }
    }
    ROMConnections(){
        let ROMData = {
                Flag : 0
            },
            getOffsets = offset => {
                let source = 0,
                    target = offset + 3;
                if(target < 2){
                    source = -target;
                    target = 0;
                }
                return { source, target }
            },
            toROM = (con, offsets, data) => {
                return {
                    Map : con.Map.Index,
                    ConnectionStart : con.Map.Header.Blocks.Pointer[data.ConnectionStartBlock],
                    OverworldStart : wOverworldMap[data.OverworldStartBlock],
                    Size : data.Length - offsets.source,
                    Width : con.Map.Header.Width,
                    Y : data.Y,
                    X : data.X,
                    OverworldEnd : wOverworldMap[data.OverworldEndBlock]
                };
            };

        if(this.Connections.North){
            let con = this.Connections.North,
                offsets = getOffsets(con.Offset),
                data = {
                    ConnectionStartBlock : (con.Map.Header.Width * (con.Map.Header.Height-3)) + offsets.source,
                    OverworldStartBlock : offsets.target,
                    OverworldEndBlock : (con.Map.Header.Width + 6) * con.Map.Header.Height + 1,
                    Y : con.Map.Header.Height * 2 - 1,
                    X : con.Offset * -2,
                    Length : this.Width + 3 - con.Offset
                };

            // Don't exceed width of other map
            if(data.Length > con.Map.Header.Width){
                data.Length = con.Map.Header.Width;
            }

            ROMData.Flag += MAP.CONNECTIONS.NORTH;
            ROMData.North = toROM(con, offsets, data);
        }

        if(this.Connections.South){
            let con = this.Connections.South,
                offsets = getOffsets(con.Offset),
                data = {
                    ConnectionStartBlock : offsets.source,
                    OverworldStartBlock : (this.Width + 6) * (this.Height + 3) + offsets.target,
                    OverworldEndBlock : (con.Map.Header.Width + 6) + 1,
                    Y : 0,
                    X : con.Offset * -2,
                    Length : this.Width + 3 - con.Offset
                };

            // Don't exceed width of other map
            if(data.Length > con.Map.Header.Width){
                data.Length = con.Map.Header.Width;
            }

            ROMData.Flag += MAP.CONNECTIONS.SOUTH;
            ROMData.South = toROM(con, offsets, data);
        }

        if(this.Connections.West){
            let con = this.Connections.West,
                offsets = getOffsets(con.Offset),
                data = {
                    ConnectionStartBlock : ( con.Map.Header.Width * (offsets.source + 1) ) - 3,
                    OverworldStartBlock : (this.Width + 6) * offsets.target,
                    OverworldEndBlock : con.Map.Header.Width * 2 + 6,
                    Y : con.Offset * -2,
                    X : con.Map.Header.Width * 2 - 1,
                    Length : this.Height + 3 - con.Offset
                };

            // Don't exceed height of other map
            if(data.Length > con.Map.Header.Height){
                data.Length = con.Map.Header.Height;
            }

            ROMData.Flag += MAP.CONNECTIONS.WEST;
            ROMData.West = toROM(con, offsets, data);
        }

        if(this.Connections.East){
            let con = this.Connections.East,
                offsets = getOffsets(con.Offset),
                data = {
                    ConnectionStartBlock : con.Map.Header.Width * offsets.source,
                    OverworldStartBlock : (this.Width + 6) * (offsets.target + 1) - 3,
                    OverworldEndBlock : con.Map.Header.Width + 6 + 1,
                    Y : con.Offset * -2,
                    X : 0,
                    Length : this.Height + 3 - con.Offset
                };

            // Don't exceed height of other map
            if(data.Length > con.Map.Header.Height){
                data.Length = con.Map.Header.Height;
            }

            ROMData.Flag += MAP.CONNECTIONS.EAST;
            ROMData.East = toROM(con, offsets, data);
        }

        return ROMData;
    }
}

Object.keys(Headers).forEach(id => {
    let value = Headers[id];
    Headers[id] = new HeaderData(id, value);
});