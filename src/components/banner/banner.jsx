import React, {Component} from 'react'
import LeftNavigation from "../leftNavigation/leftNavigation";
import {RightInfo} from "../RightInfo/RightInfo";



  export class Banner extends Component {


      render() {
        return (
            <div style={{display:'flex',flexDirection:'row',flexShrink:8}}>
                <LeftNavigation />
                <RightInfo/>
            </div>
        )
    }
}

