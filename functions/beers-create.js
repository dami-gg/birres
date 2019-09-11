import { query } from "faunadb";

import client from "../lib/db/db-client";

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const beerItem = {
    data
  };

  try {
    const response = await client.query(
      query.Create(q.Ref("classes/beers"), beerItem)
    );

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    });
  } catch (err) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(err)
    });
  }
};
