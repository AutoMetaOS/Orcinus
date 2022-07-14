import { auth } from "./lib/auth";
import { Work } from "./lib";
import App from './App.svelte';
import './app.css';

// AUTH
let app;
auth.check().then( pass => {
    if ( pass ) app = new App( {
        target: document.getElementById( 'app' ),
        props: {
            worker: Work
        }
    } );
} );

export default app;
