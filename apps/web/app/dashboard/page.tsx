import { NewPresentationCard } from "@/components/new-presentation-card";
import { PresentationPreviewCard } from "@/components/presentation-preview-card";
import { Container } from "@workspace/ui/components/container";

const Page = async () => {
  return (
    <Container className="grid max-w-3xl grid-cols-4 gap-4">
      <NewPresentationCard />
      {Array.from({ length: 5 }).map((_, idx) => (
        <PresentationPreviewCard key={idx} />
      ))}
    </Container>
  );
};

export default Page;
