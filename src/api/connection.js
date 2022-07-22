import axios from 'axios'
import Swal from 'sweetalert2';

export const sendPetition = async (config) => {
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        if(error.response.status == 401){
            alert("Error 401")
            setTimeout(function(){
                window.location.href = "http://localhost:3000/";
            }, 2000);
            return;
        }
        if(error.response == undefined){
            alert(error)
            return error;
        } else {
            alert(error)
            return error;
        }
    }
}

export const sendPostBody = async (config, body) => {
    try {
        const response = await axios.post(config.url, body, config);
        return response.data;
    } catch (error) {
        if(error.response.status == 401){
            alert("error 401");
            setTimeout(function(){
                window.location.href = "http://localhost:3000/";
            }, 2000);
            return;
        }
        if(error.response != undefined && error.response.data != undefined){
            alert(error);
            return error;
        } else {
            alert(error)
            return error;
        }
    }
}

export const sendDeleteBody = async (url,config) => {
    try {
        const response = await axios.delete(url, config);
        return response.data;
    } catch (error) {
        console.log(error)
        if(error.response.status == 401){
            alert("error 401");
            setTimeout(function(){
                window.location.href = "http://localhost:3000/";
            }, 2000);
            return;
        }
        if(error.response != undefined && error.response.data != undefined){
            alert(error);
            return error;
        } else {
            alert(error);
            return error;
        }
    }
}

export const sendPutBody = async (config, body) => {
    try {
        const response = await axios.put(config.url, body, config);
        return response.data;
    } catch (error) {
        if(error.response.status == 401){
            alert("error 401");
            setTimeout(function(){
                window.location.href = "http://localhost:3000/";
            }, 2000);
            return;
        }
        if(error.response != undefined && error.response.data != undefined){
            alert(error);
            return error;
        } else {
            alert(error);
            return error;
        }
    }
}