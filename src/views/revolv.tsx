import { Box, Button, Container, Flex, Grid, GridItem, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import ProductCard from '@/components/card/ProductCard';
import lang from '@/snippet/en.json'
import revolvAnimation from "@/assets/animations/Revolv_Hero.json";
import utilizationAnimation from "@/assets/animations/utilization-1.json";

import FicoImg from "@/assets/fico-revolv.svg";
import Lottie from "lottie-react";
import PartnerBanner from "@/components/common/PartnerBanner";
import TestimonialCard from "@/components/card/TestimonialCard";
import FeaturesCard from "@/components/card/FeaturesCard";
import { features, revolvTestimonials } from "@/utils";
import ContactUs from "@/components/contact-us";
import TrustContent from "@/components/trust-content";

function Revolv() {
  return (
    <>
      <Box className="section-1 banner-section" position={'relative'}>
        <Container maxW='8xl'>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(3, auto)' }}
            py={20}
            color={'white'}
          >
            <GridItem w='100%' h='100%' colSpan={1}>
              <Heading as={'h1'} fontSize={{ base: '48px', md: '64px' }} textAlign={{ base: 'center', md: 'start' }}>{lang.revolv.banner.title}</Heading>
              <Text textAlign={'start'} fontSize={'1.5rem'}>{lang.revolv.banner.subTitle}</Text>
            </GridItem>
            <GridItem w='100%' h='100%' colSpan={1} rowSpan={2}>
              <Lottie animationData={revolvAnimation} loop={false} style={{ height: '200px' }} />
              <VStack mt={3}>
                <Text zIndex={5}>{lang.revolv.banner.averageFico}</Text>
                <Heading as={'h3'} fontSize={'1.5rem'} zIndex={5}>
                  <sup>+</sup>62 points<sup>1</sup>
                </Heading>
              </VStack>
            </GridItem>
            <GridItem w='100%' h='100%' textAlign={{ base: 'center', md: 'start' }} mt={5} zIndex={5}>
              <Button as={'a'} py={4} px={24} colorScheme={'sky'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`}>{lang.base.button}</Button>
            </GridItem>
          </Grid>
        </Container>
        <Image src={'/assets/revolv-hero.jpg'} position={'absolute'} bottom={0} zIndex={-1} w={'full'} objectFit={'cover'} />
      </Box>
      <PartnerBanner color="sky" />
      <Box className="section-2 section-fico">
        <Container maxW='5xl'>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25}>{lang.revolv.fico.title}</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25} color={'sky.500'}>{lang.revolv.fico.subTitle}</Text>
            <Text fontSize={'1.25rem'} textAlign={'center'} dangerouslySetInnerHTML={{ __html: lang.revolv.fico.description }}></Text>
            <Image src={FicoImg} />
            <Text textAlign={'center'}>{lang.revolv.fico.subDescription}</Text>
          </Stack>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>Only</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} color={'sky.500'}>$99/year</Text>
            <Text fontSize={'1.25rem'} textAlign={'center'} dangerouslySetInnerHTML={{ __html: lang.revolv.price.noPayment }}></Text>
            <Button
              as={'a'}
              colorScheme={'sky'}
              px={20}
              href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`}
            >
              {lang.base.button}
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Box className="pt-title-wrapper" position={'relative'}>
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'} position={'relative'} zIndex={2}>
            <Flex className="pt-title" w={'full'} bg={'secGray.800'} h={'200px'} clipPath={'polygon(0 0%,100% 0,100% 100%,0 60%)'} pt={'45px'} flexDir={'column'} alignItems={'center'}>
              <Flex className="pt-title" w={'full'} justifyContent={'center'}>
                <Heading color={'white'} me={2}>Real</Heading><Heading color={'sky.500'}> Pepole</Heading>
              </Flex>
              <Flex className="pt-title" w={'full'} justifyContent={'center'}>
                <Heading color={'white'} me={2}>Real</Heading><Heading color={'sky.500'}> Results</Heading>
              </Flex>
            </Flex>
          </Box>
          <Flex className="pt-title" w={'full'} position={'absolute'} top={'30px'} zIndex={1} bg={'sky.500'} h={'200px'} clipPath={'polygon(0 0%,100% 0,100% 100%,0 60%)'} pt={'45px'} gap={2} justifyContent={'center'}></Flex>
        </Box>
        <Stack my={10} flexDir={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 40 }} px={'1rem'} justifyContent={'center'}>
          {revolvTestimonials?.map((item: any, index: number) => (
            <TestimonialCard key={index} name={item.name} description={item.description} img={item.image} color="sky" />
          ))}
        </Stack>
        <Box className="pt-title-wrapper" position={'relative'} border={'none'}>
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'} position={'relative'} zIndex={2}>
            <Flex className="pt-title" w={'full'} bg={'secGray.800'} h={'80px'} clipPath={'polygon(0% 0%, 100% 60%, 100% 101%, 0% 100%)'}></Flex>
          </Box>
          <Flex className="pt-title" w={'full'} position={'absolute'} top={'-30px'} zIndex={1} bg={'sky.500'} h={'80px'} clipPath={'polygon(0% 0%, 100% 60%, 100% 101%, 0% 100%)'}></Flex>
        </Box>
      </Box>
      <Box className="section-3" mt={'-2px'} bg={'secGray.800'} clipPath={'polygon(0% 0%, 100% 0%, 100% 101%, 0% 80%)'}>
        <Stack py={10} color={'white'} alignItems={'center'} fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight={600} gap={5}>
          <Text maxW={'320px'} textAlign={'center'} lineHeight={1.25} mb={10} dangerouslySetInnerHTML={{ __html: lang.revolv.banner.title1 }}></Text>
        </Stack>
      </Box>
      <Box className="section-4 section-fico">
        <Container maxW='5xl'>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Lottie animationData={utilizationAnimation} loop={false} style={{ height: '100%' }} />
            <Text maxW={'320px'} textAlign={'center'} dangerouslySetInnerHTML={{ __html: lang.revolv.fico.subDescription }}></Text>
          </Stack>
        </Container>
      </Box>

      <Box className="section-5 section-special-product" py={10} color={'white'} bg={'secGray.800'} borderBottomRadius={'5rem'}>
        <Container maxW='5xl'>
          <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} dangerouslySetInnerHTML={{ __html: lang.revolv.product.title }}></Text>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: 6, md: 32 }} mt={10}>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.revolv.product.revolv} variant="sky" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.revolv.product.revolvSaving} variant="sky" path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} />
            </GridItem>
          </Grid>
          <Stack py={4} px={10} mt={8} gap={1} lineHeight={1}>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'}>{lang.base.noCredit}</Text>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'}>{lang.base.badCredit}</Text>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'} color={'sky.500'}>{lang.base.noProblem}</Text>
          </Stack>
        </Container>
      </Box>
      <Box className="section-6 section-journey" py={5}>
        <Container maxW='6xl'>
          <Stack alignItems={'center'}>
            <Text fontSize={'1.25rem'} textAlign={'center'}>{lang.dashboard.journey.title}</Text>
            <FeaturesCard items={features} bg='sky.500' />
          </Stack>
        </Container>
      </Box>
      <Box className="section-7 section-contact-us" py={5}>
        <Container maxW='6xl'>
          <ContactUs color="sky" />
        </Container>
      </Box>
      <Box className="section-8 section-trust-content" pt={5}>
        <TrustContent color="sky" href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} img="/assets/revolv-trust.jpg" />
      </Box>
      <Box className="section-10" py={10} color={'white'} bg={'secGray.800'}>
        <Container maxW='5xl'>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={4}>
            {lang.proud.title}
          </Heading>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={10} color={'sky.500'}>
            {lang.proud.subTitle}
          </Heading>
          <Stack spacing={8}>
            <Text fontSize={'1rem'} textAlign={'center'}>{lang.revolv.proud}</Text>
            <Flex justifyContent={'center'}>
              <Button as={'a'} py={4} px={24} colorScheme={'sky'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`}>{lang.base.button}</Button>
            </Flex>
          </Stack>

        </Container>
      </Box>
    </>
  )
}

export default Revolv
