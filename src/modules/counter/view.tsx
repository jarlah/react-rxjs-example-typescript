import * as React from "react";

export type ViewProps = {
    number: number,
    inc: () => void,
    dec: () => void
};

const View = (props: ViewProps) => (
    <span>{props.number} <button onClick={props.inc}>+</button> <button onClick={props.dec}>-</button></span>
);

export default View;