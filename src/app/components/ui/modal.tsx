import React, { useEffect, useRef, useState } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Close modal when clicking outside of it
        const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
        };

        // Add event listener to detect clicks outside the modal
        if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener when the component unmounts or when modal closes
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
        >
            <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
            Close
            </button>
            {children}
        </div>
        </div>
    );
};

export default Modal;