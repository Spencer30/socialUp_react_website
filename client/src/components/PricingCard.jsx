import React from "react";

const PricingCard = (props) => {
  return (
    <div className="pricingCard">
      <div style={{ textAlign: "center" }}>
        <h2>{props.title}</h2>
      </div>
      <ul style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:0}}>
        <div style={{textAlign:'left'}}>
        <li style={{marginBottom:'1.5rem'}}>{props.bulletOne}</li>
        <li style={{marginBottom:'1.5rem'}}>{props.bulletTwo}</li>
        <li style={{marginBottom:'1.5rem'}}>{props.bulletThree}</li>
        <li style={{marginBottom:'1.5rem', display:props.bulletFour ? 'list' : 'none'}}>{props.bulletFour}</li>
        </div>
      </ul>
      <div style={{ textAlign: "center" }}>
        <h2 style={{display: props.cost ? 'block' : 'none'}}>{props.cost}</h2>
        <button style={{borderColor:'#3ac67f'}} className="pricingBtn">{props.btnText}</button>
      </div>
    </div>
  );
};

export default PricingCard;
