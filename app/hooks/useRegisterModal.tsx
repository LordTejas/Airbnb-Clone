import {create} from 'zustand';

export interface IRegisterModalStore {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useRegisterModal = create<IRegisterModalStore>((set) => ({
    isOpen: true,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true}),
}));

export default useRegisterModal;