import axiosClient from "./axiosClient";

// Call API Catalory get list data
const categoryApi = {
    getAll(params) {
        const url = 'products/categories'
        return axiosClient.get(url, {params})
    },
    get(id){
        const url = `products/categories/${id}`
        return axiosClient.get(url)
    },
    add(data){
        const url = 'products/categories'
        return axiosClient.post(url, data)
    },
    update(data){
        const url = `products/categories${data.id}`
        return axiosClient.patch(url, data)
    },
    remove(id){
        const url = `products/categories${id}`
        return axiosClient.delete(url)
    },
    getSpecific(data){
        const url = `products/category/${data}`
        return axiosClient.get(url)
    }
}

export default categoryApi;