import axios from "axios";

const axiosWithAuth = () => {

    const token = localStorage.getItem('user Token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authoization': `${token}`
        }
    });

};

export default axiosWithAuth