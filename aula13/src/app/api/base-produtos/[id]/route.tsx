import { promises as fs} from "fs";
import { NextResponse } from "next/server";

type Produto = {
    id: number,
    nome: string;
    preco: number,
    qtd: number
}


export async function GET(request: Request, {params}: {params: {id:number}}){
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", 'utf-8')
    const dadosJson: Produto[] = JSON.parse(file)
    const produto = dadosJson.find(p => p.id == params.id)
    return NextResponse.json(produto)
}