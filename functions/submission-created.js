const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "wgj1ip6x",
  dataset: "production",
  token: process.env.SANITY_STUDIO_SUBMIT_RATING,
});

exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body);

  const rating = {
    _type: "rating",
    stars: parseInt(payload.data.stars),
    comment: payload.data.comment,
    album: {
      _ref: payload.data.album,
      _type: "reference",
    },
  };

  await client.create(rating).then((res) => {
    callback(null, { statusCode: 200 });
  });
};
