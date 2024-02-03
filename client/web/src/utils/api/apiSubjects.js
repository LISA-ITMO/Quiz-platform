import axios from 'axios';
import {QUIZ_TOKEN} from '@utils/common';

const API_BASE_URL = process.env.REACT_APP_API_SUBJECTS_URL;

const getAPIClient = axios.create({
    baseURL: `${API_BASE_URL}`,
});

// getAPIClient.interceptors.request.use((config) => {
//     config.headers.Authorization = `Token ${localStorage.getItem(QUIZ_TOKEN)}`;
//     return config;
// })

//questions[{text, answerVariants['str', 'str..'] rightAnswer
export const API_SUBJECTS = {
    subjects: {
        add: async ({subject}) => {
            const data = {
                'name_subject': subject
            }
            const answer = await getAPIClient.post('/subjects/add/', data);
            return answer;
        },
        list: async () => {
            const answer = await getAPIClient.get('/subjects/list/');
            return answer;
        },
        delete: async ({id}) => {
            const answer = await getAPIClient.delete(`/subjects/delete/${id}/`);
            return answer;
        },
    },
    themes: {
        add: async ({subjectId, theme}) => {
            const data = {
                'id_subject': subjectId,
                'name_theme': theme
            }
            const answer = await getAPIClient.post('/themes/add/', data);
            return answer;
        },
        getBySubjectId: async ({id}) => {
            const answer = await getAPIClient.get(`/themes/getBySubjectId/${id}/`);
            return answer;
        },
        list: async () => {
            const answer = await getAPIClient.get('/themes/list/');
            return answer;
        },
        delete: async ({id}) => {
            const answer = await getAPIClient.delete(`/themes/delete/${id}/`);
            return answer;
        },
    }
}