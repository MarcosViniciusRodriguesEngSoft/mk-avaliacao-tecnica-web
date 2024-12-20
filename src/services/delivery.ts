
import { IConsultationAddressDTO } from '@/models/mk-avaliacao-api.model';
import { IAxiosResponseCustom } from '@/models/response.model';
import http from "@/utils/http-interceptors";

export const useAdderessService = () => {
    const resourceURL = 'https://viacep.com.br';

    const findCepAddress = (cep: string): Promise<IAxiosResponseCustom<IConsultationAddressDTO>> => {
        return http.get(`${resourceURL}/ws/${cep}/json/`);
    }

    return {
        findCepAddress
    };

};
