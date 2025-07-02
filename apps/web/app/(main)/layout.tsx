import { Nav } from "@/components/nav";

export default async function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
