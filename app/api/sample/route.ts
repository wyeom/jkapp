import { NextResponse } from 'next/server';

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
//ex) /api/members/route.js
export async function GET(req) {
    // console.log(req)
    return NextResponse.json({'aa':'aa'})
}
