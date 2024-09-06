import { Flex, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import lang from '@/snippet/en.json'
import { FiPhone } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

export default function ContactUs({ color = 'lime' }: { color?: string }) {
  return (
    <>
      <Stack alignItems={'center'} textAlign={'center'} mb={10}>
        <Heading as={'h5'} fontSize={'1.5rem'}>{lang.contactUs.title}</Heading>
        <Heading as={'h5'} fontSize={'1.5rem'} color={`${color}.500`}>{lang.contactUs.location}</Heading>
      </Stack>
      <Stack flexDir={{ base: 'column', md: 'row' }} justifyContent={'center'} gap={5}>
        <Stack gap={3} alignItems={'center'} w={'full'}>
          <Flex w={'80px'} h={'80px'} p={2} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} color={'white'} bg={'secGray.800'}>
            <Icon as={FiPhone} fontSize={'40px'} />
          </Flex>
          <Text fontSize={'1rem'} textAlign={'center'}>{lang.contactUs.chat}</Text>
        </Stack>
        <Stack gap={1} alignItems={'center'} w={'full'}>
          <Flex w={'80px'} h={'80px'} p={2} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} color={'white'} bg={'secGray.800'}>
            <Icon as={BsChatDots} fontSize={'40px'} />
          </Flex>
          <Heading as={'h5'} fontSize={'1rem'} textAlign={'center'}>{lang.contactUs.talk}</Heading>
          <Text fontSize={'1rem'} textAlign={'center'}>{lang.contactUs.callUs}</Text>
          <Link as={'a'} fontSize={'1rem'} textAlign={'center'} href={`tel:${lang.contactUs.phoneNumber}`} color={`${color}.500`}>{lang.contactUs.phoneNumber}</Link>
          <Text fontSize={'1rem'} textAlign={'center'}>{lang.contactUs.time}</Text>
        </Stack>
      </Stack>
    </>
  );
}
