import {URL} from './config'
import socketIo from 'socket.io-client'
import sailsIo from 'sails.io.js'

const io = sailsIo(socketIo)

Object.assign(io.sails, {
	autoConnect: true,
	reconnection: true,
	url: URL,
	forceNew: false,
	transports: ['websocket']
})

export default io.socket
