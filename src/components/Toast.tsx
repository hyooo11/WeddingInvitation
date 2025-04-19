"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type ToastProps = {
    message: string;
    type?: "success" | "error" | "info";
    onClose: () => void;
    duration?: number; // 자동 사라짐 시간 (ms)
};

const toastColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
};

const Toast = ({ message, type = "info", onClose, duration = 3000 }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={`toast ${toastColors[type]}`}
        >
            <span className="msg">{message}</span>
        </motion.div>
    );
};

export default Toast;
