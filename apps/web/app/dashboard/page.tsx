import { NewPresentationCard } from "@/components/new-presentation-card";
import { PresentationPreviewCard } from "@/components/presentation-preview-card";
import { StaggeredGrid } from "@/components/stagger-grid";
import { Container } from "@workspace/ui/components/container";

const Page = async () => {
  return (
    <Container className="max-w-3xl xl:max-w-5xl">
      <StaggeredGrid className="grid grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-8">
        <NewPresentationCard />
        {Array.from({ length: 5 }).map((_, idx) => (
            <PresentationPreviewCard data={idx} key={idx} />
        ))}
      </StaggeredGrid>
    </Container>
  );
};

export default Page;
