"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PlusIcon } from "lucide-react";
import { AnimatedCard } from "./animated-card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";

import { slugify } from "@/lib/utils";

import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { presentationSchema } from "@/lib/validators/schema";


export const NewPresentationCard = () => {
  const [openNewPPT, setOpenNewPPT] = useState(false);

  const form = useForm<z.infer<typeof presentationSchema>>({
    resolver: zodResolver(presentationSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof presentationSchema>) {
    console.log(values);
    setOpenNewPPT(false);
    const slug = slugify(values.name || "");
    redirect(`/dashboard/${slug}`);
  }

  return (
    <>
      <Dialog open={openNewPPT} onOpenChange={setOpenNewPPT}>
        <AnimatedCard>
          <div
            onClick={() => setOpenNewPPT(true)}
            className="text-muted-foreground group-hover:text-primary flex h-full w-full items-center justify-center transition-colors duration-300"
          >
            <PlusIcon size={32} strokeWidth={2.5} />
          </div>
        </AnimatedCard>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Presentation</DialogTitle>
            <DialogDescription>
              Start building a new PowerPoint presentation. You can choose a template or begin from
              scratch.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Presentation Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Presentation Name" {...field} />
                    </FormControl>
                    <FormDescription> This will be the title of your presentation.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
