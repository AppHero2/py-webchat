import React from "react";

export default class ErrorMessage extends React.Component {
    render() {
        return (
            <div className="alert alert-danger">
                <span>An error occured, retrying in 5 seconds:</span><br />
                {this.props.message}
            </div>
        );
    }
}
