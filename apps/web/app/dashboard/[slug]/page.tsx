import { notFound } from "next/navigation";

import {
  PageResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { Card, CardContent } from "@workspace/ui/components/card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) notFound();

  return (
    <div className="flex h-[calc(100vh-68px)] overflow-hidden p-2 gap-3">
      <ResizablePanelGroup direction="horizontal" className="gap-1">
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
      </ResizablePanelGroup>
      <Card className="max-w-xs">
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita, iste, sint
          consectetur fugiat, veritatis soluta accusamus aliquam architecto incidunt dolor ab nam
          labore. Laudantium sed veritatis vel deleniti incidunt.
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
