import { Button, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};
export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size={"xs"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay onClick={onClose}>
        <DrawerContent p={0} bg={"gray.100"}>
          <Button w={"100%"}>TOP</Button>
          <Button w={"100%"}>ユーザー一覧</Button>
          <Button w={"100%"}>設定</Button>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
