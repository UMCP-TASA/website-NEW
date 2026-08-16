import { useState } from 'react';
import Welcome from './Welcome';
import Goals from './Goals';


export default function Home() {
    return(
    <div>   
        <Welcome />
        <Goals />
    </div>
    );
}