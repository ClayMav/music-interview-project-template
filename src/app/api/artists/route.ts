import { NextResponse } from "next/server";
import data from "@/app/api/_data/data";
import { addVariance } from "@/app/api/_common";

export async function GET(): Promise<NextResponse> {
    await addVariance();
    return new NextResponse(JSON.stringify(data.artists));
}

/*
 * Example post request that modifies the in-memory data

export async function POST(request: Request): Promise<NextResponse> {
    const body = await request.json();
    const index = data.artists.findIndex(artist => artist.id === body.id);
    data.artists[index].test = body.id;
    return new NextResponse(JSON.stringify(data.artists[index]));
}
 */