import { Component } from "react";

class FormComponent extends Component {
    render() {
        return (
            <div>
                <h1>Enter the Name of a Constellation:</h1>
                <input type="text"/> 
                <button>Submit</button>
            </div>
        )
    }
}

export default FormComponent;