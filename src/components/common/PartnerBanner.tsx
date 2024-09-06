import { Image, VStack, Text, Grid, GridItem, Container } from "@chakra-ui/react";
import BILogo from "@/assets/partners/01_white_bi.png";
import CKLogo from "@/assets/partners/02_white_ck.png";
import IvestLogo from "@/assets/partners/03_white_ivest.png";
import NYTLogo from "@/assets/partners/04_white_nyt.png";

const PartnerBanner = ({ color = 'lime' }: { color?: string }) => {

  return (
    <VStack
      bg={`${color}.500`}
      py={10}
      alignItems="center"
    >
      <Container maxW='8xl'>
        <Text color={'white'} textAlign={'center'} mb={5}>As seen in</Text>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={6}>
          <GridItem w='100%' h='100%'>
            <Image src={BILogo} minW={260} />
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Image src={CKLogo} minW={260} />
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Image src={IvestLogo} minW={260} />
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Image src={NYTLogo} minW={260} />
          </GridItem>
        </Grid>
      </Container>
    </VStack>
  );
};

export default PartnerBanner;
