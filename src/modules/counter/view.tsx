import * as React from "react";

export type ViewProps = {
    number: number,
    inc: () => void,
    dec: () => void
};

const View = (props: ViewProps) => (
    <span>{this.props.number} <button onClick={this.props.inc}>+</button> <button onClick={this.props.dec}>-</button></span>
);

export default View;