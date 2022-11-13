import axios from "axios";

export default class StarsService {
    // static uri = "https://api.nasa.gov/planetary/apod?api_key=g0T68PtLmfDBZ0vTfBfJDpT2PV7IVIWF72gvLoh7/"
    // key = "HJF2-1C1B-SFA1-7CAR"
    url = "https://images-api.nasa.gov/search?"

    getStar = async (id) => {
        let uri = this.url + `q=${id}&media_type=image`
        let response = await axios.get(uri)
        let data = response.data
        let object = {
            title: data.collection.items[0].data[0].title,
            image: data.collection.items[0].links[0].href,
            description: data.collection.items[0].data[0].description_508,
        }
        
        return object
    }
}