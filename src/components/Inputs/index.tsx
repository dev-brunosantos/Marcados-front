"use client"

import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
}

export const InputProps = ({ isPassword = false }: InputProps) => {

    const [type, setType] = useState<string>("password");

    const verificarSenha = () => {
        setType(type === "password" ? "text" : "password");
    }

    if (isPassword) {
        return (
            <div>
                <input type={type} />
                <button onClick={verificarSenha} className="ml-2 p-1 bg-gray-200 rounded">
                    VER
                </button>
            </div>
        )
    }

    return (
        <div>
            <input type="text" />
        </div>
    )
}