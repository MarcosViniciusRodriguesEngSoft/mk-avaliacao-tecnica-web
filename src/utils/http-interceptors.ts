import { useNotification } from "@/utils/notification";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MK_AVALIACAO_BASE_URL_API,
});

http.interceptors.request.use(
    (request: InternalAxiosRequestConfig<any>) => {
        if (!request.headers['Content-Type']) {
            request.headers['Content-Type'] = 'application/json';
        }
        if (!request.headers['Accept']) {
            request.headers['Accept'] = 'application/json';
        }
        return request;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        if (error && error.response) {
            const notification = useNotification();

            switch (error.response.status) {
                case 401:
                    notification({ description: 'Usuário ou senha incorreto', type: 'warning', message: 'Falha ao Logar' })
                    break;
                case 400:
                    if (error.message === 'Bad credentials') {
                        notification({ description: 'Usuário ou senha incorreto', type: 'warning', message: 'Falha ao Logar' })
                        break;
                    }
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default http;

