import { Component } from "react";

import StarsService from "../services/starsService";

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.starsService = new StarsService()
    }

    getStar = async (e) => {
        let input = document.getElementById("input").value
        let response = await this.starsService.getStar(input)
        document.getElementById("response").innerText = JSON.stringify(response)
    }

    render() {
        return (
            <div>
                <h1>Enter the Name of a Constellation:</h1>
                <input type="text" id="input"/> 
                <button onClick={this.getStar}>Submit</button>

                <p id="response"></p>
            </div>
        )
    }
}

export default FormComponent;