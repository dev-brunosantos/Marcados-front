import { InputComponent } from "@/src/components/Inputs";
import { TeclaContainer, Tela } from "@/src/components/Tela";

export default function Login() {
    return(
        <Tela>
            <TeclaContainer>
                <InputComponent placeholder="Usuario"/>
                <InputComponent isPassword={true} placeholder="Senha"/>
            </TeclaContainer>
        </Tela>
    )
}