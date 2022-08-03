import axios from 'axios';

export const getAllUsersFromServer = async () => {
    try {
        const data = await axios.get('http://localhost:3333/user');
        return data;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}