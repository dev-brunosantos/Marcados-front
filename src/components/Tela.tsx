import { ChildrenProps } from "../interfaces/childrenProps";

export const Tela = ({ children }: ChildrenProps) => {
    return (
        <div className="w-[100vw] h-full flex items-center justify-center">
            {children}
        </div>
    );
}

export const TeclaContainer = ({ children }: ChildrenProps) => {
    return (
        <div className="w-[100vw] min-h-[100vh] flex items-center justify-center">
           { children}
        </div>
    );
}