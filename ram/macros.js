function area(x){
    return x.Width * x.Height;
}

function tiles(x){
    return x * Tile['2bpp'].Length;
}

function flag_array(x){
    return Math.ceil(x/8);
}

function expand(value, amount){
    if( typeof value === 'number' || value instanceof Number ){
        return value * amount;
    }
    else if(Array.isArray(value)){
        return value.map( x => expand(x, amount) );
    }
    else if( value.constructor === Object ){
        let out = {};
        for(let key in value){
            out[key] = expand(value[key], amount);
        }
        return out;
    }
}