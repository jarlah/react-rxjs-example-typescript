import * as React from "react";

export type ViewProps = {
    number: number,
    inc: () => void,
    dec: () => void
};

export default class View extends React.Component<ViewProps, {}> {
    render() {
        return <span>{this.props.number} <button onClick={this.props.inc}>+</button> <button onClick={this.props.dec}>-</button></span>;
    }
}