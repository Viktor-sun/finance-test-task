import io from 'socket.io-client';
const URL = process.env.REACT_APP_URL || 'localhost:4000';
export default io(URL);
