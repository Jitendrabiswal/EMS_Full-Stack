import axios from "axios";

const database_url = "http://localhost:8080/emp/findall";

export const employeedetails = () => {
    return axios.get(database_url);
}