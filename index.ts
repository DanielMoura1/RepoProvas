import cors from 'cors';
import express from 'express';

import router from './routers/index';

const server = express();
server.use(express.json());
server.use(cors());
server.use(router);

export default server;
//server.listen(5000, () => console.log(`
 //   Server running on port ${5000}.
//`));


//server.listen(process.env.PORT, () => console.log(`
  //  Server running on port ${process.env.PORT}.
//`));