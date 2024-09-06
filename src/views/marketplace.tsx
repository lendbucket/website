import { Box, Container, Grid, GridItem, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { marketplaces } from "@/utils";

function Marketplace() {
  return (
    <>
      <Box className="section-2 section-fico">
        <Container maxW='5xl'>
          <Stack py={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25}>Build Faster, Spend Smarter, Breathe Easier</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25} color={'lime.500'}>With Our Partners</Text>
          </Stack>
          <Stack py={10} alignItems={'center'} gap={16}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={10}>
              {marketplaces?.map((item: any, index: number) => (
                <GridItem key={index} w='100%' h='100%'>
                  <HStack alignItems={'start'} gap={10}>
                    <Image src={item.icon} borderRadius={'10px'} w={'8rem'} />
                    <VStack alignItems={'start'}>
                      <Text fontSize={'1.25rem'} fontWeight={600}>{item.name}</Text>
                      <Text fontSize={'1rem'} color={'gray.700'}>{item.type}</Text>
                      <Text fontSize={'1rem'} color={'gray.700'}>{item.description}</Text>
                      <Link fontSize={'0.875rem'} color={'gray.700'} href={item.path}>View More</Link>
                    </VStack>
                  </HStack>

                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Marketplace
