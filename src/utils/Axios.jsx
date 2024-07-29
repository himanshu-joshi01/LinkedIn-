import axios from "axios";

const prodAxios = axios.create({
    baseURL: "https://fakestoreapi.com/"
})
// const instance = axios.create({
//     baseURL: 'https://dummyjson.com/'
// })

const postAxios = axios.create({
    baseURL:'https://dummyjson.com/'
});

export {prodAxios,postAxios};