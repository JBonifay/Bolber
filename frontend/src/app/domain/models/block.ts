export class Block {
  private blockType: string;
  private xStart: number;
  private xEnd: number;
  private yStart: number;
  private yEnd: number;
  private color: string;

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
