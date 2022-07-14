import { Work } from ".";

export function sum ( str ) {
    let sum = 0;
    for ( let i = 0;i < str.length;i++ ) sum += parseInt( str[ i ], 16 );

    return sum;
};

export const auth = {
    ask: async () => {
        const entry = prompt( 'Enter auth key:' );
        const hash = await Work( ( {
            exec: "hash",
            params: [ entry ]
        } ) );

        console.log( 'Hash', hash, sum( hash ) );
        return {
            hash,
            sum: sum( hash )
        };
    },
    check: async () => {
        const key = localStorage.getItem( 'authKey' ) || null;
        if ( key ) return true;
        const { sum, hash } = await auth.ask();
        if ( sum !== 466 ) auth.check();

        localStorage.setItem( 'authKey', hash );
        return true;
    }
}
