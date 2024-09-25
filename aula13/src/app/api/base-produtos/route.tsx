/* INSOMNIA */
import { NextResponse } from "next/server";
import { promises as fs } from "fs"; /* async -> processos */

export async function GET() { /* AWAIT - PAUSE ASYNC FUNCTION */
    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados = JSON.parse(file);
    return NextResponse.json(dados)
}


