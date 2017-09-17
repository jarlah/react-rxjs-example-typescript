import * as React from "react";

export type ViewProps = {
    number: number,
    inc: () => void,
    dec: () => void
};

const View = (props: ViewProps) => (
    <div>
        <span>{props.number}</span>
        <button onClick={props.inc}>+</button>
        <button onClick={props.dec}>-</button>
    </div>
);

export default View;