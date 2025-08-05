export default function Landing({name, store}) {
    const hottestItem = store.filter(item => item.hottest)[0];
    return (
        <div>
            <h1>Hello, {name}</h1>
            <h4>The hottest item is {hottestItem.item}, only for {hottestItem.price}$</h4>
        </div>
    )
}