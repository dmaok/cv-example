export class Candidate {
  firstName: string;
  lastName: string;
  birthday: string;
  aboutInfo: string;
  jobPosition: string;

  constructor(data?) {
    if (data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.birthday = data.birthday;
      this.aboutInfo = data.aboutInfo;
      this.jobPosition = data.jobPosition;
    }
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
