import React, {useState} from 'react';

const ShoppingList = (props) => {
  const [price, setPrice] = useState(0);

    // let {thing, price, setPrice} = props;
    // let checks = document.querySelectorAll(".checkBox");
    function changeHandler(checkbox){
        if(checkbox.checked){
            setPrice((prev) => prev + checkbox.value)
        } else{
            setPrice((prev) => prev - checkbox.value)
        }
    }


    return(
        <div style={{"display": "flex"}}>
            {props.map((prop) => {
                <label key={prop.item}>
                        <input type="checkbox" value={prop.price} onChange={(e) => changeHandler(e.target)}></input>
                        <div> {prop.item} {prop.price} </div>
                </label>
            })}
            <div>총 금액: {price}</div>
        </div>
    )
}

export default ShoppingList;