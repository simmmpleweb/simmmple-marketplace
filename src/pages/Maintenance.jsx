import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

// Custom Components

import { SimmmpleLogoWhite } from 'components/icons/Icons';
// Images
import Background from 'assets/img/homepage/Background.png';
import Layout from 'components/layout/Layout';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<Layout>
			<Helmet>
				<title itemprop='name'>
					Free and Premium Stunning UI Kits, Templates, Design Tools and Themes ready-to-use in HTML, CSS, JS,
					React, Bootstrap, NextJS, Figma & Sketch @ Simmmple
				</title>
			</Helmet>
			{/* Hero */}
			<Flex align='center' justify='center' h='100vh' bgImage={Background} bgSize='cover' position='relative'>
				<Flex direction='column' w='1170px' maxW='100%' mx='auto' px={{ base: '26px', xl: '0px' }}>
					<Flex direction='column' mb='54px'>
						<SimmmpleLogoWhite w='45%' h='42px' mb='25px' cursor='pointer' alignSelf='center' />
						<Text
							textAlign='center'
							fontSize={{ base: '29px', md: '48px', lg: '64px' }}
							color='#fff'
							fontWeight='700'
							letterSpacing='-1px'
							lineHeight={{ base: '40px', md: '76px' }}
							mb={{ base: '26px', md: '42px' }}>
							We are making changes to our marketplace! Coming soon!
						</Text>
						<Text
							textAlign='center'
							fontWeight='normal'
							fontSize={{ base: '16px', md: '22px' }}
							lineHeight='28px'
							color='#fff'>
							Premium UI Tools for developers, designers, agencies & startups.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Layout>
	);
};

export default Home;
