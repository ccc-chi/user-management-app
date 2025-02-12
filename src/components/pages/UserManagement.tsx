import { FC, memo, useCallback, useEffect, useRef } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../Hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../Hooks/useSelectUser";
import { useLoginUser } from "../../Hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getUsers, loading, users } = useAllUsers();
  const connectionRef = useRef(false);
  useEffect(() => {
    if (!connectionRef.current) {
      getUsers();
      connectionRef.current = true;
    }
  }, []);

  const { onSelectUser, selectedUser } = useSelectUser();

  const { loginUser } = useLoginUser();
  console.log(loginUser);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx={"auto"}>
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/400"
                name={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
