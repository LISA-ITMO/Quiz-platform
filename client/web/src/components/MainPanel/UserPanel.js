import React, { useContext } from "react";
import {
    Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { BiLogOut } from "react-icons/bi";
import { QUIZ_TOKEN, QUIZ_TOKEN_REFRESH } from "@utils/common";
import { UserContext } from "@providers/UserProvider";
import { ColorModeSwitcher } from "@components/ColorModeSwitcher";
import { useNavigate } from "react-router-dom";
import { API_USER } from "@utils/api/apiUser";
import { cookies } from "@utils/api/apiUser";

const UserBar = ({ logout, isFullPanel }) => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("access_token");
    cookies.remove("refresh_token");
    logout();
    navigate("/login");
  };

  return (
    <Flex
      alignItems={"center"}
      gap={"10px"}
      flexDirection={"column"}
      justifyContent={"center"}
      zIndex={"108"}
      spacing={"10px"}
      right="15px"
      top="15px"
    >
      {user.info.username && (
        isFullPanel && <Tooltip label={user.info.username}>
          <Text maxWidth={"250px"} noOfLines={1}>
            <b>Пользователь</b>: {user.info.username}
          </Text>
        </Tooltip>
      )}
      <Divider orientation="horizontal" />
      <Box display={"flex"} minWidth={"150px"} flexDirection={isFullPanel ? 'row' : 'column'} justifyContent={"center"}>
      <ColorModeSwitcher />
      <Button
        onClick={handleLogout}
        size={"md"}
        variant="ghost"
        pt={"2px"}
        colorScheme={"red"}
      >
        <Icon w={"25px"} h={"25px"} as={BiLogOut} />
      </Button>
      </Box>
     
    </Flex>
  );
};

export default UserBar;
