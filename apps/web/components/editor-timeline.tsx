"use client"

import { useMemo, useState } from "react";
import { Track } from "@/types/remotion";
import { Player } from "@remotion/player";
import { Main } from "./remotion-main";

export const Editor: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([
    {name: 'Track 1', items: []},
    {name: 'Track 2', items: []},
  ]);
 
  const inputProps = useMemo(() => {
    return {
      tracks,
    };
  }, [tracks]);
 
  return (
    <>
      <Player component={Main} fps={30} inputProps={inputProps} durationInFrames={600} compositionWidth={1280} compositionHeight={720} />
      {/* <Timeline tracks={tracks} setTracks={setTracks} /> */}
    </>
  );
};