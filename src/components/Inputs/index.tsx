"use client"

import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
}

export const InputComponent = ({ isPassword = false }: InputProps) => {

    const [type, setType] = useState<string>("password");

    const verificarSenha = () => {
        setType(type === "password" ? "text" : "password");
    }

    if (isPassword) {
        return (
            <div className="w-[90%] h-[54px] mt-2 mb-2 border rounded-sm overflow-hidden relative">
                <input type={type} className="w-full h-full pl-3 outline-none"/>
                <button 
                    onClick={verificarSenha} 
                    className="h-full bg-transparent absolute top-0 right-3 ml-2 p-1 ">
                    VER
                </button>
            </div>
        )
    }

    return (
        <div className="w-[90%] h-[54px] mt-2 mb-2 border rounded-sm overflow-hidden relative">
            <input type="text" className="w-full h-full pl-3 outline-none"/>
        </div>
    )
}