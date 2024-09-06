import { Box, Button, Container, Grid, GridItem, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { businessMarketplaces } from "@/utils";

function BusinessMarketplace() {
  return (
    <>
      <Box className="section-2 section-fico" bg={'secGray.800'} color={'white'} py={10}>
        <Container maxW='5xl'>
          <Stack py={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25}>Grow Your Business, Compare Lending Offers, Get The Financing You Need</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25} color={'lime.500'}>With Our Partners</Text>
          </Stack>
          <Stack py={10} alignItems={'center'} gap={16}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }} gap={10}>
              {businessMarketplaces?.map((item: any, index: number) => (
                <GridItem key={index} w='100%' h='100%'>
                  <HStack alignItems={'start'} gap={10}>
                    <Image src={item.icon} borderRadius={'10px'} w={'8rem'} />
                    <VStack alignItems={'start'}>
                      <Text fontSize={'1.25rem'} fontWeight={600}>{item.name}</Text>
                      <Text fontSize={'1rem'} color={'gray.300'}>{item.type}</Text>
                      <Text fontSize={'1rem'} color={'gray.300'}>{item.description}</Text>
                      <Button as={'a'} py={4} px={24} colorScheme={'lime'} href={item.path}>Apply Now</Button>
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

export default BusinessMarketplace
