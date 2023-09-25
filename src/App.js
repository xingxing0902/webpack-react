import React, { Component } from 'react'
import axios from 'axios'

import Img1 from './img/1.gif'

export default class App extends Component {
    componentDidMount(){
        axios.get('/data')
        .then(res=>{
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                Apps组件
                <img src={Img1}/>

            </div>
        )
    }
}
    
