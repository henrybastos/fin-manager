'use client'

import { useSearchParams } from "next/navigation"

export default function Dashboard () {
    const searchParams = useSearchParams();

    return (
        <h1>Hello { searchParams.get('username') }!</h1>
    )
}