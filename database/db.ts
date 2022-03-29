import mongoose from 'mongoose'

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongoConnection = {
    isConected: 0
}

export const connect = async() => {
    
    if (mongoConnection.isConected) {
        console.log('Ya estabamos conectados')
        return
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConected = mongoose.connections[0].readyState
        if (mongoConnection.isConected === 1) {
            console.log('Usando conexión anterior');
            return
        }
        await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConnection.isConected = 1
    console.log('Conectado a MongoDB', process.env.MONGO_URL);
    
}

export const disconnect = async() => {

    if (process.env.NODE_ENV === 'development') return

    if (mongoConnection.isConected === 0) return

    
    await mongoose.disconnect()
    mongoConnection.isConected === 0
    console.log('Desconectado de MongoDB');
}