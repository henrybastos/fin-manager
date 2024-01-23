'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { useState } from "react"

export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const User = z.object({
        username: z.string().min(5, { message: 'At least 5 characters.'}),
        password: z.string()
    })

    function validateLogin () {
        const result = User.safeParse({
            username,
            password
        });

        if (!result.success) {
            for (let err of result.error.issues) {
                const { message, path, code } = err;
                console.log(`[${ code.split('_').join(' ').toUpperCase() } at ${ path }]: ${ message }`);
            }
            return;
        }

        console.log('Success!');
    }

    return (
        <main className="flex flex-col justify-center">
            <Card className="w-[40rem] mx-auto mt-[8rem]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label>Usuário</Label>
                    <Input onChange={({ target }) => setPassword(target.value)} type="text" />

                    <Label>Senha</Label>
                    <Input onChange={({ target }) => setUsername(target.value)} type="password" />

                    <Button onClick={validateLogin} className="w-full mt-8">Login</Button>
                </CardContent>
            </Card>
        </main>
    )
}