import React from 'react';

const AppSteps = props => {
    return <div className={`steps ${props.reverse}`}>
        <div className="stepText">
            <h1 style={{fontSize:72, marginBottom:8}}>{props.title}</h1>
            <hr style={{border:'3px solid #3ac67f', width:200, borderRadius:25, margin:0}}></hr>
            <h2 style={{fontWeight:100}}>{props.subTitle}</h2>
            <ul className="appList">
                <li><span style={{color:'#242323'}}>{props.bulletOne}</span></li>
                <li><span style={{color:'#242323'}}>{props.bulletTwo}</span></li>
                <li><span style={{color:'#242323'}}>{props.bulletThree}</span></li>
            </ul>
        </div>
        <div className="stepImg" onClick={props.onClick}>
            <img className="stepPhone" src={props.image} alt="phone app"/>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{height:30, width:30, backgroundColor:'pink', borderRadius:'50%'}}></div>
                <h5 style={{margin:0, marginTop:8, marginLeft:5}}>Click Me</h5>
            </div>
        </div>
    </div>
}

export default AppSteps;