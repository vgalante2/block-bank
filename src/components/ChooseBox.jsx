import React from 'react';

function ChooseBox({img, title, text}) {
return (
<div className="choose-box">
    <i className={img}></i>
<div className="choose-text">
     <h2>{title}</h2>
      <p>{text}</p>
</div>
</div> 
);
}

export default ChooseBox;