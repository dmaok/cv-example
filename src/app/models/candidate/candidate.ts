export class Candidate {
  city: string;
  lastName: string;
  birthday: string;
  firstName: string;
  aboutInfo: string;
  jobPosition: string;

  constructor(data?) {
    if (data) {
      this.city = data.city;
      this.lastName = data.lastName;
      this.birthday = data.birthday;
      this.firstName = data.firstName;
      this.aboutInfo = data.aboutInfo;
      this.jobPosition = data.jobPosition;
    }
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
