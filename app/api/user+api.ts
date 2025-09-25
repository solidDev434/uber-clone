import { neon } from "@neondatabase/serverless";

export async function POST(requests: Request) {
  try {
    const sql = neon(`${process.env.NEON_DATABASE_URL}`);
    const { name, email, clerkId } = await requests.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await sql`
      INSERT INTO users (
        name,
        email,
        clerk_id
      ) VALUES (
        ${name},
        ${email},
        ${clerkId}
      )
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 201,
    });
  } catch (err: any) {
    console.log(err);
    return Response.json(
      { error: { errors: [{ longMessage: err?.message }] } },
      { status: 500 }
    );
  }
}
