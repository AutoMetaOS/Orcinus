//

// Current Streak
// Longest Streak
// NEW DS ID: true ?

// sha 256

const getId = ( state, type, cat, item ) => `${ type }-${ state }-${ cat }-${ item }`;

export const getUrl = ( endpoint ) =>
    `https://api.nukes.in/Orcinus/${ endpoint }?db=tracker&tok=${ localStorage.getItem( 'authKey' ) }`;