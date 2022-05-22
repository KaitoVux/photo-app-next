import apiClient from './api-client.service';

const imageService = {
    getFeatureImages() {
        return apiClient.get<any>('images/features');
    },
};

export default imageService;
