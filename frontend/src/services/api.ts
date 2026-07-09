import axios from "axios";

/*
 * Instância única do Axios utilizada para realizar
 * todas as requisições HTTP ao backend.
 *
 * A URL base evita repetir o endereço da API
 * em cada chamada realizada pela aplicação.
 */
export const api = axios.create({
    baseURL: "http://localhost:5063/api"
});