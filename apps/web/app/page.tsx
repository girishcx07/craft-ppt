import { FEATURES_DATA, PRIVACY_FEATURES_DATA } from "@/contants";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-68px)] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Craft Stunning Presentations Effortlessly</h1>
        <div className="text-muted-foreground">
          Design professional PPTs with smooth animations and modern visuals - no design skills
          needed.
        </div>

        <div className="flex w-full items-center justify-around">
          <div>
            <b>Simple and Powerful</b>
            <ul className="list-disc">
              {FEATURES_DATA.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>Privacy First</b>
            <ul className="list-disc">
              {PRIVACY_FEATURES_DATA.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
