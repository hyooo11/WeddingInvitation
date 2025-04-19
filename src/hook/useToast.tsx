import { useState } from "react";

type ToastState = {
    message: string;
    type?: "success" | "error" | "info";
};

export const useToast = () => {
    const [toast, setToast] = useState<ToastState | null>(null);

    const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
        setToast({ message, type });
    };

    const hideToast = () => {
        setToast(null);
    };

    return { toast, showToast, hideToast };
};
