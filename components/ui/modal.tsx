import React, { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-hidden" onClick={onClose}>
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-background rounded-lg shadow-lg overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
