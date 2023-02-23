import { UserCreatorUseCase } from "../../../application/usecase/UserCreator/userCreator";
import { InmemoryUserRepository } from "../../implementations/inMemory/inMemoryUserRepository";
import { User } from "../../../domain/entities/user";
import { UserGetterUseCase } from "../../../application/usecase/UserGetter/userGetter";
import { UserUpdaterUseCase } from "../../../application/usecase/UserUpdater/userUpdater";
import { UserDeleteUseCase } from "../../../application/usecase/UserDelete/userDelete";
(async () => {
  const inMemoryUserRepo = new InmemoryUserRepository();

  //Creando usuario
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepo);
  const userToCreate: User = {
    name: "dos",
    age: 26,
    username: "dso",
    id: "1",
  };
  await userCreatorUseCase.run(userToCreate);
  console.log("Usuario Creado", inMemoryUserRepo.userData);

  //Opteniendo usuarios
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepo);
  const usersReturned = await userGetterUseCase.run();
  console.log("Usuarios Optenidos", usersReturned);

  //Actualizar Usuarios
  const userUpdateUseCase = new UserUpdaterUseCase(inMemoryUserRepo);
  await userUpdateUseCase.run({ id: "1", username: "granada" });
  const usersReturned2 = await userGetterUseCase.run();
  console.log("Usuarios Actializados", usersReturned2);

  // Eliminando Usuarios
  const userDeleteUseCase = new UserDeleteUseCase(inMemoryUserRepo);
  await userDeleteUseCase.run("1");
  const usersReturned3 = await userGetterUseCase.run();
  console.log("Usuarios Eliminado", usersReturned3);
})();
