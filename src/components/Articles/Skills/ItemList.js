export default function ItemList({Item}) {
    let [title, index] = Item;

    return (
        <li key={index.toString()}
            data-animation="start"
            data-sequence={index }
        >
            {title }
        </li>
    );
}