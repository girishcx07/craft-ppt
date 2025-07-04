import { notFound } from "next/navigation";



import { Editor } from "@/components/remotion-editor";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) notFound();

  return (
    <div className="flex h-[calc(100vh-68px)] gap-3 overflow-hidden p-2">
      <Editor />
      {/* <ResizablePanelGroup direction="horizontal" className="gap-1">
        <ResizablePanel minSize={30}>
          <Card className="h-full w-full border">
            <CardContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro itaque esse a sunt
              placeat eveniet qui quae id illum. Nam quas natus dolore dicta itaque dolor doloribus
              aliquam saepe excepturi.
            </CardContent>
          </Card>
        </ResizablePanel>
        <PageResizableHandle className="bg-transparent" withHandle />
        <ResizablePanel minSize={30}>
          <Card className="h-full w-full border">
            <CardContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro itaque esse a sunt
              placeat eveniet qui quae id illum. Nam quas natus dolore dicta itaque dolor doloribus
              aliquam saepe excepturi.
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup> */}
      {/* <Card className="h-full max-w-xs p-0">
        <CardContent className="h-full overflow-hidden p-0">
          <ScrollArea className="h-[calc(100vh-68px)] w-full pb-6" type="scroll">
            <StaggeredGrid className="flex flex-col gap-4 p-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <PresentationPreviewCard data={idx} key={idx} />
              ))}
            </StaggeredGrid>
          </ScrollArea>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Page;
