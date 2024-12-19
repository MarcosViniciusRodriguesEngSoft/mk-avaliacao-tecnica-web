import { toast, ToastOptions, Bounce } from "react-toastify";

interface INotificationOptions extends ToastOptions {
    message: string;
    description?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
}

export const useNotification = () => {
    const defaultOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    };

    return ({ message, description, type, ...options }: INotificationOptions): void => {
        const content = `${message} ${description ? `- ${description}` : ''}`;

        toast(content, {
            ...defaultOptions,
            ...options,
            type,
        });
    };
};
