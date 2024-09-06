import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import BusinessToggleSwitch from "@/components/common/BusinessToggleSwitch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [items, setItems] = useState(NAV_ITEMS);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/business')) {
      setItems(NAV_ITEMS_BUSINESS)
    } else {
      setItems(NAV_ITEMS)
    }
  }, [location]);

  return (
    <Box pos={'fixed'} w={'full'} zIndex={999} >
      <Flex
        bg={'secGray.800'}
        color={"white"}
        minH={"60px"}
        py={{ base: 8 }}
        px={{ base: 8 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"primary"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Heading
              as={'h2'}
              fontSize={'1.5rem'}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={"white"}
            >
              CreditBolt
            </Heading>
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav items={items} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          alignItems={'center'}
          direction={"row"}
          spacing={4}
        >
          <BusinessToggleSwitch marginLeft={5} display={{ base: 'none', md: 'flex' }} />
          <Link href={`${import.meta.env.VITE_PORTAL_URL}/signin`} whiteSpace={'nowrap'}>
            Sign In
          </Link>
          <Button
            as={"a"}
            fontSize={"md"}
            display={{ base: "none", md: "flex" }}
            minH={"30px"}
            padding={"10px 18px"}
            variant={"link"}
            fontWeight={600}
            color={"white"}
            bg={"lime.500"}
            _hover={{
              cursor: "pointer",
              bg: "lime.600",
            }}
            href="/product-selector"
          >
            Start Building
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav items={items} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = ({ items }: { items: any }) => {
  const linkColor = 'white';
  const linkHoverColor = 'white';
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {items.map((navItem: any) => {
        if (!navItem.needsAuth || (navItem.needsAuth)) {
          return (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
                {navItem.children && (
                  <Icon
                    as={ChevronDownIcon}
                    color={'white'}
                    transition={"all .25s ease-in-out"}
                    w={4}
                    h={4}
                  />
                )}
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child: any) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          );
        }
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "secGray.900" }}
            color={"secGray.800"}
            fontWeight={500}
            fontSize={'sm'}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"secGray.800"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ items }: { items: any }) => {
  return (
    <Stack
      bg={useColorModeValue("secGray.800", "secGray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {items.map((navItem: any) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex mt={3} justifyContent={'center'}>
        <BusinessToggleSwitch marginLeft={5} display={{ base: 'flex', md: 'none' }} />
      </Flex>

      <Button
        as={"a"}
        fontSize={"md"}
        minH={"30px"}
        padding={"10px 18px"}
        variant={"link"}
        fontWeight={600}
        color={"white"}
        bg={"lime.500"}
        _hover={{
          cursor: "pointer",
          bg: "lime.600",
        }}
        w={'full'}
        mt={10}
        href="/product-selector"
      >
        Start Building
      </Button>

      <Link href={`${import.meta.env.VITE_PORTAL_URL}/signin`}>
        Sign In
      </Link>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={'white'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={'white'}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} color={'white'}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  needsAuth?: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Product",
    children: [
      {
        label: "Revolv",
        href: "/product/revolv",
      },
      {
        label: "Instal/CS Max",
        href: "/product/instal",
      },
      {
        label: "CS Business",
        href: "/business",
      },
      {
        label: "MAGNUM.bank",
        href: "https://magnum.bank",
      },
      {
        label: "FreeKick.bank",
        href: "https://freekick.bank",
      },
    ],
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Marketplace",
    href: "/marketplace",
  },
  // {
  //   label: "About",
  //   href: "/about",
  // },
];

const NAV_ITEMS_BUSINESS: Array<NavItem> = [
  {
    label: "Accounts",
    href: "/business/pricing",
  },
  {
    label: "Marketplace",
    href: '/business/marketplace',
  },
  // {
  //   label: "About",
  //   href: "/about",
  // },
];