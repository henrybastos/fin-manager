'use client'

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigFile from '../../../tailwind.config';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from 'sonner'
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { checkAndCreateTable, createUser } from "@/lib/repository";

export default function CreateUser () {
    const { theme } = resolveConfig(tailwindConfigFile);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const User = z.object({
        username: z.string().min(5, { message: 'At least 5 characters.'}),
        password: z.string().min(5, { message: 'At least 5 characters.'})
    })

    async function validateLogin () {
        const result = User.safeParse({
            username,
            password
        });

        if (!result.success) {
            for (let err of result.error.issues) {
                const { message, path, code } = err;
                console.log(`[${ code.split('_').join(' ').toUpperCase() } at ${ path }]: ${ message }`);
                toast.error(`[${ code.split('_').join(' ').toUpperCase() } at ${ path }]: ${ message }`, {
                    style: {
                        background: theme.colors.red['800']
                    }
                });
            }
            return;
        }

        await checkAndCreateTable();
        console.log({ username, password });
        
        const user = await createUser({ username, password });
        console.log('New user created:', user);
        
        router.push(`/dashboard?username=${username}`);
    }

    return (
        <main className="flex flex-col justify-center">
            <Card className="w-[40rem] mx-auto mt-[8rem]">
                <CardHeader>
                    <CardTitle>Create user</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label>Usuário</Label>
                    <Input onChange={({ target }) => setUsername(target.value)} type="text" />

                    <Label>Senha</Label>
                    <Input onChange={({ target }) => setPassword(target.value)} type="password" />

                    <Button onClick={validateLogin} className="w-full mt-8">Create</Button>
                </CardContent>
            </Card>
        </main>
    )
}