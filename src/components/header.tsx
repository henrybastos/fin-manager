'use client'

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function Header () {
    const { setTheme, theme } = useTheme();
    const [defaultThemeDark, setDefaultThemeDark] = useState(true);

    useEffect(() => {
        setDefaultThemeDark(theme == 'dark');
    }, [])

    return (
        <header className="w-full dark:bg-slate-900 p-4 bg-neutral-200">
            <Label className="mr-3">Dark theme</Label>
            <Switch defaultChecked={defaultThemeDark} onCheckedChange={(state: boolean) => setTheme(state ? 'dark' : 'light')} />
        </header>
    )
}