
import axios from "axios";
import { isInterfaceDeclaration } from "typescript";

// http://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL : "http://viacep.com.br/ws/"
})

export default api;
