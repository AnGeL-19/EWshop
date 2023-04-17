import React, { FC, ReactNode, useReducer } from "react";

import Cookie from "js-cookie";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { ILogin, IUser } from "../../interfaces/user";

export interface AuthState {
  isLogged: boolean;
  user?: ILogin;
}

const Auth_INITIAL_STATE: AuthState = {
  isLogged: false,
  user: undefined,
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const loginUser = async ({
    username,
    password,
  }: ILogin): Promise<{ hasError: boolean; message: string }> => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();

      Cookie.set("token", result.token);
      dispatch({ type: "[Auth] - Login", payload: { username, password } });

      return {
        hasError: false,
        message: "You have been logged in",
      };
    } catch (error) {
      console.log(error);
      return {
        hasError: true,
        message: "User or password is invalid",
      };
    }
  };

  const registerUser = async ({
    email,
    username,
    name,
    password,
  }: IUser): Promise<{ hasError: boolean; message: string }> => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, username, name, password }),
      });
      const result = await response.json();

      return {
        hasError: false,
        message: `${result.id}`,
      };
    } catch (error) {
      console.log(error);

      return {
        hasError: true,
        message: "Could not create user - try again",
      };
    }
  };

  const logout = () => {
    Cookie.remove("token");
    Cookie.remove("cart");
    dispatch({ type: "[Auth] - Logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
