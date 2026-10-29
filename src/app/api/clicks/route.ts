import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(links.map((link) => link.id));

// 링크별 클릭 수 조회: { github: 3, blog: 1, ... }
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
    return NextResponse.json(counts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 503 });
  }
}

// 클릭 1회 기록: body { id: "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : null;
  if (!id || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    const result = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 503 });
  }
}
