import ErrorHandling from "./error-handling/error-handling";
import LazyQuery from "./lazy-query/lazy-query";
import Mutation from "./mutation/mutation";
import Query from "./query/query";

export default function ReactQuery() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Query</h1>
      <Query />

      <hr className="my-4" />

      <h1 className="text-2xl font-bold">Mutation</h1>
      <Mutation />

      <hr className="my-4" />

      <h1 className="text-2xl font-bold">Lazy Query</h1>
      <LazyQuery />

      <hr className="my-4" />

      <h1 className="text-2xl font-bold">Error Handling</h1>
      <ErrorHandling />
    </div>
  );
}
