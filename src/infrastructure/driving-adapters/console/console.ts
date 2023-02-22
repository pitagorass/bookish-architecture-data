import { UserCreatorUseCase } from "../../../application/usecase/userCreator/userCreator";
import { InmemoryUserRepository } from "../../implementations/inMemory/inMemoryUserRepository";
import { User } from "../../../domain/entities/user";
import { UserGetterUseCase } from "../../../application/usecase/UserGetter/userGetter";
(async () => {
  const inMemoryUserRepo = new InmemoryUserRepository();

  //Creando usuario
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepo);
  const userToCreate: User = {
    name: "dos",
    age: 26,
    username: "dso",
    id: "holas",
  };
  await userCreatorUseCase.run(userToCreate);
  console.log("Usuario Creado", inMemoryUserRepo.userData);

  //Opteniendo usuarios
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepo);
  const usersReturned = await userGetterUseCase.run();
  console.log("Usuarios Optenidos", usersReturned);
})();
