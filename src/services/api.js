import axios from 'axios'
//json-server server.json -p 3001 -w -d 500
const api = axios.create({
	baseURL: 'http://localhost:3001',
})

export default api;