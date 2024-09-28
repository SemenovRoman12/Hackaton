// Registration:

export interface NewUser {
  fio: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  "data": {
    user_token: string;
  };
}

// Authorisation

export interface SignAuthUser {
  email: string;
  password: string;
}

export interface SignAuthResponse {
  "data": {
    user_token: string;
  };
}
