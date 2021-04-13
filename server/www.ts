import app from './app';
import {createServer} from 'http';
import { create } from 'domain';

const port:number = Number(process.env.PORT) || 3000;

const server = createServer(app);

server.listen(port, function(){
  console.log(`${port} 포트 서버 대기 중!`);
});

export default server;