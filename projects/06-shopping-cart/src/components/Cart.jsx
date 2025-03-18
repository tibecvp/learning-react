import { useId } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img
                            src='https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png'
                            alt='Iphone 5s'
                        />
                        <div>
                            <strong>iphone 5s</strong> - $199.99
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                    Clear Cart
                </button>
            </aside>
        </>
    )
}