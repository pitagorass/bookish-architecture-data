export class UserNotFoundExeption extends Error {
    constructor(){
        super('Usuario no encontrado ')
    }
}