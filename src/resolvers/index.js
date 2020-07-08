import Query from "./Query/index.js"
import getConnectionTypeResolvers  from "@reactioncommerce/api-utils/graphql/getConnectionTypeResolvers.js";

export default {
  Query,
  ...getConnectionTypeResolvers("SearchCatalog")
};