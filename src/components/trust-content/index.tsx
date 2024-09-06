import { Box, Button, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import lang from '@/snippet/en.json'
import { BsBank2 } from "react-icons/bs";

export default function TrustContent({ color = 'lime', href = '/product-selector', img }: { color?: string, href?: string, img: string }) {
  return (
    <>
      <Box bg={`${color}.500`} h={'2rem'}></Box>
      <Box className="trust-wrapper" position={'relative'} py={20}>
        <Image src={img} width={'full'} h={'full'} pos={'absolute'} top={0} zIndex={-1} objectFit={'cover'} />
        <VStack
          alignItems={'center'}
          color={'white'}
          zIndex={5}
          spacing={10}
        >
          <Stack>
            <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'}>{lang.trust.title}</Heading>
            <Text fontSize={'1rem'} textAlign={'center'}>{lang.trust.subTitle}</Text>
          </Stack>
          <Icon as={BsBank2} fontSize={'5rem'} />
          <Text fontSize={'1rem'} textAlign={'center'}>{lang.trust.description}</Text>
          <Button as={'a'} py={4} px={24} colorScheme={color} href={href}>{lang.base.button}</Button>
        </VStack>
      </Box>
    </>
  );
}
