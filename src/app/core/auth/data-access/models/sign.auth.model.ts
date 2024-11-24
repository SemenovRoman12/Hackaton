// Registration:


export interface NewUser {
  email: string;
  username: string;
  password: string;
}

// Authorisation

export interface SignAuthUser {
  username: string;
  password: string;
}
