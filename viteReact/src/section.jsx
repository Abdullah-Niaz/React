import Article from "./article";
import Aside from "./aside";
import './style/Section.css';

function Section(){
    return (
        <>
        <div className="section">
            <div className="article">

            <Article/>
            </div>
            <div className="aside">

            <Aside/>
            </div>
        </div>
        </>
    )
}
export default Section;