import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  console.log("Contato recebido:", { name, email, message });

  return NextResponse.json(
    { message: "Mensagem enviada com sucesso!" },
    { status: 200 }
  );
}
