import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Add transaction</Button>
        </SheetTrigger>
        <SheetContent className="dark:border-none dark:bg-slate-900">
          <SheetHeader>
            <SheetTitle>Add transaction</SheetTitle>
          </SheetHeader>
          <p>hey</p>
        </SheetContent>
      </Sheet>

      <Card className="rounded-md">
        <CardHeader>
          <CardTitle>Add income</CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
}