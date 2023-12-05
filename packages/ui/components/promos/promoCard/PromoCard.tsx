// Global
import { Card, CardBody, Center, HStack, Heading, Hide, Image, Link, Stack, Text } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';
import { PromoCardImage, PromoCardProps, SimplePromoCardProps } from './types';

const PromoCardImage = ({ img }: PromoCardImage): JSX.Element => (
  <Image
    src={img.src}
    alt={img.alt || ''}
    objectFit="cover"
    maxW={{ base: '100%', md: '400px' }}

    //priority={true}
  />
);

export const PromoCard = ({ title, description, img, link, isImageLeft = true }: PromoCardProps): JSX.Element => (
  <Center>
    <Card direction={{ base: 'column', md: 'row' }} overflow="hidden" variant="outlineRaised" maxW={'container.md'}>
      {isImageLeft && <PromoCardImage img={img} />}

      <Stack>
        <CardBody display={'flex'} justifyContent={'space-between'} flexDirection={'column'} alignItems={'left'}>
          <Heading as={'h4'} size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          {!!link && (
            <HStack as={'span'} mt={2}>
              <Link as={NextLink} href={link.href} fontWeight={'semibold'}>
                {link.text}
              </Link>
              <Icon path={mdiArrowRight} size={0.8} />
            </HStack>
          )}
        </CardBody>
      </Stack>
      {!isImageLeft && (
        <Hide below="md">
          <PromoCardImage img={img} />
        </Hide>
      )}
    </Card>
  </Center>
);

export const Promo = ({ title, description, linkText, linkHref, imageSource, imageAlt, className, isImageLeft }: SimplePromoCardProps): JSX.Element => {
  const data: PromoCardProps = {
    title: title,
    description: description,
    img: {
      src: imageSource,
      alt: imageAlt ? imageAlt : title,
    },
    link: {
      href: linkHref,
      text: linkText,
    },
    className: className,
    isImageLeft: isImageLeft,
  };

  return <PromoCard {...data} />;
};
