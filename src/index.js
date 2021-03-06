import pkg from "../package.json";
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import queries from "./queries/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    graphQL: {
      queries,
      schemas,
      resolvers
    },
    label: "Search Plugin",
    name: "search",
    version: pkg.version
  });
}
