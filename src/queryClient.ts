// React Query
import { MutationCache, QueryCache, QueryClient, matchQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false, // default: true
      staleTime: 1000 * 10,
    },
  },
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      if (query.meta?.success) {
        const msg = query.meta.success(data);
        toast.success(msg);
      }
    },
    onError: (error, query) => {
      if (query.meta?.error) {
        const msg = query.meta.error(error);
        toast.error(msg);
      }
    },
  }),
  mutationCache: new MutationCache({
    onSuccess: (data, _variables, _context, mutation) => {
      const msg = mutation.meta?.success?.(data);
      if (msg) {
        toast.success(msg);
      }

      queryClient.invalidateQueries({
        predicate: (query) => {
          // invalidate tất cả những queryKey một lần, nếu meta không được cung cấp thì không invalidate gì cả
          return mutation.meta?.invalidateKeys?.some((queryKey) => matchQuery({ queryKey }, query)) ?? false;
        },
      });
    },
    onError: (error, _variables, _context, mutation) => {
      const msg = mutation.meta?.error?.(error);
      if (msg) {
        toast.error(msg);
      }
    },
  }),
});
