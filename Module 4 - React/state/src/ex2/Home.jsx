import Item from "./Item";

export default function Home({ store, shouldDiscount }) {
    return (
        <div>
            {
                store.map((storeItem, i) => <Item key={i} shouldDiscount={shouldDiscount} item={storeItem.item} discount={storeItem.discount} price={storeItem.price}/>)
            }
        </div>

    )
}