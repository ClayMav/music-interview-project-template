import { NextResponse } from "next/server";
import DATA from "../_data/data";
import { Track } from "../_data/types";
import { addVariance } from "../_common";

const TRACKS: Track[] = DATA.albums.flatMap((album) =>
    album.tracklist.map((track, index) => ({
        id: `${album.id}-${index + 1}`,
        title: track,
        position: index + 1,
        album
    }))
).sort((a, b) => a.title < b.title ? -1 : 1);

export async function GET(
    request: Request,
): Promise<NextResponse> {
    await addVariance();
    const urlParams = new URL(request.url).searchParams;
    const searchTerm = urlParams.get("searchTerm") || "";
    const tracksWithSearchTerm = TRACKS.filter((track) => track.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return new NextResponse(JSON.stringify(tracksWithSearchTerm.slice(0, 10)));
}
