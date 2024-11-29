import "@tanstack/react-query";
import '@emotion/react'


import { DefaultError, QueryKey } from "@tanstack/react-query";

interface QueryMeta extends Record<string, unknown> {
  success?: (data?: unknown) => string | null | JSX.Element;
  error?: (error: DefaultError) => string | null | JSX.Element;
}

interface MutationMeta extends QueryMeta {
  invalidateKeys?: QueryKey[];
}

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: QueryMeta;
    mutationMeta: MutationMeta;
  }
}

declare module "@emotion/react" {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      default: string;
      background: string;
      error: string;
      border: string;
      text: string;
      placeholder: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    typography: {
      h1: {
        fontSize: string;
        fontWeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
      };
      body: {
        fontSize: string;
        fontWeight: number;
      };
    };
    shadows: {
      card: string;
    };
  }
}
