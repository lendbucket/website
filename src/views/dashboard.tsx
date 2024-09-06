import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image, Link, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import ProductCard from '@/components/card/ProductCard';
import lang from '@/snippet/en.json'
import testimonials from '@/snippet/testimonials.json'
import cscombos from '@/snippet/cscombos.json'
import specialProducts from '@/snippet/special_products.json'
import homeAnimation from "@/assets/animations/home.json";
import OrangeChevron from "@/assets/animations/orange_chevron.svg";
import BlueChevron from "@/assets/animations/blue_chevron.svg";
import GreenChevron from "@/assets/animations/green_chevron.svg";
import FicoImg from "@/assets/fico.svg";
import Lottie from "lottie-react";
import PartnerBanner from "@/components/common/PartnerBanner";
import TestimonialCard from "@/components/card/TestimonialCard";
import Card from '@/components/card/Card';
import FeaturesCard from "@/components/card/FeaturesCard";
import { faqForDashboard, features, products } from "@/utils";
import ContactUs from "@/components/contact-us";
import BaseAccordion from "@/components/common/BaseAccordion";
import TrustContent from "@/components/trust-content";

function Dashboard() {
  return (
    <>
      <Box className="banner-section">
        <Container maxW='8xl'>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(3, auto)' }}
            py={20}
          >
            <GridItem w='100%' h='100%' colSpan={1}>
              <Heading as={'h1'} fontSize={{ base: '48px', md: '84px' }} textAlign={{ base: 'center', md: 'start' }}>{lang.dashboard.banner.title}</Heading>
            </GridItem>
            <GridItem w='100%' h='100%' colSpan={1} rowSpan={2} position={'relative'}>
              <Lottie animationData={homeAnimation} loop={false} style={{ height: '200px' }} />
              <VStack mt={3}>
                <Text fontWeight={600} zIndex={5}>{lang.dashboard.banner.improveCredit}</Text>
                <Heading as={'h3'} fontSize={'1.5rem'} zIndex={5}>
                  <sup>+</sup>45 to <sup>+</sup>86
                </Heading>
                <Text zIndex={5}>{lang.dashboard.banner.averageFico}<sup>1</sup></Text>
              </VStack>
              <Image src={OrangeChevron} position={'absolute'} bottom={0} />
              <Image src={GreenChevron} position={'absolute'} top={'-16px'} right={0} />
              <Image src={BlueChevron} position={'absolute'} bottom={'-132px'} right={'16px'} zIndex={2} />
            </GridItem>
            <GridItem w='100%' h='100%' textAlign={{ base: 'center', md: 'start' }} mt={5} zIndex={5}>
              <Button as={'a'} py={4} px={24} colorScheme={'orange'} href={'/product-selector'}>{lang.dashboard.banner.getStarted}</Button>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <PartnerBanner />
      <div className="pt-section-wrapper">
        <Flex bg={'secGray.800'} py={10} color={'white'} justifyContent={'center'} fontSize={{ base: '1.5rem', md: '1.75rem' }} fontWeight={600}>
          <Text maxW={'320px'} textAlign={'center'} lineHeight={1.25} dangerouslySetInnerHTML={{ __html: lang.dashboard.banner.description1 }}></Text>
        </Flex>
        <div className="pt-title-wrapper">
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'}>
            <Flex className="pt-title" w={'full'} bg={'secGray.800'} h={'200px'} clipPath={'polygon(0 0%,100% 0,100% 100%,0 60%)'} pt={'45px'} gap={2} justifyContent={'center'}>
              <Heading color={'white'}>Our </Heading><Heading color={'lime.500'}>Products</Heading>
            </Flex>
          </Box>
        </div>
        <Container mt={'-64px'} mb={10} maxW='8xl'>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={{ base: 6, md: 32 }}>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.product.magnum} variant="orange" isLearnMore path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=magnum`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.product.revolv} variant="sky" isLearnMore path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} />
            </GridItem>
            <GridItem w='100%' h='100%'>
              <ProductCard lang={lang.product.instal} variant="lime" isLearnMore path={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=instal`} />
            </GridItem>
          </Grid>
        </Container>
      </div>
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
          {testimonials?.map((item: any, index: number) => (
            <TestimonialCard key={index} name={item.name} description={item.description} img={item.image} />
          ))}
        </Stack>
        <Box className="pt-title-wrapper" position={'relative'} border={'none'}>
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'} position={'relative'} zIndex={2}>
            <Flex className="pt-title" w={'full'} bg={'secGray.800'} h={'80px'} clipPath={'polygon(0% 0%, 100% 60%, 100% 101%, 0% 100%)'}></Flex>
          </Box>
          <Flex className="pt-title" w={'full'} position={'absolute'} top={'-30px'} zIndex={1} bg={'sky.500'} h={'80px'} clipPath={'polygon(0% 0%, 100% 60%, 100% 101%, 0% 100%)'}></Flex>
        </Box>
      </Box>
      <Box className="section-3" mt={'-2px'} bg={'secGray.800'}>
        <Stack py={10} color={'white'} alignItems={'center'} fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight={600} gap={5}>
          <Text maxW={'320px'} textAlign={'center'} lineHeight={1.25} dangerouslySetInnerHTML={{ __html: lang.dashboard.banner.title1 }}></Text>
          <Text maxW={'320px'} textAlign={'center'} lineHeight={1.25} dangerouslySetInnerHTML={{ __html: lang.dashboard.banner.title2 }}></Text>
        </Stack>

        <HStack flexDir={{ base: 'column', md: 'row' }} justifyContent={'center'} gap={{ base: 10, md: 40 }} py={5} >
          {cscombos?.map((item: any, index: number) => (
            <Card maxW='xs' key={index}>
              <Stack spacing={5}>
                <Flex px={8} py={2} fontSize={'1.5rem'} fontWeight={600} bg={'secGray.800'} gap={3} justifyContent={'center'} color={'white'} borderRadius={'10px'}>
                  <Text color={`${item.color}.500`}>{item.product1}</Text> + <Text color={'sky.500'}>{item.product2}</Text>
                </Flex>
                <Text fontSize={'1.125rem'} textAlign={'center'}>{item.description}</Text>
                <Button
                  as={'a'}
                  variant={'outline'}
                  colorScheme={item.color}
                  href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=magnum`}>Get Started</Button>
              </Stack>
            </Card>
          ))}
        </HStack>
        <Text textAlign={'center'} lineHeight={1.25} color={'white'} p={10}>{lang.dashboard.cscombo}</Text>
      </Box>
      <Box className="section-4 section-fico">
        <Container maxW='5xl'>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} lineHeight={1.25} dangerouslySetInnerHTML={{ __html: lang.dashboard.fico.title }}></Text>
            <Text fontSize={'1.25rem'} textAlign={'center'}>{lang.dashboard.fico.description}</Text>
            <Image src={FicoImg} />
            <Text textAlign={'center'}>{lang.dashboard.fico.subDescription}</Text>
          </Stack>
        </Container>
      </Box>

      <Box className="section-5 section-special-product" py={10} color={'white'} bg={'secGray.800'} borderBottomRadius={'5rem'}>
        <Container maxW='5xl'>
          <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>{lang.dashboard.special.title}</Text>
          <Stack flexDir={{ base: 'column', md: 'row' }} py={10} px={10} justifyContent={'space-between'} gap={5}>
            {specialProducts?.map((item: any, index: number) => (
              <VStack spacing={8} key={index} maxW={'320px'} justifyContent={'space-between'}>
                <VStack spacing={0}>
                  <Image src={item.logo} width={'200px'} />
                  <Text fontSize={'1.25rem'} textAlign={'center'}>{item.title}</Text>
                </VStack>

                <VStack spacing={0}>
                  <Text fontSize={'3.5rem'} fontWeight={600} textAlign={'center'} lineHeight={1}>{item.score}</Text>
                  <Text fontSize={'1.25rem'} textAlign={'center'} lineHeight={1}>{item.scoreTitle}</Text>
                  <Text fontSize={'0.975rem'} textAlign={'center'} lineHeight={1} dangerouslySetInnerHTML={{ __html: item.scoreSubTitle }}></Text>
                </VStack>

                <UnorderedList spacing={5}>
                  {item.items?.map((data: string, index: number) => (
                    <ListItem key={index}>{data}</ListItem>
                  ))}
                </UnorderedList>
                <Button
                  as={'a'}
                  w={'full'}
                  colorScheme={item.color}
                  href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=magnum`}
                >
                  {lang.dashboard.special.button}
                </Button>
                <Button
                  as={'a'}
                  w={'full'}
                  variant={'outline'}
                  colorScheme={'white'}
                  href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=magnum`}
                >
                  {lang.dashboard.special.learnMore}
                </Button>

              </VStack>
            ))}
          </Stack>
          <Stack py={4} px={10} mt={8} gap={1} lineHeight={1}>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'}>{lang.base.noCredit}</Text>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'} color={'lime.500'}>{lang.base.noProblem}</Text>
          </Stack>
        </Container>
      </Box>
      <Box className="section-6 section-journey" py={5}>
        <Container maxW='6xl'>
          <Stack alignItems={'center'}>
            <Text fontSize={'1.25rem'} textAlign={'center'}>{lang.dashboard.journey.title}</Text>
            <FeaturesCard items={features} bg='lime.500' />
          </Stack>
        </Container>
      </Box>
      <Box className="section-7 section-contact-us" py={5}>
        <Container maxW='6xl'>
          <ContactUs />
        </Container>
      </Box>
      <Box className="section-8 section-trust-content" py={5}>
        <TrustContent img="/assets/bank.jpg" />
      </Box>
      <Box className="section-9 section-faq" py={10}>
        <Container maxW='6xl'>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={10}>FAQ</Heading>
          <BaseAccordion items={faqForDashboard} />
        </Container>
      </Box>
      <Box className="section-10" py={10} color={'white'} bg={'secGray.800'}>
        <Container maxW='5xl'>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={4}>
            {lang.proud.title}
          </Heading>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={10} color={'lime.500'}>
            {lang.proud.subTitle}
          </Heading>
          <Stack spacing={8}>
            {products?.map((product: any, index: number) => (
              <Flex key={index}>
                <Link href={product.path} color={'lime.500'} me={2}>{product.title}: </Link>
                <Text fontSize={'1rem'}><strong>{product.fico}</strong> {product.description}</Text>
              </Flex>
            ))}
            <Flex justifyContent={'center'}>
              <Button as={'a'} py={4} px={24} colorScheme={'lime'} href={'/product-selector'}>{lang.dashboard.banner.getStarted}</Button>
            </Flex>
          </Stack>

        </Container>
      </Box>
    </>
  )
}

export default Dashboard
