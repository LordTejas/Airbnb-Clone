'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState, useCallback } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import Modal from './Modal';
import useRegisterModal from '@/app/hooks/useRegisterModal';

const RegisterModal:React.FC<{}> = () => {
    
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
        .then((response) => {
            registerModal.onClose();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
    <Modal
    isOpen={registerModal.isOpen}
    disabled={isLoading}
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    title='Register'
    actionLabel='Continue'
    />
    );
}

export default RegisterModal;