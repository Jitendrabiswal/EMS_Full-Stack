import axios from "axios";

console.log("EmployeeService Loaded");

const database_url = "http://localhost:8080/emp/findall";

export const employeedetails = () => {
    return axios.get(database_url);
};

const posturl = "http://localhost:8080/emp/saveddata";

export const createemployee = (employee) => {
    console.log("createemployee called");
    return axios.post(posturl, employee);
};