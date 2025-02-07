import { FC, memo, useCallback, useEffect, useRef } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../Hooks/useAllUsers";

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

  const onClickUser = useCallback(() => onOpen());

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
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={"ジャケ"} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={"Takumi Okada"} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>メール</FormLabel>
                <Input value={"12345@mail.com"} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={"090-1222-1222"} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
