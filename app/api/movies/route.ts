import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
    const client = await clientPromise;
       const db = client.db("docs");

       try{
       const movies = await db
           .collection("movies")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       return NextResponse.json(movies)
    }catch(e){
        console.error(e);
    }
}
