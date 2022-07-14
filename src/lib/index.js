const worker = new Worker( 'worker.js' );

export const Work = ( inputs ) => {
    return new Promise( ( resolve, reject ) => {
        worker.onmessage = ( { data } ) => resolve( data );
        worker.onerror = reject;

        worker.postMessage( inputs );
    } );
};