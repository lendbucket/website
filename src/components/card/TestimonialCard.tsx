import { Flex, Icon, Image, Text, VStack } from '@chakra-ui/react'
import Card from './Card';
import { FaQuoteLeft } from 'react-icons/fa';

export const TestimonialCard = ({
  img,
  description,
  name,
  color = 'lime',
}: {
  img: string
  description: string,
  name: any,
  color?: string
}) => {

  return (
    <Card maxW='md' p={0} h={'full'} border={'none'}>
      <VStack>
        <Image src={img} w={'full'} objectFit={'cover'} h={{ base: '100%', md: '400px' }} />
        <Flex w={'42px'} h={'42px'} bg={'sky.500'} borderRadius={'50%'} mt={"-30px"} justifyContent={'center'} alignItems={'center'}>
          <Icon fontSize={'4xl'} as={FaQuoteLeft} color={`white`} p={2} />
        </Flex>
        <VStack alignItems={'center'}>
          <Text textAlign={'center'} fontSize={'1.125rem'}>"{description}"</Text>
          <Text textAlign={'center'} fontSize={'1.25rem'} fontWeight={600} color={`${color}.500`}>{name}</Text>
        </VStack>
      </VStack>
    </Card>
  );
};

export default TestimonialCard