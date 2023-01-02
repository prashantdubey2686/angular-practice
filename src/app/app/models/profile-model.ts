export class ProfileModel {
  userName:string |undefined;  
  email: string | undefined;
  emailConfirmed: boolean | undefined;
  fullName: string | undefined;
  id: string | undefined;
  isEnabled: boolean | undefined;
  isLockedOut: boolean | undefined;
  jobTitle: null | undefined;
  phoneNumber: string | undefined;
  roles: string[] = [];
}
