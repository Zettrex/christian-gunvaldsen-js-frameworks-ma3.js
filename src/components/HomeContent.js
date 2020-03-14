import React from "react";
import Heading from "./Heading";

export default function (props) {
    return (
        <div>
            <Heading content="HomePage"/>
            {props.children}
        </div>
    )
}