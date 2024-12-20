import { useGlobalContext } from '@/context/GlobalContext';
import { IConsultationAddressDTO } from '@/models/mk-avaliacao-api.model';
import { useAdderessService } from '@/services/delivery';
import { useNotification } from '@/utils/notification';
import { useState } from 'react';

export function useFindData() {
    const { setIsGlobalLoading } = useGlobalContext();
    const addressService = useAdderessService();
    const notification = useNotification();
    const [consultationAddress, setConsitationAddress] = useState<IConsultationAddressDTO>();

    const findAdderess = async (cep: string) => {
        if (cep?.length != 9) return;
        setIsGlobalLoading(true);
        try {
            const { data } = await addressService.findCepAddress(cep?.replace("-", ""));
            setConsitationAddress(data);
        } catch {
            notification({ description: 'Erro ao buscar informações do endereço', type: 'error', message: 'Erro!' });
        } finally {
            setIsGlobalLoading(false);
        }
    };

    return { findAdderess, consultationAddress };
}
