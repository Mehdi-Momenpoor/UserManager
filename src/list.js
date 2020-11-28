function ListItem({ text }) {
    return <li>{text}</li>
}

function List({ items }) {
    return (
        <ul>
            {items.map(item => <ListItem text={item.text} key={item.id} />)}
        </ul>
    )
}

export default List;