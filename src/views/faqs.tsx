import { Box, Button, Container, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { faqs } from "@/utils/faq";
import BaseAccordion from "@/components/common/BaseAccordion";
import Card from '@/components/card/Card';

function Faqs() {
  return (
    <>
      <Box className="section-2 section-fico">
        <Container maxW='5xl'>
          <Stack py={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>Find your answer</Text>
          </Stack>
          <Stack py={5} alignItems={'center'} gap={5}>
            <Tabs variant='unstyled' isFitted>
              <TabList maxW={'5xl'}>
                {faqs?.map((data: any, i: number) => (<Tab key={i} w={'5xl'} fontSize={'1.025rem'} fontWeight={600}>{data.label}</Tab>))}
              </TabList>
              <TabIndicator mt='-1.5px' height='2px' bg='lime.500' borderRadius='1px' />
              <TabPanels maxW={'5xl'} py={10}>
                {faqs?.map((data: any, i: number) => (
                  <TabPanel key={i}>
                    <Card p={10}>
                      <Text fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight={600} textAlign={'start'} color={'lime.500'} pb={10}>{data.label}</Text>
                      <BaseAccordion items={data.items} align={'center'} />
                    </Card>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Stack>

          <Stack py={10} alignItems={'center'} gap={5}>
            <Text fontSize={{ base: '1.25rem', md: '2rem' }} fontWeight={600} textAlign={'center'}>Still Need Help?</Text>
            <Button as={'a'} py={4} px={24} variant={'outline'} colorScheme={'gray'} href={'/contact-us'}>Contact Us</Button>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Faqs
