import data from './data';
import github from '../../../res/icons/contacts/github.png'
export default function ItemProject({ Item }) {
    let [item, index] = Item;
    return (
        <li key={item.title.toString()}>
            <video controls name="media" width="400px">
                <source src={item.video}></source>
            </video>
            <div>
                <a href={item.github_link} target="_blank">
                    <h3 data-animation="start" data-sequence={index}>{item.title}</h3>
                    <img src={github} alt="" width="40px" height="40px"></img>
                </a>
                <p>{item.decription}</p>
            </div>
        </li>
    );
}