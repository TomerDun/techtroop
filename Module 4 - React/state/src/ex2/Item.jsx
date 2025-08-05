export default function Item({item, price, discount, shouldDiscount}) {
    return (
        <div>
            {item}, {shouldDiscount ? Math.floor((price * (1 - discount))) : price}$
        </div>
    )
}