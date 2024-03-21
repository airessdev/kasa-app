import "./CollapseMenu.css"
import arrow from "../../asset/img/Vector.svg"



const CollapseMenu = (text,desc) => {

    // const activate = () => {
    //     document.querySelector(".hiddenMenu").classList.toggle("show")
    // }
    console.log(desc.desc)
    
    return (



        <div className="collapseMenu">


            <p>{text.text}</p>

            <div className="hiddenMenu">

                <p className="hiddenText">{desc.desc}</p>
            </div>
        </div>
    )




}

export default CollapseMenu;