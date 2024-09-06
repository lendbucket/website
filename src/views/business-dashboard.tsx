import { Box, Button, Container, Flex, Grid, GridItem, Heading, Image, ListItem, OrderedList, Stack, Text, UnorderedList } from "@chakra-ui/react";
import lang from '@/snippet/en.json'
import PartnerBanner from "@/components/common/PartnerBanner";
import { bsPriceList, bsPriceList1, businessAccountList } from "@/utils";
import ContactUs from "@/components/contact-us";
import Card from '@/components/card/Card';


function BusinessDashboard() {
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
        <Image src={'/assets/business-hero.jpg'} position={'absolute'} bottom={0} zIndex={-1} w={'full'} h={'full'} objectFit={'cover'} />
      </Box>
      <PartnerBanner color="gray" />
      <Box className="section-2" bg={'secGray.800'} color={'white'}>
        <Container maxW='5xl'>
          <Stack py={10} px={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>{lang.business.section2.text}</Text>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>{lang.business.section2.text1}</Text>
          </Stack>
        </Container>
      </Box>
      <Box className="section-3" bg={'gray.600'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                Establish business credit for your company
              </Text>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} color="orange.500">
                without paying interest
              </Text>
            </Box>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.125rem', md: '1.5rem' }} fontWeight={600}>
                Pay
                <Text as={'span'} fontSize={{ base: '1.125rem', md: '1.5rem' }} fontWeight={600} color="orange.500" mx={2}>
                  NO INTEREST
                </Text>
                with a 0% interest-free business credit builder account
              </Text>
            </Box>
            <Text as={'span'} fontSize={'1rem'}>
              We are the only bank in the nation that gives small business owners the opportunity to build payment history on a large bank loan – without paying interest.
            </Text>
            <Text as={'span'} fontSize={'1rem'} fontWeight={600}>
              CS Business offers 25-Month or 50-Month 0% Interest Rate Credit Builder Accounts
            </Text>

            <Box my={5}>
              <UnorderedList spacing={2}>
                {businessAccountList?.map((item: any, index: number) => (
                  <ListItem
                    key={index}
                    sx={{
                      "&::marker": {
                        color: 'orange.500'
                      }
                    }}
                    fontSize={'1rem'}
                    color={item.active ? 'orange.500' : 'white'}
                  >
                    {item.value}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Box my={5}>
              <Text fontSize={'1rem'} textAlign={'start'} mb={5}>
                All plans build commercial installment loan credit and payment history and are reported as a financial tradeline
              </Text>
              <Text fontSize={'1rem'} textAlign={'start'}>
                * CreditBolt for Business is a product of Austin Capital Bank, Member FDIC. Loan proceeds are locked in an FDIC-insured savings account to secure the credit builder loan until it is repaid. Loan proceeds are unlocked when loan is closed or repaid in full.
              </Text>
            </Box>
            <Button as={'a'} py={4} px={32} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>

          </Stack>
        </Container>
      </Box>

      <Box className="section-4" bg={'secGray.800'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                Why build business credit for your company?
              </Text>
            </Box>
            <Box textAlign={'start'} w={'full'}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                SBA loans are the 'gold standard' of small business loans.
              </Text>
              <Text as={'span'} fontSize={'1rem'}>
                With an SBA loan your company can obtain operating funds with favorable rates and long repayment terms of up to 25 years, minimizing required monthly payments and maximizing your financial flexibility.
              </Text>
            </Box>

            <Box textAlign={'start'} w={'full'}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                The SBA requires a FICO SBSS credit score.
              </Text>
              <Text as={'span'} fontSize={'1rem'}>
                for every SBA loan approval. If you ever want to get approved for an SBA loan, you’ll need a FICO SBSS credit score for your company of at least 155, but most likely 160 to 180+. FICO SBSS scores range from 0 to 300.
              </Text>
            </Box>

            <Box my={5} width={'full'} fontSize={'1rem'}>
              <Text mb={3}>A FICO SBSS score has three main components:</Text>
              <OrderedList spacing={2}>
                <ListItem> Your personal credit profile </ListItem>
                <ListItem color={'orange.500'}> Your company's business credit profile </ListItem>
                <ListItem> Current financial metrics and history for your company </ListItem>
              </OrderedList>
            </Box>

            <Box textAlign={'start'} w={'full'}>
              <Text as={'span'} fontSize={'1rem'} fontWeight={600} color="orange.500" me={2}>
                If you don't have a business credit profile, your company's FICO SBSS score will be lower
              </Text>
              <Text as={'span'} fontSize={'1rem'}>
                because it will be calculated using ONLY on your personal credit and your company's financials.
              </Text>
            </Box>

            <Box my={5}>
              <Text fontSize={'1rem'} textAlign={'start'} mb={5}>
                By establishing and building a strong business credit profile for your company, you will increase your FICO SBSS score and your chances to be approved for a SBA loan.
              </Text>
              <Text fontSize={'1rem'} textAlign={'start'}>
                If you need help with your personal credit, CreditBolt Revolv can instantly improve your credit utilization and MAGNUM can maximize your amount of credit and payment history - used together they can rapidly increase your personal credit score.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box className="section-5" bg={'gray.600'} color={'white'} py={10}>
        <Container maxW='5xl'>
          <Stack alignItems={'center'} spacing={4}>
            <Text textAlign={'start'} fontWeight={600} fontSize={'2rem'}>
              Choose from 25- or 50-month account options
            </Text>
            <Text textAlign={'start'} fontWeight={600} fontSize={'1.5rem'}>
              25-Month Business Credit Builder Accounts
            </Text>
            <Card maxW='5xl' p={0} h={'full'} borderColor={'secGray.100'} borderRadius={0}>
              <Grid
                templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
                templateRows={`repeat(5, 1fr)`}
              >
                {bsPriceList?.map((item: any) => (
                  <GridItem display={'flex'} bg={item.bg} alignItems={'center'} justifyContent={'center'} w='100%' h='100%' p={5}>
                    <Stack alignItems={'center'} justifyContent={'center'} spacing={0} color={item.color} fontWeight={600}>
                      {item.sub && <Text fontSize={'12px'}>{item.sub}</Text>}
                      <Text fontSize={'1.25rem'}>{item.label}</Text>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>
            </Card>
          </Stack>
          <Stack alignItems={'start'} spacing={4} mt={10}>
            <Text fontWeight={600} fontSize={'1.025rem'}>
              PROS
            </Text>
            <Box>
              <Text fontSize={'1rem'}>
                + 100% of every monthly payment builds savings and payment history
              </Text>
              <Text fontSize={'1rem'}>
                + 0% interest rate credit builder loan – no interest is charged
              </Text>
              <Text fontSize={'1rem'}>
                + Build 25 months of payment history for a financial tradeline
              </Text>
              <Text fontSize={'1rem'}>
                + Build 25 months of payment history for a financial tradeline
              </Text>
              <Text fontSize={'1rem'}>
                + Shorter payment commitment than 50-month accounts
              </Text>
            </Box>
            <Text fontWeight={600} fontSize={'1.025rem'}>
              CONS
            </Text>
            <Box>
              <Text fontSize={'1rem'}>
                - Higher monthly payments than 50-month accounts
              </Text>
              <Text fontSize={'1rem'}>
                - Builds less payment history than 50-month accounts
              </Text>
            </Box>
          </Stack>
          <Stack alignItems={'center'} spacing={4} mt={20}>
            <Text textAlign={'start'} fontWeight={600} fontSize={'1.5rem'}>
              50-Month Business Credit Builder Accounts
            </Text>
            <Card maxW='5xl' p={0} h={'full'} borderColor={'secGray.100'} borderRadius={0}>
              <Grid
                templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
                templateRows={`repeat(5, 1fr)`}
              >
                {bsPriceList1?.map((item: any) => (
                  <GridItem display={'flex'} bg={item.bg} alignItems={'center'} justifyContent={'center'} w='100%' h='100%' p={5}>
                    <Stack alignItems={'center'} justifyContent={'center'} spacing={0} color={item.color} fontWeight={600}>
                      {item.sub && <Text fontSize={'12px'}>{item.sub}</Text>}
                      <Text fontSize={'1.25rem'}>{item.label}</Text>
                    </Stack>
                  </GridItem>
                ))}
              </Grid>
            </Card>
          </Stack>
          <Stack alignItems={'start'} spacing={4} mt={10}>
            <Text fontWeight={600} fontSize={'1.025rem'}>
              PROS
            </Text>
            <Box>
              <Text fontSize={'1rem'}>
                + 100% of every monthly payment builds savings and payment history
              </Text>
              <Text fontSize={'1rem'}>
                + 0% interest rate credit builder loan - no interest is charged
              </Text>
              <Text fontSize={'1rem'}>
                + Build 50 months of payment history for a financial tradeline
              </Text>
              <Text fontSize={'1rem'}>
                + Build a large amount of credit with a small monthly payment
              </Text>
              <Text fontSize={'1rem'}>
                + Lower monthly payments than 25-month accounts
              </Text>
            </Box>
            <Text fontWeight={600} fontSize={'1.025rem'}>
              CONS
            </Text>
            <Box>
              <Text fontSize={'1rem'}>
                - Longer monthly payment commitment than 25-month accounts
              </Text>
              <Text fontSize={'1rem'}>
                - Builds cash reserves/savings slower than 25-month accounts
              </Text>
            </Box>
          </Stack>
          <Stack alignItems={'center'} mt={16}>
            <Button as={'a'} py={4} px={32} colorScheme={'orange'} href={`${import.meta.env.VITE_PORTAL_URL}/signup?product_option=business`}>{lang.base.button}</Button>
          </Stack>

        </Container>
      </Box>

      <Box className="section-6" bg={'secGray.800'} color={'white'}>
        <Container maxW='7xl'>
          <Stack py={16} px={10} alignItems={'center'} gap={5}>
            <Box textAlign={'center'}>
              <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} me={2}>
                CS Business is the easy and reliable way to establish and build a
                <Text as={'span'} fontSize={{ base: '1.5rem', md: '2.25rem' }} fontWeight={600} color="orange.500" mx={2}>
                  large financial tradeline
                </Text>
                for your company
              </Text>
            </Box>
            <Box my={5} width={'full'} fontSize={'1rem'}>
              <Text mb={3}>There are two types of business credit. It is likely that your company needs both:</Text>
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
            </Box>
            <Box textAlign={'start'} w={'full'} my={5}>
              <Text fontSize={'1rem'}>
                Vendor tradelines are extensions of credit from a merchant or supplier. For example, 2/10 or net 30 terms or paying an invoice.
              </Text>
            </Box>
            <Button as={'a'} py={4} px={32} colorScheme={'whiteAlpha'} href={`https://creditstage010.wpengine.com/business/business-credit-scores/`}>Learn about business credit</Button>
          </Stack>
        </Container>
      </Box>

      <Box className="section-7" bg={'gray.600'} color={'white'}>
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

      <Box className="section-8" bg={'secGray.800'} color={'white'}>
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
        </Container>
      </Box>

      <Box className="section-9 section-contact-us" py={5} bg={'gray.600'} color={'white'}>
        <Container maxW='6xl'>
          <ContactUs color="orange" />
        </Container>
      </Box>
      <Box className="section-10" py={10} color={'white'} bg={'secGray.800'}>
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

export default BusinessDashboard
