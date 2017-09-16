import * as React from "react";
import {Person} from "../../models/person";

export type ViewProps = {
    person: Person | null,
    getPersons: () => void
}

class View extends  React.Component<ViewProps, {}> {
    componentWillMount() {
        this.props.getPersons();
    }

    render() {
        return (
            <div>
                <div>Id: {this.props.person && this.props.person.id}</div>
                <div>Name: {this.props.person && this.props.person.name}</div>
                <div>Age: {this.props.person && this.props.person.age}</div>
                <div>Sex: {this.props.person && this.props.person.sex}</div>
            </div>
        )
    }
}

export default View;