// 4 METODOS: GET POST PUT DELETE
// Para acessar: http://localhost:3000/api/base-produtos
// A pasta app está implicita na primeira barra "/""
// Request: faz um requerimento 
// Response: resposta para quem chamou
// Insomnia: Util para fazer teste em endpoints

import { NextResponse } from "next/server";
import { promises as fs } from "fs"; // Trabalha com sistema ascincrono

// Envia uma resposta "Hello world" para quem acessar o endpoint

// asycn representa que a função é assincrona: siginifica que a função é capaz de realizar operações mais demoradas enquanto outras operações do codigo estão sendo executadas
// await ajuda serve para dizer para a função assincrona deve executar determinado comando antes de executar o resto
export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados = JSON.parse(file);

    return NextResponse.json(dados)
}

