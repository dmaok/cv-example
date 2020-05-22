export class Contact {

  name: string;
  link: string;

  constructor(data?) {
    if (data) {
      this.name = data.name;
      this.link = data.link;
    }
  }
}
