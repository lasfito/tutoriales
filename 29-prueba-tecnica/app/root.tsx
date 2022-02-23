import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  
} from "remix";

import type { MetaFunction } from "remix";
import { globalStyles } from "./styles";
import { DataContextProvider } from "./contexts/dataContext";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links  = ()=> {
  return [
    { 
      rel: "stylesheet",
      href: globalStyles,
    }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <DataContextProvider>
        <Outlet />
        </DataContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
