import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionItem, AccordionButton, Box, AccordionPanel } from "@chakra-ui/react";

const BaseAccordion = ({ items, align = 'start', color = 'lime' }: { items: any, align?: string, color?: string }) => {
  return (
    <Accordion allowMultiple>
      {items?.map((item: any, index: number) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton py={6} _hover={{ bg: 'transparent', color: `${color}.500` }}>
                  <Box as='span' flex='1' textAlign='left' fontSize={'1.25rem'} fontWeight={600}>
                    {item.title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display={align === 'center' ? 'flex' : 'block'} flexDir={'column'} alignItems={align} justifyContent={align} dangerouslySetInnerHTML={{ __html: item.description }}>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default BaseAccordion;
