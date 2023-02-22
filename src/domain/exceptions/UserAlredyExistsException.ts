export class UserAlredyExistsException extends Error{
    constructor(){
        super('Nombre de usuario ya se encuentra en uso')
    }
}