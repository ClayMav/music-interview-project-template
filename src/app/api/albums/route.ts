import { NextResponse } from "next/server";
import data from "@/app/api/_data/data";
import { addVariance } from "@/app/api/_common";

export async function GET(): Promise<NextResponse> {
    await addVariance();
    return new NextResponse(JSON.stringify(data.albums));
}
