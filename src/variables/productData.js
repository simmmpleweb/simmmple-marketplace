import { Text, Icon } from "@chakra-ui/react";

import productVenusDBPRO1 from "assets/img/product/product-venus-db-pro1.png";
import productVenusDBPRO2 from "assets/img/product/product-venus-db-pro2.png";
import productVenusDBPRO3 from "assets/img/product/product-venus-db-pro3.png";
import productVenusDBPRO4 from "assets/img/product/product-venus-db-pro4.png";
import productVenusDBPRO5 from "assets/img/product/product-venus-db-pro5.png";
import productVenusDBPROMain from "assets/img/product/product-venus-db-pro-main.png";
import IconBox from "components/icons/IconBox";
import { figmaIcon } from "components/icons/Icons";

export const productData = [
    {
        venusdesignsystem: {
            tag: "Design Tool",
            title: "Venus Design System PRO",
            images: [
                productVenusDBPRO1,
                productVenusDBPRO2,
                productVenusDBPRO3,
                productVenusDBPRO4,
                productVenusDBPRO5     
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
            mainImage: productVenusDBPROMain,
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
            ]
        }
    }
]