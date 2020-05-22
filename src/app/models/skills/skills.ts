export class Skills {
  name: string;
  color? = '#8c8c8c';
  zIndex: number;
  progress?: number;
  startDate: Date;
  finishDate?: Date;

  constructor(data?: Skills) {
    if (data) {
      this.name = data.name;
      this.color = data.color || this.color;
      this.zIndex = data.zIndex;
      this.progress = data.progress;
      this.startDate = data.startDate;
      this.finishDate = data.finishDate;
    }
  }
}
