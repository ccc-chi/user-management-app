import { FC, memo, useCallback } from "react";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = useCallback(() => navigate("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigate("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => navigate("/home/setting"), []);
  return (
    <>
      <Flex
        as={"nav"}
        bg={"teal.500"}
        color={"gray.50"}
        align={"center"}
        justify={"space-between"}
        padding={{ base: 3, md: 5 }}
      >
        <Flex align={"center"} mr={8}>
          <Heading as={"h1"} fontSize={{ base: "md", md: "lg" }}>
            <Link to={"/home"}>ユーザー管理アプリ</Link>
          </Heading>
        </Flex>
        <Flex
          align={"center"}
          fontSize={"sm"}
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link to={"/home/user_management"}>ユーザー一覧</Link>
          </Box>
          <Link to={"/home/setting"}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
        <MenuDrawer
          onClose={onClose}
          isOpen={isOpen}
          onClickHome={onClickHome}
          onClickUserManagement={onClickUserManagement}
          onClickSetting={onClickSetting}
        />
      </Flex>
    </>
  );
});
