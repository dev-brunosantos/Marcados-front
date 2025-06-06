"use client";

import { useEffect, useState } from "react";
import { TeclaContainer, Tela } from "../components/Tela";
import { useRouter } from 'next/navigation';

export default function App() {

  const route = useRouter();
  // const logo = ["M", "A", "R", "C", "A", "D", "O", "S"];
  const logo = ["T", "E", "S", "T", "E", "S"];

  const [num, setNum] = useState<number>(0);
  const [txt, setTxt] = useState<string>("");

  useEffect(() => {
    const loop = setInterval(() => {
      var contador = 0;
      contador++;

      setNum((prev) => {
        if (prev < logo.length) {
          return prev + contador
        } else {
          clearInterval(loop);
          return prev;
        }
      });

      setTxt((prev) => {
        if (prev.length < logo.length) {
          return prev + logo[num];
        } else {
          return prev;
        }
      }
      );
    }, 100);

    return () => {
      clearInterval(loop);
      setTimeout(() => {
        return route.push('/home');
      }, 1500)
    }
  }, [num])

  return (
    <Tela>
      <TeclaContainer>
        <p style={{ fontSize: "3rem", fontWeight: "bold" }} className="text-center">
          {txt}
        </p>
      </TeclaContainer>
    </Tela>
  );
}
