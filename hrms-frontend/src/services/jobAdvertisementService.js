import axios from "axios";

export default class JobAdvertisementService {

    getjobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }
}