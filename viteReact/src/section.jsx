import Article from "./article";
import Aside from "./aside";
import './style/Section.css';

function Section(){
    return (
        <>
        <div classNameName="section">
            <div classNameName="article">

            <Article/>
            </div>
            <div classNameName="aside">

            <Aside/>
            </div>
        </div>
        </>
    )
}
export default Section;