import React from 'react';

const AvatarGroup = props => {
    return <div style={{position: 'absolute', top:props.top, left:props.left, right:props.right, bottom:props.bottom, display:props.display ? 'block' : 'none'}}>
        <img className="avatars" src={require(`../images/team${props.team}.png`)} alt="avatars"/>
        <div style={{textAlign:'center', width:150, color:'white', letterSpacing:2}}>
        <h4 style={{fontWeight:100}}>{props.name}</h4>
        </div>
    </div>
}

export default AvatarGroup;