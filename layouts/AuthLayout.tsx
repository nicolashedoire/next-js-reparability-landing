import React, { FC } from "react";

// import Cookies from '../Modal/Cookies/Cookies';

interface AuthLayoutProps {
  meta: React.ReactNode;
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = (props) => (
  <div>
    {props.meta}
    <main className="bg-blue-900">{props.children}</main>
    {/* <Cookies /> */}
  </div>
);

export default AuthLayout;
