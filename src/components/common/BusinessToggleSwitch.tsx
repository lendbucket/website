import { useEffect, useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BusinessToggleSwitch = (props: any) => {
  const [active, setActive] = useState("personal");
  const navigate = useNavigate();
  const location = useLocation();

  const handleBusinessType = (value: string) => {
    setActive(value)
    if (value === "personal") {
      navigate("/");
    } else {
      navigate("/business");
    }
  }

  useEffect(() => {
    if (location.pathname.includes('/business')) {
      setActive('business')
    } else {
      setActive('personal')
    }
  }, [location]);

  return (
    <Flex
      bg="gray.700"
      borderRadius="full"
      p="1"
      alignItems="center"
      me={props.marginLeft}
      display={props.display}
    >
      <Button
        onClick={() => handleBusinessType("personal")}
        bg={active === "personal" ? "lime.500" : "transparent"}
        color={active === "personal" ? "white" : "gray.300"}
        borderRadius="full"
        _hover={{ bg: active === "personal" ? "lime.400" : "transparent" }}
        _focus={{ boxShadow: "none" }}
        px="4"
        py={1}
        h={'2rem'}
      >
        Personal
      </Button>
      <Button
        onClick={() => handleBusinessType("business")}
        bg={active === "business" ? "orange.500" : "transparent"}
        color={active === "business" ? "white" : "gray.300"}
        borderRadius="full"
        _hover={{ bg: active === "business" ? "orange.400" : "transparent" }}
        _focus={{ boxShadow: "none" }}
        px="4"
        py={1}
        h={'2rem'}
      >
        Business
      </Button>
    </Flex>
  );
};

export default BusinessToggleSwitch;
