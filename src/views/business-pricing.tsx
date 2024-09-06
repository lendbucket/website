import { Box, Button, Container, Flex, Heading, HStack, Image, ListItem, OrderedList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import lang from '@/snippet/en.json'
import PartnerBanner from "@/components/common/PartnerBanner";
import { accountDetails, businessPricing } from "@/utils";
import ContactUs from "@/components/contact-us";
import BaseAccordion from "@/components/common/BaseAccordion";


function BusinessPricing() {
  return (
    <>
      <Box className="section-1 banner-section" position={'relative'}>
        <Container maxW='5xl'>
          <Stack py={30} color={'white'} spacing={'16rem'}>
            <Stack pt={10}>
              <Text textAlign={'start'} fontSize={'2.5rem'}>{lang.business.banner.subTitle}</Text>
              <Heading as={'h1'} fontSize={{ base: '48px', md: '72px' }} textAlign={'center'}>{lang.business.banner.title}</Heading>
            </Stack>
            <Stack alignItems={'center'} spacing={3}>
              <Button as={'a'} py={4} px={32} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>
              <Button as={'a'} py={4} px={32} colorScheme={'whiteAlpha'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.doIQuality}</Button>
            </Stack>
          </Stack>
        </Container>
        <Image src={'/assets/business_hero_1.jpg'} position={'absolute'} bottom={0} zIndex={-1} w={'full'} h={'full'} objectFit={'cover'} />
      </Box>
      <PartnerBanner color="gray" />
      <Box className="section-2" bg={'secGray.800'} color={'white'}>
        <Container maxW='6xl'>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>{lang.business.section2.text}</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>Pay no interest with a 0% interest rate business credit builder account </Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'} mt={10}>Account Options</Text>
            <Text fontSize={{ base: '0.875rem', md: '1rem' }} textAlign={'center'} mt={4}>CS Business accounts report up to a $50,000 installment account to major business credit bureaus using your company's EIN.</Text>
            <Text fontSize={{ base: '0.875rem', md: '1rem' }} textAlign={'center'}>Select the amount of credit, savings, and length of payment history you want to build.</Text>
          </Stack>

          <Tabs variant='unstyled' colorScheme="orange" color={'white'}>
            <HStack>
              <Stack w={'50%'} alignItems={'start'}>
                <Text fontSize={{ base: '1.025rem', md: '1.25rem' }} textAlign={'center'} fontWeight={600}>Step 1:</Text>
                <Text fontSize={{ base: '0.875rem', md: '1rem' }} textAlign={'center'}>Select amount of credit to build</Text>
              </Stack>

              <TabList w={'50%'} bg={'white'} borderRadius={'10px'} color={'secGray.800'}>
                {businessPricing?.map((data: any, i: number) => (
                  <Tab key={i} w={'5xl'} fontSize={'1.025rem'} fontWeight={600} _selected={{ color: 'white', bg: 'orange.500', borderRadius: '10px' }}>{data.price}</Tab>
                ))}
              </TabList>
            </HStack>
            <Stack w={'full'} alignItems={'start'} mt={4}>
              <Text fontSize={{ base: '1.025rem', md: '1.25rem' }} textAlign={'center'} fontWeight={600}>Step 2:</Text>
              <Text fontSize={{ base: '0.875rem', md: '1rem' }} textAlign={'center'}>Select the plan that’s best for you</Text>
            </Stack>
            <TabPanels py={10}>
              {businessPricing?.map((data: any, i: number) => (
                <TabPanel key={i} p={0}>
                  <HStack>
                    <Stack w={'full'}>
                      {data?.items.labels?.map((label: any, j: number) => (
                        <Text
                          key={j}
                          fontSize={{ base: '1.025rem', md: '1.25rem' }}
                          textAlign={'start'}
                          color={'gray.400'}
                          fontWeight={600}
                          py={5}
                          borderBottom={1}
                          borderStyle={'dotted'}
                        >
                          {label}
                        </Text>
                      ))}
                    </Stack>
                    <HStack w={'full'}>
                      <Stack bg={'sky.500'} borderRadius={'10px'} p={4} w={'full'}>
                        {data?.items.prices1?.map((label: any, j: number) => (
                          <Text
                            key={j}
                            fontSize={{ base: '1.025rem', md: '1.25rem' }}
                            textAlign={'center'}
                            color={'white'}
                            fontWeight={600}
                            py={5}
                            borderBottom={1}
                            borderStyle={'dotted'}
                          >
                            {label}
                          </Text>
                        ))}
                      </Stack>
                      <Stack bg={'white'} borderRadius={'10px'} p={4} w={'full'}>
                        {data?.items.prices2?.map((label: any, j: number) => (
                          <Text
                            key={j}
                            fontSize={{ base: '1.025rem', md: '1.25rem' }}
                            textAlign={'center'}
                            color={'secGray.800'}
                            fontWeight={600}
                            py={5}
                            borderBottom={1}
                            borderStyle={'dotted'}
                          >
                            {label}
                          </Text>
                        ))}
                      </Stack>
                    </HStack>
                  </HStack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          <Stack w={'full'} alignItems={'center'} pt={4} py={10}>
            <Button as={'a'} py={4} px={32} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>
          </Stack>
        </Container>
      </Box>

      <Box className="section-3" bg={'gray.600'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'start'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                Build Credit. Build Savings. Pay NO interest.
              </Text>
            </Box>
            <Text as={'span'} fontSize={'1rem'}>
              CS Business credit builder accounts include 0% interest-free commercial credit builder installment loans.
            </Text>
            <Box my={5}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600}>
                Build Credit
              </Text>
              <OrderedList spacing={2}>
                <ListItem fontSize={'1rem'}>
                  Establish a credit profile for your company
                </ListItem>

                <ListItem fontSize={'1rem'}>
                  Build $5,000 to $50,000 of bank installment loan credit
                </ListItem>

                <ListItem fontSize={'1rem'}>
                  Build 25 to 50 months of payment history
                </ListItem>

                <ListItem fontSize={'1rem'}>
                  Account and payment history is reported as a bank financial tradeline
                </ListItem>

                <ListItem fontSize={'1rem'}>
                  Account is reported to major business credit bureaus, including Experian, Equifax, PayNet, and SBFE
                </ListItem>
              </OrderedList>
            </Box>
            <Box my={5}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600}>
                Build Savings
              </Text>
              <OrderedList spacing={2}>
                <ListItem fontSize={'1rem'}>
                  100% of every monthly payment you make builds savings/cash reserves for your company
                </ListItem>
                <ListItem fontSize={'1rem'}>
                  Create a rainy-day fund or save up for a large down payment while you build credit
                </ListItem>
                <ListItem fontSize={'1rem'}>
                  Credit builder loan proceeds and savings are locked until the account is paid-in-full or closed
                </ListItem>
                <ListItem fontSize={'1rem'}>
                  When you complete or close your account, your savings unlock
                </ListItem>
              </OrderedList>
            </Box>
            <Box my={5}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600}>
                Pay NO interest
              </Text>
              <Text fontSize={'1rem'} textAlign={'start'} mb={5}>
                Every CS Business credit builder account includes a 0% interest rate credit builder loan               </Text>
              <Text fontSize={'1rem'} textAlign={'start'}>
                Account can be closed or cancelled at any time for any reason with no fee or penalty
              </Text>
            </Box>
            <Stack w={'full'} alignItems={'center'}>
              <Button as={'a'} py={4} px={32} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box className="section-4" bg={'secGray.800'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                CS Business is the easy and reliable way to establish and build a
                <Text as={'span'} fontWeight={600} color="orange.500" mx={2}>
                  large financial tradeline
                </Text>
                for your company
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text as={'span'} fontSize={'1rem'}>
                There are two types of business credit, it’s likely your company needs both:
              </Text>
            </Box>
            <Box my={5} width={'full'} fontSize={'1rem'}>
              <Text mb={3}>A FICO SBSS score has three main components:</Text>
              <OrderedList spacing={2}>
                <ListItem> Financial tradelines </ListItem>
                <ListItem> Vendor tradelines </ListItem>
              </OrderedList>
            </Box>

            <Box textAlign={'start'} w={'full'}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                Financial tradelines are extensions of credit from a bank
              </Text>
              <Text as={'span'} fontSize={'1rem'}>
                or financing company. For example, a loan or line of credit.
              </Text>
              <Text fontSize={'1rem'} textAlign={'start'} mb={5}>
                Vendor tradelines are extensions of credit from a merchant or supplier. For example, 2/10 or net 30 terms for paying an invoice.  
              </Text>
            </Box>

          </Stack>
        </Container>
      </Box>
      <Box className="section-5" bg={'gray.600'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600}>
                It's critical to keep your business credit separate from your personal credit
              </Text>
              <Text fontSize={'1rem'}>
                Some business lenders require a personal credit score, some require a business credit score, and some require both.
              </Text>
            </Box>
            <Box my={5} width={'full'} fontSize={'1rem'}>
              <Text mb={3}>Build business credit for your company with its EIN for any of the following entity types:</Text>
              <OrderedList spacing={2}>
                <ListItem> LLC </ListItem>
                <ListItem> S-Corp </ListItem>
                <ListItem> C-Corp </ListItem>
                <ListItem> General partnership </ListItem>
              </OrderedList>
            </Box>
            <Button as={'a'} py={4} px={32} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>

            <Box textAlign={'start'} w={'full'} my={5}>
              <Text fontSize={'1rem'}>
                If you are a Sole Proprietor, you can build a large amount of personal credit for business purposes with MAGNUM from CreditBolt.
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text as={'span'} fontSize={'1rem'} me={2}>
                Build from $2,000 up to $30,000 of
              </Text>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                personal credit
              </Text>
              <Text as={'span'} fontSize={'1rem'}>
                starting at just $25/mo
              </Text>
            </Box>
            <Button as={'a'} py={4} px={32} colorScheme={'whiteAlpha'} href={`https://magnum.bank/`}>Learn about MAGNUM</Button>
          </Stack>
        </Container>
      </Box>

      <Box className="section-6" bg={'secGray.800'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                How does a CreditBolt Business credit builder account work?
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                Step 1: Apply for an account
              </Text>
              <Text fontSize={'1rem'}>
                Open an account online in just minutes. Enter your basic personal and company information. There is no hard pull on your personal or business credit.
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                Step 2: Select a plan
              </Text>
              <Text fontSize={'1rem'}>
                Select a credit builder account that fits your objective and budget. An installment loan financial tradeline is opened in your company’s name and reported to the major business credit bureaus using your company’s EIN, establishing a credit profile for your business.
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                Step 3: Build credit
              </Text>
              <Text fontSize={'1rem'}>
                Make on-time monthly payments. Your payment history is reported to the major business credit bureaus, building your company’s credit history and cash reserves/savings.
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                Step 4: Unlock savings
              </Text>
              <Text fontSize={'1rem'}>
                Every monthly payment builds payment history and savings. Unlock savings at maturity or cancel anytime with no penalty.
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'} my={5}>
              <Text fontSize={'1rem'}>
                * CreditBolt for Business is a product of Austin Capital Bank, Member FDIC. Loan proceeds are locked in an FDIC-insured savings account to secure the credit builder loan until it is repaid. Loan proceeds are unlocked when loan is closed or repaid in full.               </Text>
            </Box>
          </Stack>
          <Stack py={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                Accounts details
              </Text>
            </Box>
            <Box w={'full'}>
              <BaseAccordion items={accountDetails} align={'center'} color="orange" />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box className="section-7 section-contact-us" py={5} bg={'gray.600'} color={'white'}>
        <Container maxW='6xl'>
          <ContactUs color="orange" />
        </Container>
      </Box>
      <Box className="section-8" py={10} color={'white'} bg={'secGray.800'}>
        <Container maxW='5xl'>
          <Heading as={'h1'} fontSize={'2rem'} textAlign={'center'} mb={4}>
            Business credit building and security only a real bank can provide
          </Heading>
          <Stack spacing={8}>
            <Text fontSize={'1rem'} textAlign={'center'}>
              CreditStrong for Business is part of an FDIC-insured bank, so you know your money and your personal information are safe and secure.
            </Text>
            <Flex justifyContent={'center'}>
              <Button as={'a'} py={4} px={24} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default BusinessPricing
