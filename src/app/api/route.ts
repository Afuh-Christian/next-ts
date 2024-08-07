import { NextResponse } from "next/server";



export async function GET(){
  return NextResponse.json({hello:"World"});
};


export async function handler(){
  return NextResponse.json({hello:"World"});
};