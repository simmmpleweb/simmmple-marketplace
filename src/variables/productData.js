import { Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

//Venus Design System PRO
import productVenusDSPRO1 from "assets/img/product/venus-ds-pro/product-venus-ds-pro1.png";
import productVenusDSPRO2 from "assets/img/product/venus-ds-pro/product-venus-ds-pro2-min.png";
import productVenusDSPRO3 from "assets/img/product/venus-ds-pro/product-venus-ds-pro3-min.png";
import productVenusDSPRO4 from "assets/img/product/venus-ds-pro/product-venus-ds-pro4-min.png";
import productVenusDSPRO5 from "assets/img/product/venus-ds-pro/product-venus-ds-pro5-min.png";
import productVenusDSPROMain from "assets/img/product/venus-ds-pro/product-venus-ds-pro-main.png";

//Venus Design System Free
import productVenusDSFree1 from "assets/img/product/venus-ds-free/product-venus-ds-free1.png";
import productVenusDSFree2 from "assets/img/product/venus-ds-free/product-venus-ds-free2.png";
import productVenusDSFree3 from "assets/img/product/venus-ds-free/product-venus-ds-free3.png";
import productVenusDSFreeMain from "assets/img/product/venus-ds-free/product-venus-ds-free-main.png";

//Venus Dashboard Builder PRO
import productVenusDBPRO1 from "assets/img/product/venus-db-pro/product-venus-db-pro1.png";
import productVenusDBPRO2 from "assets/img/product/venus-db-pro/product-venus-db-pro2.png";
import productVenusDBPRO3 from "assets/img/product/venus-db-pro/product-venus-db-pro3.png";
import productVenusDBPRO4 from "assets/img/product/venus-db-pro/product-venus-db-pro4.png";
import productVenusDBPRO5 from "assets/img/product/venus-db-pro/product-venus-db-pro5.png";
import productVenusDBPROMain from "assets/img/product/venus-db-pro/product-venus-db-pro-main.png";

// Venus Dashboard Builder Free
import productVenusDBFree1 from "assets/img/product/venus-db-free/venusDbFree1.png";
import productVenusDBFree2 from "assets/img/product/venus-db-free/venusDbFree2.png";
import productVenusDBFree3 from "assets/img/product/venus-db-free/venusDbFree3.png";
import productVenusDBFree4 from "assets/img/product/venus-db-free/venusDbFree4.png";
import productVenusDBFree5 from "assets/img/product/venus-db-free/venusDbFree5.png";

//Purity UI Dashboard PRO
import productPurityPRO1 from "assets/img/product/purity-pro/product-purity-pro1.png";
import productPurityPRO2 from "assets/img/product/purity-pro/product-purity-pro2.png";
import productPurityPRO3 from "assets/img/product/purity-pro/product-purity-pro3.png";
import productPurityPRO4 from "assets/img/product/purity-pro/product-purity-pro4.png";
import productPurityPROMain from "assets/img/product/purity-pro/product-purity-pro-main.png";

//Purity UI Dashboard Free
import productPurityFree1 from "assets/img/product/purity-free/product-purity-free1.png";
import productPurityFree2 from "assets/img/product/purity-free/product-purity-free2.png";
import productPurityFree3 from "assets/img/product/purity-free/product-purity-free3.png";
import productPurityFree4 from "assets/img/product/purity-free/product-purity-free4.png";
import productPurityFreeMain from "assets/img/product/purity-free/product-purity-free-main.png";

//Uranus Wireframe Kit PRO
import productUranusPRO1 from "assets/img/product/uranus-pro/product-uranus-pro1.png";
import productUranusPRO2 from "assets/img/product/uranus-pro/product-uranus-pro2.png";
import productUranusPRO3 from "assets/img/product/uranus-pro/product-uranus-pro3.png";
import productUranusPRO4 from "assets/img/product/uranus-pro/product-uranus-pro4.png";
import productUranusPRO5 from "assets/img/product/uranus-pro/product-uranus-pro5.png";
import productUranusPROMain from "assets/img/product/uranus-pro/product-uranus-pro-main.png";

//Uranus Wireframe Kit Free
import productUranusFree1 from "assets/img/product/uranus-free/product-uranus-free1.png";
import productUranusFree2 from "assets/img/product/uranus-free/product-uranus-free2.png";
import productUranusFree3 from "assets/img/product/uranus-free/product-uranus-free3.png";
import productUranusFree4 from "assets/img/product/uranus-free/product-uranus-free4.png";
import productUranusFreeMain from "assets/img/product/uranus-free/product-uranus-free-main.png";

//Glassy - Glassmorphism Cards
import productGlassy1 from "assets/img/product/glassy/product-glassy1.png";
import productGlassy2 from "assets/img/product/glassy/product-glassy2.png";
import productGlassy3 from "assets/img/product/glassy/product-glassy3.png";
import productGlassy4 from "assets/img/product/glassy/product-glassy4.png";
import productGlassyMain from "assets/img/product/glassy/product-glassy-main.png";

//Saturn - Headers UI Kit
import productSaturn1 from "assets/img/product/saturn/product-saturn1.png";
import productSaturn2 from "assets/img/product/saturn/product-saturn2.png";
import productSaturn3 from "assets/img/product/saturn/product-saturn3.png";
import productSaturnMain from "assets/img/product/saturn/product-saturn-main.png";


//Task List UI - React
import productTaskList1 from "assets/img/product/tasklist/product-tasklist1.png";
import productTaskList2 from "assets/img/product/tasklist/product-tasklist2.png";
import productTaskList3 from "assets/img/product/tasklist/product-tasklist3.png";
import productTaskListMain from "assets/img/product/tasklist/product-tasklist-main.png";


import IconBox from "components/icons/IconBox";
import { figmaIcon, reactIcon, chakraIcon, bootstrapIcon, adobeXDIcon } from "components/icons/Icons";

export const productData = [
    // Venus Design System PRO
    {
        venusdesignsystempro: {
            tag: "Design Tool",
            title: "Venus Design System PRO",
            images: [
                productVenusDSPRO1,
                productVenusDSPRO2,
                productVenusDSPRO3,
                productVenusDSPRO4,
                productVenusDSPRO5     
            ],
            firstParagraph: {
                title: "Design what you want with less effort at another level!",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                An easy-to-use Design Tool with the most common 2000+ UI/UX
                components states that allows you to design quickly with
                world-class standards out-of-the-box. 🔥
                <br />
                <br />
                This complex, modern, clean design tool will help you reduce hours
                of time wasted wireframing and building UI projects. Venus Design
                System will increase cohesion, collaboration, and focus your
                creativity where it matters! ❤️
              </Text>
            },
            summary: [
                "2000+ Component States",
                "1400+ Google Material",
                "250+ Global Styles for Typography, Colors & Effects",
                "Example Apps & Elements made with Venus",
                "Light/Dark Themes",
                "Variants and Auto-layout V3.0",
                "Full-Form Building Buttons, Text, and Custom Inputs",
                "Responsive, Desktop, Tablet, and Mobile Grids",
                "Desktop, Mobile Web, and Native (native coming soon) Components",
                "Easily Customizable",
                "Various Sized Components",
                "React Library (coming soon)",
                "Free Lifetime Updates",
            ],
            mainImage: productVenusDSPROMain,
            secondParagraph: {
                title: "What type of components comes with Venus Pro?",
                description: [
                    "Buttons, Sliders, Text Inputs, Checkboxes, Radios, Toggles, Increment Stepper, Tabs, Panels, Accordions, Badges, Pagination",
                    "Toast, Tooltips, Modals, Avatars with Text, BG Cards, Popovers, Grids, Positioning, Pricing Cards, Misc Cards, Testimonial Cards, Content Cards",
                    "Calendar, Timeline, Comments, Hero Masks, Blob Masks, Colors System, Credit Cards",
                    "Full Data Visualization: Charts, Graphs, Lists, and Tables",
                    "And many more!"
                ]
            },
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography, Grids Systems",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            price: {
                freelancer: 99,
                team: 159,
                enterprise: 299
            },
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                    <Icon as={figmaIcon} w="15px" h="22px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://www.figma.com/file/WGfCeWMB5HMT65TVIfPOFw/Venus---Design-System-PRO-2021-(Live-Preview)?node-id=414%3A146',
                buy: {
                    freelancer: 'https://simmmple.gumroad.com/l/venus-pro?variant=Freelancer',
                    team: 'https://simmmple.gumroad.com/l/venus-pro?variant=Team+Version',
                    enterprise: 'https://simmmple.gumroad.com/l/venus-pro?variant=Enterprise'
                }
            }
        }
    },

    // Venus Design System Free
    {
            venusdesignsystemfree: {
                tag: "Design Tool",
                title: "Venus Design System Free",
                images: [
                    productVenusDSFree1,
                    productVenusDSFree1,
                    productVenusDSFreeMain,
                    productVenusDSFree2,
                    productVenusDSFree3
                ],
                firstParagraph: {
                    title: "Design what you want with less effort at another level!",
                    description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    An easy-to-use Free Design Tool with the most common 390+ UI/UX components states that allows you to design quickly with world-class standards out-of-the-box. 🔥 
                    <br />
                    <br />
                    This complex, modern, clean design tool will help you reduce hours of time wasted wireframing and building UI projects. Venus Design System will increase cohesion, collaboration, and focus your creativity where it matters! ❤️
                  </Text>
                },
                summary: [
                    "390+ Components States",
                    "Google Material Icons",
                    "70+ Global Styles for Typography, Colors & Effects",
                    "Example Apps & Elements made with Venus",
                    "Light/Dark (Dark in progress) Themes",
                    "Variants and Auto-layout V3.0",
                    "Responsive, Desktop, Tablet, and Mobile Grid",
                    "Desktop, Mobile Web, and Native (native coming soon) Components",
                    "Easily Customizable",
                    "Various Sized Components",
                    "Free Lifetime Updates",
                ],
                mainImage: productVenusDSFreeMain,
                thirdParagraph: {
                    title: "Branding",
                    description: [
                        "Colors, Typography, Gradients",
                        "Spacing, Photography, Grids Systems",
                        "Global Styles, Effects",
                        "Google Material Icons"
                    ]
                },
                fourthParagraph: {
                    title: "100% Customisable",
                    description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
                },
                free: true,
                compatibility: [
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={figmaIcon} w="15px" h="22px" />
                    </IconBox>
                ],
                buttonLinks: {
                    live: 'https://www.figma.com/community/file/980440452947514451',
                    upgrade: '/product/venus-design-system-pro',
                    free: 'https://simmmple.gumroad.com/l/venus-free',
                }
            }
    },

    // Venus Dashboard Builder PRO
    {
        venusdbpro: {
            tag: "Design Tool",
            title: "Venus Dashboard Builder PRO",
            images: [
                productVenusDBPRO1,
                productVenusDBPRO2,
                productVenusDBPRO3,
                productVenusDBPRO4,
                productVenusDBPRO5     
            ],
            firstParagraph: {
                title: "Create awesome dashboards with less effort directly in Figma!",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                The first easy-to-use Dashboard Builder for Figma with more than 400+ widgets/cards that allows you to design dashboards quickly with world-class standards out-of-the-box.
                <br />
                <br />
                Venus - Dashboard Builder is a tool based on Venus Design System. A design system/tool with more than 2000+ Components states, Global Styles and many other cool things! <NavLink to="/product/venus-design-system-pro"><Text as="span" fontWeight="bold" _hover={{textDecoration: "underline"}}>Discover more here→</Text></NavLink><br /><br />
This complex, modern, clean design tool will help you reduce hours of time wasted wireframing and building UI projects. Venus Design System will increase cohesion, collaboration, and focus your creativity where it matters! ❤️
              </Text>
            },
            summary: [
                "400+ Widgets/Cards",
                "30+ Dashboard Examples",
                "10+ Dashboard Structures",
                "Google Material Icons",
                "Light/Dark Themes",
                "Global Styles for Typography, Colors",
                "Examples Dashboards made with Venus",
                "Responsive Auto-layout V3.0",
                "Modular design based on Atomic Design Methodology",
                "Full-Form Building Buttons, Text, and Custom Input",
                "Various Sized Components",
                "Easily Customizable",
                "Free Lifetime Updates",
            ],
            mainImage: productVenusDBPROMain,
            secondParagraph: {
                title: "What type of widgets/cards comes with Venus Dashboard Pro?",
                description: [
                    "X-Large, Large, Medium & Small Data Widgets",
                    "X-Large, Large, Medium & Small Media Widgets",
                    "Large, Medium & Small Misc Widgets",
                    "Large & Medium CTA Widgets",
                    "11 Sidebars Widgets",
                    "And many more!"
                ]
            },
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography, Grids Systems",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            price: {
                freelancer: 59,
                team: 129,
                enterprise: 229
            },
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                    <Icon as={figmaIcon} w="15px" h="22px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://www.figma.com/file/lFbkFkxt7CWerPOoGr1JlG/(Preview)-PRO-Version---Venus-Dashboard-Builder?node-id=102%3A1556',
                buy: {
                    freelancer: 'https://simmmple.gumroad.com/l/vdb-pro?variant=Freelancer+Version',
                    team: 'https://simmmple.gumroad.com/l/vdb-pro?variant=Team+Version',
                    enterprise: 'https://simmmple.gumroad.com/l/vdb-pro?variant=Extended+Version'
                }
            }
        }
    },

    // Venus Dashboard Builder Free
    {
        venusdbfree: {
            tag: "Design Tool",
            title: "Venus Dashboard Builder Free",
            images: [
                productVenusDBFree1,
                productVenusDBFree2,
                productVenusDBFree3,
                productVenusDBFree4,
                productVenusDBFree5
            ],
            firstParagraph: {
                title: "Create awesome dashboards with less effort directly in Figma!",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                The first easy-to-use Dashboard Builder for Figma with more than 25+ widgets/cards that allows you to design dashboards quickly with world-class standards out-of-the-box. 
                <br />
                <br />
                Venus - Dashboard Builder is a tool based on Venus Design System. A design system/tool with more than 2000+ Components states, Global Styles and many other cool things! <NavLink to="/product/venus-design-system-pro"><Text as="span" fontWeight="bold" _hover={{textDecoration: "underline"}}>Discover more here→</Text></NavLink><br /><br />
This complex, modern, clean design tool will help you reduce hours of time wasted wireframing and building UI projects. Venus Design System will increase cohesion, collaboration, and focus your creativity where it matters! ❤️
              </Text>
            },
            summary: [
                "25+ Widgets/Cards",
                "Google Material Icons",
                "Global Styles for Typography, Colors",
                "Examples Dashboards made with Venus",
                "Light/Dark Themes",
                "Responsive Auto-layout V3.0",
                "Modular design based on Atomic Design Methodology",
                "Full-Form Building Buttons, Text, and Custom Input",
                "Easily Customizable",
                "Various Sized Components",
                "Free Lifetime Updates",
            ],
            mainImage: productVenusDBFree5,
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography, Grids Systems",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            free: true,
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                    <Icon as={figmaIcon} w="15px" h="22px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://www.figma.com/community/file/993677252775666442',
                upgrade: '/product/venus-db-pro',
                free: 'https://simmmple.gumroad.com/l/vdb-free',
            }
        }
    },

    // Purity UI Dashboard PRO
    {
            puritydashboardpro: {
                tag: "Dashboard",
                title: "Purity UI Dashboard PRO",
                images: [
                    productPurityPROMain,
                    productPurityPRO1,
                    productPurityPRO2,
                    productPurityPRO3,
                    productPurityPRO4   
                ],
                firstParagraph: {
                    title: "Premium ReactJS Dashboard based on Chakra UI",
                    description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    Most trendiest, complex and innovative Premium Dashboard made by Creative Tim & Simmmple. Check our latest Premium ReactJS Dashboard based on Chakra UI.
                    <br />
                    <br />
                    Designed for those who like modern UI elements and beautiful websites. Made of hundred of elements, designed blocks and fully coded pages, Purity UI Dashboard PRO is ready to help you create stunning websites and webapps.
                    <br />
                    <br />
                    We created many examples for pages like Sign In, Profile and so on. Just choose between a Basic Design, an illustration or a cover and you are good to go!
                    Fully Coded Elements
                    <br />
                    <br />
                    <Text fontSize="24px" color="brand.700" fontWeight="500">Fully Coded Elements</Text>
                    <br />
                    Purity UI Dashboard PRO is built with over 300 frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. All components can take variations in color, which you can easily modify using JSS files and classes. You will save a lot of time going from prototyping to full-functional code because all elements are implemented. This Premium Chakra UI Dashboard is coming with prebuilt design blocks, so the development process is seamless, switching from our pages to the real website is easy to be done.
                  </Text>
                },
                summary: [
                    "300+ Handcrafted Elements",
                    "32 Example Pages",
                    "6+ Customized Plugins",
                    "Premium Support",
                    "Documentation",
                    "Fully Responsive",
                ],
                mainImage: productPurityPRO1,
                thirdParagraph: {
                    title: " ",
                    description: [ ]
                },
                fourthParagraph: {
                    title: "100% Customisable",
                    description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
                },
                price: {
                    freelancer: 69,
                    team: 149,
                    enterprise: 599
                },
                compatibility: [
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={figmaIcon} w="15px" h="22px" />
                    </IconBox>,
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={chakraIcon} w="22px" h="22px" />
                    </IconBox>,
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={reactIcon} w="22px" h="22px" />
                    </IconBox>
                ],
                buttonLinks: {
                    live: 'https://demos.creative-tim.com/purity-ui-dashboard-pro/?ref=simmmple',
                    buy: {
                        freelancer: 'https://www.creative-tim.com/product/purity-ui-dashboard-pro?ref=simmmple',
                        team: 'https://www.creative-tim.com/product/purity-ui-dashboard-pro?ref=simmmple',
                        enterprise: 'https://www.creative-tim.com/product/purity-ui-dashboard-pro?ref=simmmple'
                    }
                }
            }
    },

    // Purity UI Dashboard Free
    {
        puritydashboardfree: {
                tag: "Dashboard",
                title: "Purity UI Dashboard Free",
                images: [
                    productPurityFreeMain,
                    productPurityFree1,
                    productPurityFree2,
                    productPurityFree3,
                    productPurityFree4
                ],
                firstParagraph: {
                    title: "Free ReactJS Dashboard based on Chakra UI",
                    description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    Most trendiest, complex and innovative Free Dashboard made by Creative Tim & Simmmple. Check our latest Free ReactJS Dashboard based on Chakra UI.
                    <br />
                    <br />
                    Designed for those who like modern UI elements and beautiful websites. Made of hundred of elements, designed blocks and fully coded pages, Purity UI Dashboard Free is ready to help you create stunning websites and webapps.
                    <br />
                    <br />
                    We created many examples for pages like Sign In, Profile and so on. Just choose between a Basic Design, an illustration or a cover and you are good to go!
                    Fully Coded Elements
                    <br />
                    <br />
                    <Text fontSize="24px" color="brand.700" fontWeight="500">Fully Coded Elements</Text>
                    <br />
                    Purity UI Dashboard Free is built with over 70 frontend individual elements, like buttons, inputs, navbars, navtabs, cards or alerts, giving you the freedom of choosing and combining. All components can take variations in colour, that you can easily modify using Chakra's style props.
                  </Text>
                },
                summary: [
                    "70+ Handcrafted Elements",
                    "6 Example Pages",
                    "1 Customized Plugins",
                    "Documentation",
                    "Fully Responsive",
                ],
                mainImage: productPurityFree1,
                thirdParagraph: {
                    title: " ",
                    description: [ ]
                },
                fourthParagraph: {
                    title: "100% Customisable",
                    description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
                },
                free: true,
                compatibility: [
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={figmaIcon} w="15px" h="22px" />
                    </IconBox>,
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={chakraIcon} w="22px" h="22px" />
                    </IconBox>,
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={reactIcon} w="22px" h="22px" />
                    </IconBox>
                ],
                buttonLinks: {
                    live: 'https://demos.creative-tim.com/purity-ui-dashboard/?ref=simmmple',
                    upgrade: '/product/purity-dashboard-pro',
                    free: 'https://www.creative-tim.com/product/purity-ui-dashboard?ref=simmmple',
                }
            }
    },

    // Uranus Wireframe Kit PRO
    {
            uranuswireframepro: {
                tag: "Web Tool",
                title: "Uranus Wireframe Kit PRO",
                images: [
                    productUranusPROMain,
                    productUranusPRO1,
                    productUranusPRO2,
                    productUranusPRO3,
                    productUranusPRO4,
                    productUranusPRO5     
                ],
                firstParagraph: {
                    title: "Create awesome websites designs with less effort in a few minutes!",
                    description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    Uranus - Wireframe Kit is an wireframing pack with more than 180+ dark/light ready-to-use web elements/sections. The basement idea of this kit was started from the wireframing time problem.
                    <br />
                    <br />
                    With more than 180+ ready-to-use web elements and some beautifully landing pages, you can finish your big project very soon and very easily.
                    </Text>
                },
                summary: [
                    "180+ Dark/Light ready-to-use sections & UI Elements",
                    "Fully coded on Bootstrap 5",
                    "Google Fonts & Icons",
                    "Light/Dark Themes",
                    "Global Styles for Typography, Colors",
                    "Organized & Clean Layers and Folders",
                    "Easily Customizable",
                    "Free Lifetime Updates",
                ],
                mainImage: productUranusPRO5,
                secondParagraph: {
                    title: " ",
                    description: [ ]
                },
                thirdParagraph: {
                    title: "Branding",
                    description: [
                        "Colors, Typography, Gradients",
                        "Spacing, Photography, Grids Systems",
                        "Global Styles, Effects",
                        "Google Material Icons"
                    ]
                },
                fourthParagraph: {
                    title: "100% Customisable",
                    description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
                },
                price: {
                    freelancer: 69,
                    team: 129,
                    enterprise: 219
                },
                compatibility: [
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={figmaIcon} w="15px" h="22px" />
                    </IconBox>,
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={bootstrapIcon} w="26px" h="26px" />
                    </IconBox>
                ],
                buttonLinks: {
                    live: 'https://www.figma.com/file/bDcEEGqDi8K4taSulPCdrH/Uranus-v1.3---Wireframe-Kit---Preview?node-id=376%3A127',
                    buy: {
                        freelancer: 'https://simmmple.gumroad.com/l/uranus-pro?variant=Freelancer',
                        team: 'https://simmmple.gumroad.com/l/uranus-pro?variant=Team+License',
                        enterprise: 'https://simmmple.gumroad.com/l/uranus-pro?variant=Enterprise'
                    }
                }
            }
    },

    // Uranus Wireframe Kit Free
    {
        uranuswireframefree: {
            tag: "Web Tool",
            title: "Uranus Wireframe Kit Free",
            images: [
                productUranusFreeMain,
                productUranusFree1,
                productUranusFree2,
                productUranusFree3,
                productUranusFree4
            ],
            firstParagraph: {
                title: "Design what you want with less effort at another level!",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    Uranus - Wireframe Kit Free is an wireframing pack with more than 10+ dark/light ready-to-use web elements/sections. The basement idea of this kit was started from the wireframing time problem.
                    <br />
                    <br />
                    With more than 10+ ready-to-use web elements and some beautifully landing pages, you can finish your big project very soon and very easily.
              </Text>
            },
            summary: [
                "10+ Dark/Light ready-to-use sections & UI Elements",
                "Fully coded on Bootstrap 5",
                "Google Fonts & Icons",
                "Light/Dark Themes",
                "Global Styles for Typography, Colors",
                "Organized & Clean Layers and Folders",
                "Easily Customizable",
                "Free Lifetime Updates",
            ],
            mainImage: productUranusFree4,
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography, Grids Systems",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            free: true,
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={figmaIcon} w="15px" h="22px" />
                    </IconBox>,
                    <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={bootstrapIcon} w="26px" h="26px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://www.figma.com/community/file/952964471684238624',
                upgrade: '/product/uranus-wireframe-pro',
                free: 'https://simmmple.gumroad.com/l/uranus-free',
            }
        }
    },
    
    // Glassy - Glassmorphism Cards
    {
        glassycards: {
            tag: "Design Tool",
            title: "Glassy - Glassmorphism Cards",
            images: [
                productGlassyMain,
                productGlassy1,
                productGlassy2,
                productGlassy3,
                productGlassy4
            ],
            firstParagraph: {
                title: "12 Trendy Glassmorphism Cards for your awesome project!",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    Introducing Glassy - a Free set with 12 Trendy Glassmorphism Cards. The coolest trend of the 2020s on 12 awesome Cards! Glassy is the death of all previous attempts of Glassmorphism.
            </Text>
            },
            summary: [
                "Glassmorphism Trend",
                "12 Awesome Cards",
                "Assets Mode (Cards as components)",
                "Global Styles for Colors, Effects & Typography",
                "Easy to use and customize",
                "Organized & Clean Layers and Folders",
            ],
            mainImage: productGlassy3,
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography, Grids Systems",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            free: true,
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={figmaIcon} w="15px" h="22px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://www.figma.com/community/file/964461263114726217',
                upgrade: '',
                free: 'https://simmmple.gumroad.com/l/glassy-cards',
            }
        }
    },

    // Saturn - Headers UI Kit
    {
        saturnuikit: {
            tag: "Design Tool",
            title: "Saturn - Headers UI Kit",
            images: [
                productSaturnMain,
                productSaturnMain,
                productSaturn1,
                productSaturn2,
                productSaturn3
            ],
            firstParagraph: {
                title: "Trendy pack of hero headers with a clean and modern design",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    Saturn Headers UI Kit is a pack of hero headers with a clean and modern design.
            </Text>
            },
            summary: [
                "12 Unique Designs",
                "Easy to use and customize",
                "Organized & Clean Layers and Folders",
                "Google Material Fonts",
            ],
            mainImage: productSaturn1,
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            free: true,
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={adobeXDIcon} w="24px" h="24px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://simmmple.gumroad.com/l/saturn-kit',
                upgrade: '',
                free: 'https://simmmple.gumroad.com/l/saturn-kit',
            }
        }
    },

    // Task List UI - React
    {
        tasklistui: {
            tag: "Design Tool",
            title: "Task List UI - React",
            images: [
                productTaskListMain,
                productTaskListMain,
                productTaskList1,
                productTaskList2,
                productTaskList3
            ],
            firstParagraph: {
                title: "Task List Template App for React!",
                description: <Text fontSize="lg" color="#878CBD" fontWeight="normal" mb="50px">
                    A creative & modern UI Template App that helps you organize your tasks very well.
            </Text>
            },
            summary: [
                "Task List App Template",
                "Easy to use and customize",
                "Organized & Clean Layers and Folders",
                "Google Material Fonts",
            ],
            mainImage: productSaturn1,
            thirdParagraph: {
                title: "Branding",
                description: [
                    "Colors, Typography, Gradients",
                    "Spacing, Photography",
                    "Global Styles, Effects",
                    "Google Material Icons"
                ]
            },
            fourthParagraph: {
                title: "100% Customisable",
                description: <Text color="#878CBD" fontSize="lg" fontWeight="normal">Our products are 100% customisable <Text as="span" fontStyle="italic" fontWeight="bold">- we just give you the ultimate headstart.</Text> Change the colours, container sizes, spacing or anything you like to suit your project and to own the design in every way.</Text>
            },
            free: true,
            compatibility: [
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={adobeXDIcon} w="24px" h="24px" />
                </IconBox>,
                <IconBox w="48px" h="48px" borderRadius="48px" bg="#fff" boxShadow="0px 16px 18px rgba(0, 0, 0, 0.04)">
                        <Icon as={reactIcon} w="24px" h="24px" />
                </IconBox>
            ],
            buttonLinks: {
                live: 'https://simmmple.gumroad.com/l/tasklist-ui',
                upgrade: '',
                free: 'https://simmmple.gumroad.com/l/tasklist-ui',
            }
        }
    },


]