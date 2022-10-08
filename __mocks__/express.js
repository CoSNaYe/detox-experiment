import express from 'express';

export const server = express();
const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
