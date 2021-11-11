import { Text } from "@chakra-ui/react";

import loopple from "assets/img/apps/loopple.png";
import vdb from "assets/img/apps/vdb.png";
import chakra from "assets/img/apps/chakra.png";

export const apps = [
  {
    image: loopple,
    name: "Loople",
    category: "Dashboard Builder",
    description: (
      <Text color="#878CBD" mb="38px">
        Loopple helps you build dashboards faster and cut out your development
        time.
        <br />
        <br />
        With Loopple, you can save up to 70% less time building your next
        Bootstrap Dashboard easily using drag and drop.
      </Text>
    ),
    link: "https://www.loopple.com/?ref=simmmple",
    
  },
  {
    image: vdb,
    name: "VDB Pro",
    category: "Figma Dashboard Builder",
    description: (
      <Text color="#878CBD" mb="38px">
        Create awesome dashboards with less effort directly in Figma!
        <br />
        <br />
        The first Dashboard Builder for Figma that allows you to design awesome
        dashboards designs. VDB is a Simmmple product.
      </Text>
    ),
    link: "https://www.figma.com/file/lFbkFkxt7CWerPOoGr1JlG/(Preview)-PRO-Version---Venus-Dashboard-Builder?node-id=102%3A1556?ref=simmmple",
  },
  {
    image: chakra,
    name: "Chakra UI",
    category: "ReactJS Framework",
    description: (
      <Text color="#878CBD" mb="38px">
        Chakra UI is a simple, modular and accessible component library that
        gives you the building blocks you need to build React applications.
        <br />
        <br />
        We made the first Chakra UI’s admin dashboard in collaboration with
        Creative Tim.
      </Text>
    ),
    link: "https://chakra-ui.com/?ref=simmmple",
  },
];
