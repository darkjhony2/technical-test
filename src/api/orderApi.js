import * as connection from './connection'
import {URL_API} from '../config'

export const list = () => {
    let config = {
        method: 'GET',
        url: URL_API + "api/v1/orders"
    }
    return connection.sendPetition(config);
}

export const deleteOrder = (id) => {
    const url = URL_API + "api/v1/orders?id=" + id;
    return connection.sendDeleteBody(url);
}