import React from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     background: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#212529':'#f8f9fa'
    }

    return (
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                    className="accordion-button"
                    style={myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    >
                    <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtls Gives You A Way To Analyze Your Tet Quickly And Effectively. Be It Word Count, Character Count, Or Time To Read.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                    className="accordion-button collapsed"
                    style={myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils Is A Free Character Counter Tool That Provides Instant Character Count & Word Count Statistics For A Given Text. TextUtils Reports The Number Of Words And Characters. Thus It Is Suitable For Writing Text With A Word/character Limit.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                    className="accordion-button collapsed"
                    style={myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    <strong>Browse Compatible</strong>
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This Word Counter Software Works In Any Web Browser Such As Chrome, Firefox, Internet Explorer, Safari, Opera. It Suits To Count Characters In Facebook, Blog, Books, Excel Document, Pdf Document, Essays, Etc.
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="form-check form-switch mx-2 my-2">
                <input onClick={toggleStyle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" for="flexSwitchCheckDefault">{btntext}</label>
            </div> */}
        </div>
    );
}
