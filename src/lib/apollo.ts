import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4p4wtn81gub01xt4awb4iun/master",
    cache: new InMemoryCache()
})