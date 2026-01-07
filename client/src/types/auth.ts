export interface FormFields {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}
export interface LoginPayload {
  phone: string;
  password: string;
}

export interface SignupPayload {
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
}


export interface UserSchema {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
}