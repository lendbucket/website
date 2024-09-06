import { Flex, Grid, GridItem, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import Card from './Card';

export const FeaturesCard = ({
  items,
  bg
}: {
  items: any,
  bg: string
}) => {

  return (
    <Card maxW='sm' p={0} h={'full'} border={'none'}>
      <Grid
        templateColumns={'repeat(2, 1fr)'}
        templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(3, auto)' }}
        py={20}
      >
        {items?.map((data: any, index: number) => (
          <GridItem
            key={index}
            w='100%'
            h='100%'
            colSpan={1}
            borderWidth={data.position === 'left' ? '0px 1px 0px 0px' : '0px 0px 0px 1px'}
            borderStyle={'solid'}
            borderColor={'gray.200'}
          >
            <VStack
              alignItems={data.position === 'right' ? 'start' : 'end'}
              p={5}
            >
              <Flex w={'80px'} h={'80px'} p={2} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} color={'white'} bg={bg} >
                <Icon as={data.icon} fontSize={'40px'} />
              </Flex>
              <Heading as={'h5'} fontSize={'1rem'} textAlign={data.position === 'left' ? 'end' : 'start'}>{data.title}</Heading>
              <Text fontSize={'0.75rem'} color={'secGray.700'} textAlign={data.position === 'left' ? 'end' : 'start'}>{data.description}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
};

export default FeaturesCard