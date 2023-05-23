"use client";

import { useState, useEffect, useCallback } from "react";
import {IoMdClose} from "react-icons/io";
import Button from "../Button";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">

          {/* CONTENT */}
          <div
            className={`
            translate 
            duration-300 
            h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"} 
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative flex flex-col w-full bg-white outline-none focus:outline-none translate h-full md:h-auto border-0 rounded-lg shadow-lg">

                {/* HEADER */}
                <div className="relative border-b-[1px] flex items-center p-6 rounded-t justify-center">
                    <button type="button" title="close-btn" className="absolute left-9 p-1 border-0 hover:opacity-70 transition" onClick={handleClose}>
                        <IoMdClose size={18} />
                    </button>

                    <div className="text-md font-semibold">
                        {title}
                    </div>

                </div>

                {/* BODY */}
                <div className="relative flex-auto p-6">
                  {body}
                </div>

                {/* FOOTER */}
                <div className="flex flex-col gap-2 p-6">
                    <div className="flex flex-row items-center gap-4 w-full">
                        {secondaryAction &&  secondaryActionLabel && <Button label={secondaryActionLabel} outlined onClick={secondaryAction} />}
                        <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                    </div>

                    {footer}
                </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Modal;
