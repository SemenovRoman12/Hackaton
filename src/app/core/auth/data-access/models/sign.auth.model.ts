// Registration:

export interface AuthUser {
  email: string;
  username: string;
}

export interface NewUser {
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  "data": {
    user_token: string;
  };
}

// Authorisation

export interface SignAuthUser {
  username: string;
  password: string;
}

export interface SignAuthResponse {
  "data": {
    user_token: string;
  };
}
