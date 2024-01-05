import { NextResponse } from "next/server";

export async function getDetailsOf(ip: string) {
    const res = await (await fetch(`https://ipinfo.io/${ip}?token=${process.env.IP_INFO}`)).json();
    const coordinates: String = res["loc"]?.split(',');
    if (!coordinates) throw "Invalid Address";

    return NextResponse.json({
        country: res["country"],
        city: res["city"],
        coordinates: coordinates != null
            ? {
                latitude: coordinates[0],
                longitude: coordinates[1]
            }
            : undefined
    });
}