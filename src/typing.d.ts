import "@tanstack/react-query";

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

// useMutation({
//   mutationFn
//   meta: {
//     invalidateKeys: [
//       ["todos"],
//       ["users"]
//     ]
//   }
// })
