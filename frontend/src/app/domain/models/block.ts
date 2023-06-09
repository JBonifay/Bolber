export class Block {
  blockType: string;
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
  color: string;

  constructor(
    blockType: string,
    xStart: number,
    xEnd: number,
    yStart: number,
    yEnd: number,
    color: string
  ) {
    this.blockType = blockType;
    this.xStart = xStart;
    this.xEnd = xEnd;
    this.yStart = yStart;
    this.yEnd = yEnd;
    this.color = color;
  }
}
