"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import Button from "../Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const RegisterModal: React.FC<{}> = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then((response) => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        type="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <hr />
      <Button
        outlined
        label="Continue With Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outlined
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center font-light mt-4">
        <div className="flex flex-row items-center justify-center gap-2">
            <div>
                Already have an account?
            </div>
            <div className="text-neutral-800 cursor-pointer hover:underline" onClick={registerModal.onClose}>
                Log In
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      disabled={isLoading}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Register"
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
