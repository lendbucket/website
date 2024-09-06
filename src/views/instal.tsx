import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Icon, Image, Stack, StackDivider, Step, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, Text, VStack } from "@chakra-ui/react";
import lang from '@/snippet/en.json'
import instalAnimation from "@/assets/animations/Instal_Hero.json";
import FicoImg from "@/assets/fico-instal.svg";
import Lottie from "lottie-react";
import PartnerBanner from "@/components/common/PartnerBanner";
import TestimonialCard from "@/components/card/TestimonialCard";
import FeaturesCard from "@/components/card/FeaturesCard";
import { features, instalTestimonials, instalPrices, instalProTips, instalSpecialSteps, faqForDashboard, instalProductDetails } from "@/utils";
import ContactUs from "@/components/contact-us";
import TrustContent from "@/components/trust-content";
import { FiCheckCircle } from "react-icons/fi";
import BaseAccordion from "@/components/common/BaseAccordion";

function Instal() {
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
              <Heading as={'h1'} fontSize={{ base: '48px', md: '64px' }} textAlign={{ base: 'center', md: 'start' }}>{lang.instal.banner.title}</Heading>
              <Text textAlign={'start'} fontSize={'1.5rem'}>{lang.instal.banner.subTitle}</Text>
            </GridItem>
            <GridItem w='100%' h='100%' colSpan={1} rowSpan={2}>
              <Lottie animationData={instalAnimation} loop={false} style={{ height: '200px' }} />
              <VStack mt={3}>
                <Text zIndex={5}>{lang.instal.banner.averageFico}</Text>
                <Heading as={'h3'} fontSize={'1.5rem'} zIndex={5} color={'orange.500'}>
                  <sup>+</sup>45 points<sup>1</sup>
                </Heading>
              </VStack>
            </GridItem>
            <GridItem w='100%' h='100%' textAlign={{ base: 'center', md: 'start' }} mt={5} zIndex={5}>
              <Button as={'a'} py={4} px={24} colorScheme={'lime'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`}>{lang.base.button}</Button>
            </GridItem>
          </Grid>
        </Container>
        <Image src={'/assets/instal-hero.jpg'} position={'absolute'} bottom={0} zIndex={-1} w={'full'} objectFit={'cover'} />
      </Box>
      <PartnerBanner color="lime" />
      <Box className="section-2">
        <Stack my={10} px={'1rem'} justifyContent={'center'} alignItems={'center'}>
          <Flex w={'80px'} h={'80px'} p={2} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} color={'white'} bg={'secGray.800'} >
            <Icon as={FiCheckCircle} fontSize={'40px'} color={'lime.500'} />
          </Flex>
          <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} >{lang.instal.price.title}</Text>
          <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} color={'lime.500'}>{lang.instal.price.title1}</Text>
        </Stack>
      </Box>
      <Box>
        <Box className="pt-title-wrapper" position={'relative'}>
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'} position={'relative'} zIndex={2}>
            <Flex className="pt-title" w={'full'} bg={'secGray.800'} h={'200px'} clipPath={'polygon(0 0%,100% 0,100% 100%,0 60%)'} pt={'45px'} flexDir={'column'} alignItems={'center'}>
              <Flex className="pt-title" w={'full'} justifyContent={'center'}>
                <Heading color={'white'} me={2}>Real</Heading><Heading color={'lime.500'}> Pepole</Heading>
              </Flex>
              <Flex className="pt-title" w={'full'} justifyContent={'center'}>
                <Heading color={'white'} me={2}>Real</Heading><Heading color={'lime.500'}> Results</Heading>
              </Flex>
            </Flex>
          </Box>
          <Flex className="pt-title" w={'full'} position={'absolute'} top={'30px'} zIndex={1} bg={'lime.500'} h={'200px'} clipPath={'polygon(0 0%,100% 0,100% 100%,0 60%)'} pt={'45px'} gap={2} justifyContent={'center'}></Flex>
        </Box>
        <Stack my={10} flexDir={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 40 }} px={'1rem'} justifyContent={'center'}>
          {instalTestimonials?.map((item: any, index: number) => (
            <TestimonialCard key={index} name={item.name} description={item.description} img={item.image} />
          ))}
        </Stack>
        <Box className="pt-title-wrapper" position={'relative'} border={'none'}>
          <Box className="pt-title-wrapper-top" display={'flex'} justifyContent={'center'} position={'relative'} zIndex={2}>
            <Flex className="pt-title" w={'full'} bg={'secGray.800'} h={'80px'} clipPath={'polygon(0% 0%, 100% 60%, 100% 101%, 0% 100%)'}></Flex>
          </Box>
          <Flex className="pt-title" w={'full'} position={'absolute'} top={'-30px'} zIndex={1} bg={'lime.500'} h={'80px'} clipPath={'polygon(0% 0%, 100% 60%, 100% 101%, 0% 100%)'}></Flex>
        </Box>
      </Box>
      <Box className="section-3" mt={'-2px'} bg={'secGray.800'}>
        <Stack px={'1rem'} justifyContent={'center'} alignItems={'center'} py={8}>
          <Flex w={'80px'} h={'80px'} p={2} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} color={'white'} bg={'lime.500'} >
            <Icon as={FiCheckCircle} fontSize={'40px'} color={'white'} />
          </Flex>
          <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} color={'white'}>{lang.instal.price.title2}</Text>
          <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} color={'lime.500'}>{lang.instal.price.title3}</Text>
        </Stack>
      </Box>
      <Box className="section-4 price-section">
        <Container maxW='5xl'>
          <Stack my={10} px={'1rem'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'1rem'} fontWeight={600} textAlign={'center'} mb={16} >{lang.instal.price.sub}</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} dangerouslySetInnerHTML={{ __html: lang.instal.price.plan }}></Text>
            <Text fontSize={'1rem'} fontWeight={600} textAlign={'center'} mb={16} >{lang.instal.price.planSub}</Text>
            {instalPrices?.map((price: any, index: number) => (
              <Box key={index}>
                <Text fontSize={{ base: '1.2rem', md: '1.5rem' }} fontWeight={600} textAlign={'center'}>{price.name}</Text>
                <Stack spacing={5} w={'full'} alignItems={'center'} justifyContent={'center'} mb={8}>
                  {price.items.map((item: any, i: number) => (
                    <HStack
                      key={i}
                      w={'full'}
                      justifyContent={'space-between'}
                      divider={item.type !== 'header' ? (<StackDivider borderColor={'gray.400'} />) : undefined}
                      bg={item.type !== 'header' ? 'secGray.200' : 'white'}
                      borderRadius={item.type !== 'header' ? '50px' : '0'}
                      fontWeight={item.type !== 'header' ? '500' : '600'}
                      fontSize={'0.875rem'}
                      py={2}
                    >
                      {item.values.map((value: string, j: number) => (
                        <Text key={j} w={'full'} textAlign={'center'} px={5}>{value}</Text>
                      ))}
                    </HStack>
                  ))}
                </Stack>
              </Box>
            ))}
            <Button
              as={'a'}
              colorScheme={'lime'}
              px={20}
              href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=instal`}
            >
              {lang.base.button}
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box className="section-5 pro-tip" mt={'-2px'} bg={'secGray.800'} color={'white'}>
        <Container maxW='5xl'>
          <Stack px={'1rem'} justifyContent={'center'} alignItems={'center'} py={8}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600}>{lang.instal.tip}</Text>
            <Stack>
              {instalProTips?.map((tip: any, index: number) => (
                <Stack key={index}>
                  <Text textAlign={'start'} color={'lime.500'}>{tip.name}</Text>
                  <Stack key={index}>
                    {tip.descriptions.map((item: any, i: number) => (
                      <Text key={i} textAlign={'start'}>{item}</Text>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack px={'1rem'} justifyContent={'center'} alignItems={'center'} py={8}>
            <Text fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight={600} textAlign={'center'} color={'white'}>Start building credit</Text>
            <Text fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight={600} textAlign={'center'} color={'lime.500'}>Today</Text>
          </Stack>
        </Container>
      </Box>
      <Box className="section-6 section-special-product" py={10} color={'white'} bg={'secGray.800'} borderBottomRadius={'5rem'}>
        <Container maxW='5xl'>
          <Stack alignItems={'center'}>
            <Stepper index={0} orientation='vertical' colorScheme={'lime'} height='400px' gap='0'>
              {instalSpecialSteps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator
                    fontWeight={600}
                    sx={{
                      '[data-status=complete] &': {
                        background: 'lime.500',
                        borderColor: 'white',
                      },
                      '[data-status=active] &': {
                        background: 'lime.500',
                        borderColor: 'white',
                      },
                      '[data-status=incomplete] &': {
                        background: 'lime.500',
                        borderColor: 'white',
                      },
                    }}
                  >
                    <StepStatus
                      complete={<StepNumber />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box>
                    <StepTitle>{step.title}</StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Stack>
          <Stack py={4} px={10} mt={8} gap={1} lineHeight={1}>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'}>{lang.base.noCredit}</Text>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'}>{lang.base.badCredit}</Text>
            <Text fontSize={{ base: '2rem', md: '3rem' }} fontWeight={600} textAlign={'center'} color={'lime.500'}>{lang.base.noProblem}</Text>
          </Stack>
        </Container>
      </Box >
      <Box className="section-7 section-journey" py={5}>
        <Container maxW='6xl'>
          <Stack alignItems={'center'}>
            <Text fontSize={'1.25rem'} textAlign={'center'}>{lang.dashboard.journey.title}</Text>
            <FeaturesCard items={features} bg='lime.500' />
          </Stack>
        </Container>
      </Box>
      <Box className="section-8 section-fico" mb={5}>
        <Container maxW='5xl'>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>{lang.instal.fico.title}</Text>
            <Text fontSize={'1.125rem'} textAlign={'center'}>{lang.instal.fico.subTitle}</Text>
            <Image src={FicoImg} />
            <Text textAlign={'center'}>{lang.instal.fico.description}</Text>
          </Stack>
        </Container>
      </Box>

      <Box className="section-9 section-product-detail" py={10}>
        <Container maxW='6xl'>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={10}>Product Details</Heading>
          <Text>{lang.instal.productDetail.description}</Text>
          <Text mb={10}>{lang.instal.productDetail.subDescription}</Text>
          <BaseAccordion items={instalProductDetails} align={'center'} />
        </Container>
      </Box>

      <Box className="section-7 section-contact-us" py={5}>
        <Container maxW='6xl'>
          <ContactUs color="lime" />
        </Container>
      </Box>
      <Box className="section-8 section-trust-content" pt={5}>
        <TrustContent color="lime" href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`} img="/assets/revolv-trust.jpg" />
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
            <Text fontSize={'1rem'} textAlign={'center'}>{lang.instal.proud}</Text>
            <Flex justifyContent={'center'}>
              <Button as={'a'} py={4} px={24} colorScheme={'lime'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=revolv`}>{lang.base.button}</Button>
            </Flex>
          </Stack>

        </Container>
      </Box>
    </>
  )
}

export default Instal
