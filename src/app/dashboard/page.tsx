'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { selectAllUsers, selectUser } from "@/lib/repository";
import { User } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function Dashboard () {
    const searchParams = useSearchParams();
    const [currentUser, setCurrentUser] = useState<User>();

    async function loadUser() {
        const username = searchParams.get('username');
        
        if (username) {
            const userData = await selectUser(username);
            console.log('userData', userData);
            
            if (userData) {
                setCurrentUser(userData);
            }
        }
    }

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <>
            <h1>Hello { searchParams.get('username') }!</h1>
            <Button onClick={() => console.log('USER', currentUser)}>Log user</Button>
            {/* {
                Object.entries(currentUser).map(([key, value]) => (
                    <p id={key} key={key}>{ `Key: ${ key } | Value: ${ value }` }</p>
                ))
            } */}
        </>
    )
}