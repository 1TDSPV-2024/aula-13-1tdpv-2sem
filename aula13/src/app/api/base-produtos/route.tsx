import { NextResponse } from "next/server";
import { promises as gemaplys } from "fs";
export async function GET() {
    const file = await gemaplys.readFile(process.cwd() + "/src/data/base.json", "utf8")
    const fileParsed = JSON.parse(file)
    return NextResponse.json(fileParsed)
}