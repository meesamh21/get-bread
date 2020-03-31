import axios from "axios";

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? "//get-bread-api-node.herokuapp.com" : "//localhost:8000"
});

export default instance
