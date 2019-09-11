import { query } from "faunadb";

import client from "../lib/db/db-client";

exports.handler = async (event, context, callback) => {
  try {
    const response = client.query(
      query.Paginate(query.Match(query.Ref("indexes/all_beers")))
    );

    const beerRefs = response.data;

    const getAllBeerDataQuery = beerRefs.map(ref => {
      return query.Get(ref);
    });

    const queryResult = await client.query(getAllBeerDataQuery);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(queryResult)
    });
  } catch (err) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(err)
    });
  }
};
