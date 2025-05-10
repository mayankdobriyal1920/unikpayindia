import React from 'react';
import {useHistory} from "react-router";

export default function BBPSPartPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div>
            <div className={"header_with_back_button"}>
                <div className={"row"}>
                    <div onClick={goBack} className={"col-2"}>X</div>
                    <div className={"col"}>BBPSPartPage</div>
                </div>
            </div>
        </div>
    )
}