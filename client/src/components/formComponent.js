import {Component} from "react";

import StarsService from "../services/starsService";

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.starsService = new StarsService()
    }

    getStar = async () => {
        let input = document.getElementById("input").value
        let response = await this.starsService.getStar(input)

        document.getElementById("title").textContent = response.title

        let image = document.getElementById("image")
        image.setAttribute("src", response.image)

        document.getElementById("description").textContent = response.description

        console.log(response.description)
    }

    render() {
        return (
            <div id="div">
                <div style={{height: 400}}>
                    <view style={{position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <input type="text" id="input" style={{borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}} placeholder='start exploring here...'/> 
                        <div>
                            <button className='explore' onClick={this.getStar} style={{marginTop: 10, height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>Explore</button>
                        </div>
                    </view>
                </div>
                <div>
                    <h3 id="title" style={{color: 'white'}}></h3>
                    <img id="image"/>
                    <p id="description" style={{color: 'white'}}></p>
                </div>
            </div>
        )
    }
}

export default FormComponent;