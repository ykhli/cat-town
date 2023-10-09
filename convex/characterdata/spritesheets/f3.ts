import { SpritesheetData } from '../../schema';

export const data: SpritesheetData = {
  frames: {
    left: {
      frame: { x: 0, y: 48, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left2: {
      frame: { x: 48, y: 48, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left3: {
      frame: { x: 96, y: 48, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right: {
      frame: { x: 0, y: 96, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right2: {
      frame: { x: 48, y: 96, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right3: {
      frame: { x: 96, y: 96, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up: {
      frame: { x: 0, y: 144, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up2: {
      frame: { x: 48, y: 144, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up3: {
      frame: { x: 96, y: 144, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down: {
      frame: { x: 0, y: 0, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down2: {
      frame: { x: 48, y: 0, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down3: {
      frame: { x: 96, y: 0, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '1',
  },
  animations: {
    left: ['left', 'left2', 'left3'],
    right: ['right', 'right2', 'right3'],
    up: ['up', 'up2', 'up3'],
    down: ['down', 'down2', 'down3'],
  },
};
