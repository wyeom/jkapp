import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb/mongoClient";

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
export async function GET(req) {
    // console.log(req)
    const client = await clientPromise;
    let uri ='mongodb://127.0.0.1:27017/docs'

    return NextResponse.json({'aa':'aa'})
}
