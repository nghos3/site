import React from 'react';
import help from '../Assets/help.png';

 const Components = () => {
    return (<div class="dc-doc-layout__center">
        <h1 style={{padding: '50px 100px 50px 100px'}}>Divkit</h1>
        <h4>Click on the side Navigation tabs to go through working of various Functionalities that divkit can do</h4>
        <h6 style={{color: 'red'}}>{`(Note: the interactive examples are currently not working as they are hosted by the divkit website which is blocked by our organization we will try to bring a fix)`}</h6>
        <img src={help} style={{width: '70vw'}}_patched="1"/>
    </div>)
 }
export default Components;
