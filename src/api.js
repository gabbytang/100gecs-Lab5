import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/H2ePaXj10hJOcosxap7aVTJxPVQt4tJg',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};
export default api;