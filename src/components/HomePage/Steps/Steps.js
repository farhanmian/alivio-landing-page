import cssClasses from '../../../../styles/Steps.module.css';
import Boxes from './Boxes';
import Top from './Top';



export default function Steps() {
    return (
        <section className={cssClasses.steps}>
            <div className={cssClasses.container}>
                <Top />
                <Boxes />
            </div>
        </section>
    )
}
