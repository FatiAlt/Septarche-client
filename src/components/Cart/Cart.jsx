
import React,{useState} from 'react';
import { useEffect } from 'react';
import "./components/cart.css";


export const Cart = () => {
  return <cart>Voir le panier</cart>;
};

const Cart = ({cart, setCart, handleChange}) => {
    const [prix, setPrix] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.prix
        ))
        setPrix(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrix();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.prix}</span>
                        <button onClick={()=>handleRemove(item.id)} >Supprimer</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Prix total de votre panier</span>
            <span>Rs - {prix}</span>
        </div>
    </article>
  )
}

export default Cart
