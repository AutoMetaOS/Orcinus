// FUNCS
function hex ( e ) { for ( var b = "", c = new DataView( e ), a = 0;a < c.byteLength;a += 4 ) { var f = c.getUint32( a ).toString( 16 ), d = "00000000"; b += ( d + f ).slice( -d.length ) } return b };

function sha256 ( str ) {
    // Get the string as arraybuffer.
    var buffer = new TextEncoder( "utf-8" ).encode( str )
    return crypto.subtle.digest( "SHA-256", buffer ).then( function ( hash ) {
        return hex( hash )
    } )
}

const send = ( data ) => {
    postMessage( data );
    close();
}
onmessage = ( { data } ) => {
    const { exec, params } = data;

    if ( exec === 'hash' ) sha256( ...params ).then( send );
};

// 0132CFA5E2A753CF12E782A4E3121D5BD8157E5C3199ECE5FDC457F3F6520486