import {url} from'./apiServer'

const propertyTypeUrl = url + "propertyTypes"

export const getAll= () =>{
    return fetch(propertyTypeUrl + "/getall")
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const getByName= (name) =>{
    return fetch(propertyTypeUrl + `/getByName?name=${name}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const create= (name) =>{
    return fetch(propertyTypeUrl + `/create?name=${name}`,{
        method: "POST"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};

export const deleted= (name) =>{
    return fetch(propertyTypeUrl + `/deleted?name=${name}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
};