import './style.css';
import github from '../../../res/icons/contacts/github.png'
import data from './data';
import ItemProject from "./ItemProject"
export default function Projects() {

    let list_data = data.map((item,index) => <ItemProject key={item.title.toString()} Item={[item, index]}></ItemProject>)
    return (
        <article data-page_id="Projects" cheked="false" className="Projects">
            <ul>
                {list_data}
                <li key={"More in my Git-Hub"}>
                    <div>
                        <a href="https://github.com/AlexReshetnik" target="_blank">
                            <h3 data-animation="start" data-sequence="17">More in my Git-Hub</h3>
                            <img src={github} alt="" width="40px" height="40px"></img>
                        </a>
                    </div>
                </li>
            </ul>
        </article>
    );
}


