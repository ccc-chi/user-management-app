import { FC, memo, useEffect, useRef } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../Hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  const connectionRef = useRef(false);
  useEffect(() => {
    if (!connectionRef.current) {
      getUsers();
      connectionRef.current = true;
    }
  }, []);

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
                imageUrl="https://picsum.photos/400"
                name={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
