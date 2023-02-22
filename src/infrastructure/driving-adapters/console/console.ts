import { UserCreatorUseCase } from "../../../application/usecase/userCreator/userCreator";
import { InmemoryUserRepository } from "../../implementations/inMemory/inMemoryUserRepository";
import { User } from "../../../domain/entities/user";
(async () => {
  const inMemoryUserRepo = new InmemoryUserRepository();
  console.log("Antes", inMemoryUserRepo.userData);
  const userCreatorUseCase = new UserCreatorUseCase(
    new InmemoryUserRepository()
  );
  const userToCreate: User = {
    name: "dos",
    age: 26,
    username: "dso",
    id: "holas",
  };
  const res = await userCreatorUseCase.run(userToCreate);
  console.log("Despues", res);
  console.log("Array", inMemoryUserRepo.userData);

  /*  const userGetterUseCase = new UserGetterUseCase(new InmemoryUserRepository());
  const users = await userGetterUseCase.run();
  console.log(users); */
})();
