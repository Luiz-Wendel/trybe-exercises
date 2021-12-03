import { io } from 'socket.io-client';

const client = io('hhtp://localhost:3001');

export default client;
