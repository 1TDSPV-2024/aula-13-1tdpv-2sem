import { TipoProduto } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(req:Request,{params}:{params:{id:number}}) {

    const file = await fs.readFile(process.cwd() + "/src/app/data/base.json", "utf-8");
    const dados:TipoProduto[] = JSON.parse(file);

    const produto = dados.find(p => p.id == params.id);
    return NextResponse.json(produto);
}
