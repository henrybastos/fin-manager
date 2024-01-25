'use client'

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconSettings } from '@tabler/icons-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Header () {
    const router = useRouter();
    const { setTheme, theme } = useTheme();

    return (
        <header className="flex flex-row justify-between w-full dark:bg-slate-900 p-2 bg-neutral-200">
            <div className="flex flex-row gap-x-2">
                <Button onClick={() => router.push('/')} variant={"ghost"}>Home</Button>
                <Button onClick={() => router.push('/create-user')} variant={"ghost"}>Create user</Button>
                <Button onClick={() => router.push('/dashboard')} variant={"ghost"}>Dashboard</Button>
            </div>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <IconSettings />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Settings</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-row justify-between">
                        <Label className="mr-3">Dark theme</Label>
                        <Switch defaultChecked={theme === 'dark'} onCheckedChange={(state: boolean) => setTheme(state ? 'dark' : 'light')} />
                    </div>
                </DialogContent>
            </Dialog>
        </header>
    )
}