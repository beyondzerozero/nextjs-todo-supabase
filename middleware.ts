import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    // 세션(쿠키)를 이용한 Auth 관리가 가능해짐 
    const supabase = createMiddlewareClient({ req, res })
    await supabase.auth.getSession()
    return res
}
