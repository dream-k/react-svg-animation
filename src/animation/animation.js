import React from 'react';
import animationData from './animation.json';
export default class Animation extends React.Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "animationScript.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);
    }
    scriptLoaded() {
        var params = {
            container: document.getElementById('lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        };
        var anim=window.lottie.loadAnimation(params);
    }
    render(){
        return(
            <div id="lottie"></div>
        )
    }
}