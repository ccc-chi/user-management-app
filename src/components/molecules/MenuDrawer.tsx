import { FC, memo } from "react";
import { Button, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};
export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;

  return (
    <Drawer placement="left" size={"xs"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay onClick={onClose}>
        <DrawerContent p={0} bg={"gray.100"}>
          <Button
            w={"100%"}
            onClick={() => {
              onClickHome();
              onClose();
            }}
          >
            TOP
          </Button>
          <Button
            w={"100%"}
            onClick={() => {
              onClickUserManagement();
              onClose();
            }}
          >
            ユーザー一覧
          </Button>
          <Button
            w={"100%"}
            onClick={() => {
              onClickSetting();
              onClose();
            }}
          >
            設定
          </Button>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
