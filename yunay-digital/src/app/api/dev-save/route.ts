import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// TEMPORARY dev-only endpoint used to export generated brand images. Safe to delete.
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'dev only' }, { status: 403 });
  }

  const { name, data } = await req.json();
  if (typeof name !== 'string' || !/^[a-z0-9-]+\.(png|jpg|ico)$/.test(name)) {
    return NextResponse.json({ error: 'bad name' }, { status: 400 });
  }

  const buf = Buffer.from(data, 'base64');
  const dir = path.join(process.cwd(), 'public', 'brand');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, name), buf);
  return NextResponse.json({ ok: true, name, bytes: buf.length });
}
