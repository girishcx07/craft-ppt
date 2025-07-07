type BaseItem = {
  from: number;
  durationInFrames: number;
  id: string;
  label?: string;
};

export type SolidItem = BaseItem & {
  type: "solid";
  color: string;
};

export type TextItem = BaseItem & {
  type: "text";
  text: string;
  color?: string;
};

export type VideoItem = BaseItem & {
  type: "video";
  src: string;
};

export type Item = SolidItem | TextItem | VideoItem;

export type Track = {
  name: string;
  items: Item[];
};

export interface TimelineInitialState {
  tracks: Track[];
  fps: number;
}
