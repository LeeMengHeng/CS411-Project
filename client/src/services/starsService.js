import axios from "axios";

export default class StarsService {
    // static uri = "https://api.nasa.gov/planetary/apod?api_key=g0T68PtLmfDBZ0vTfBfJDpT2PV7IVIWF72gvLoh7/"
    // key = "HJF2-1C1B-SFA1-7CAR"
    url = "https://jsonplaceholder.typicode.com/todos/"

    getStar = async (id) => {
        let uri = this.url + id
        let response = await axios.get(uri)
        console.log(response.data)
        let data = response.data
        return data
    }
}