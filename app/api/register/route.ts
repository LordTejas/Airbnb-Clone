import bcrypt from "bcrypt";

import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";

export interface IPostReqBody {
    name: string;
    email: string;
    password: string;
}

export function isPostReqBody(object: any): object is IPostReqBody {
    if (object !== null && typeof object == 'object') {
        return typeof object.name === 'string' && typeof object.email === 'string' && typeof object.password === 'string';
    }
    return false;
}

export async function POST(request: Request) {

    const body: unknown = await request.json();

    if (isPostReqBody(body)) {
        const { name, email, password } = body;
        
        const hashedPassword = await bcrypt.hash(password, 12);
    
        try {
            const user = await prisma.user.create({
                data: {
                    email,
                    name,
                    hashedPassword,
                }
            });

            return NextResponse.json(user);

        } catch (err: any) {
            return NextResponse.json({error: err.message}, {status: 400});
            PrismaClientKnownRequestError.
        }

    }

    return NextResponse.json({ error: 'Invalid request body' }, { status: 400});
}