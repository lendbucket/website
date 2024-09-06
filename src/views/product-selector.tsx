import { Box, Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import ProductCard from '@/components/card/ProductCard';
import lang from '@/snippet/en.json'
import ProductPriceCard from "@/components/card/ProductPriceCard";

function ProductSelector() {
  return (
    <>
      <div className="pt-selector-wrapper">
        <div className="pt-title-wrapper">
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'}>
            <Flex className="pt-title" w={'full'} py={'40px'} gap={2} justifyContent={'center'}>
              <Heading>What is your Credit Goal?</Heading>
            </Flex>
          </Box>
        </div>
        <Container maxW='8xl'>
          <Grid templateColumns='repeat(3, 1fr)' gap={{ base: 6, md: 32 }}>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.product.magnum} variant="orange" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=magnum`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.product.revolv} variant="sky" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.product.instal} variant="lime"path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=instal`} />
            </GridItem>
          </Grid>
        </Container>
        <Box h={'200px'} bg={'lime.500'} zIndex={0} mt={'-100px'}></Box>
        <Container maxW='8xl' my={20}>
          <Grid templateColumns='repeat(3, 1fr)' gap={{ base: 6, md: 32 }}>
            <GridItem w='100%' h='100%'>
              <ProductPriceCard lang={lang.product.magnum} variant="orange" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=magnum`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductPriceCard lang={lang.product.revolv} variant="sky" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductPriceCard lang={lang.product.instal} variant="lime" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=instal`} />
            </GridItem>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default ProductSelector
