export default function Box({name, design}) {
    return (
        <div className={`box ${design}`}>
            {name}
        </div>
    )
}