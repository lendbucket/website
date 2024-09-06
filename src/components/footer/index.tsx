import { Box, Container, Flex, SimpleGrid, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { footers, businessFooters, getCopyRight } from '@/utils'
import lang from '@/snippet/en.json'
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize={'md'} color={'white'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  const [items, setItems] = useState(footers);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/business')) {
      setItems(businessFooters)
    } else {
      setItems(footers)
    }
  }, [location]);

  return (
    <VStack textAlign={'center'} bg={'secGray.800'}>
      <Container maxW='8xl'>
        <VStack w={'full'} color={'gray.400'} borderTop={'1px solid'} borderColor={'gray.600'} divider={<StackDivider borderColor={'gray.600'} />}>
          <Box w={'full'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              {items?.map((footer: any, index: number) => (
                <Stack key={index} align={'flex-start'}>
                  <ListHeader>{footer.title}</ListHeader>
                  {footer?.items?.map((item: any, i: number) => (
                    <Box key={i} as="a" href={item.path} textAlign={'start'}>
                      {item.label}
                    </Box>
                  ))}
                </Stack>
              ))}
            </SimpleGrid>
          </Box>
          <Stack spacing={5} py={10}>
            <Text fontSize={'sm'} textAlign={'start'}>
              Account holders must be at least 18 years old and a citizen of the United States or permanent resident with a valid social security number. Applicants for accounts are subject to verification of identity. A valid bank account or debit card account are required for payment. All loans are subject to consumer report review and approval.
              CreditBolt is NOT a credit repair service and does not remove negative credit history from your credit profile. Disclaimer: Credit profile improvement is not guaranteed. Changes in your credit score reflect individually specific financial behavior and history. Failure to make minimum required loan payments on-time may result in your loan payment(s) being reported as delinquent to credit bureaus which may negatively impact your credit profile.
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
              Testimonial Disclaimer: Individual results may vary. Unique experiences and past performance for individuals do not guarantee future results for other individuals. Testimonials may not be representative of all individuals and certain individuals may have inferior results than indicated in testimonials.
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
              *Instal: With a $28 monthly payment, a loan of $1,010 for 48 months at an annual percentage rate of 15.61% would yield a total payout of $1,010 at the end of the term.
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
              *CS MAX: With a $49 monthly payment, a loan of $2,500 for 60 months at an annual percentage rate of 6.99% would yield a total payout of $ 2,500 at the end of the term.
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
              *Magnum: With a $30 monthly payment, a loan of $2000 for 120 months at an annual percentage rate of 13.44% would yield a total payout of $ 2000 at the end of the term.
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
            *All ratings as of March 31, 2020
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
              CreditBolt® is a registered trademark of Austin Capital Bank SSB. FICO® is a registered Trademark of Fair Isaac Corporation. Equifax® and Paynet® are registered trademarks of Equifax, Inc.
            </Text>
            <Text fontSize={'sm'} textAlign={'start'}>
              Austin Capital Bank SSB. Member FDIC. Equal Housing Lender. Fort Knox Bank and Fortknox.Bank are trademarks of Austin Capital Bank.
            </Text>
          </Stack>
          <Flex py={10} w={'full'}>
            <Text fontSize={'sm'} textAlign={'start'}>
              {getCopyRight(lang.copyright)}
            </Text>
          </Flex>
        </VStack>
      </Container>
    </VStack>
  );
}
