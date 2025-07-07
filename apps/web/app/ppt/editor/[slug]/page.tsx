import { EditorLayout } from "@/components/editor/editor-layout";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug) notFound();

  return (
    <div className="flex h-[calc(100vh-68px)] gap-3 overflow-hidden p-2">
      <div className="m-auto">
        <EditorLayout />
      </div>
    </div>
  );
};

export default Page;
