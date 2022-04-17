const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

module.exports = {
  projects: {
    app: {
      schema: ['./schema.generated.graphql'],
      documents: ['./src/graphql/**/*.js'],
      extensions: {
        endpoints: {
          default: {
            url: process.env.CTF_URL,
            headers: { Authorization: process.env.CTF_BEARER_TOKEN },
          },
        },
      },
    },
  },
};
