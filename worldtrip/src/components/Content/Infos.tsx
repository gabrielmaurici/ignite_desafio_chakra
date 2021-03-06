import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Infos() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          50
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          60
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          27
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cidades +100
        </Text>
      </Flex>

    </Flex>
  )
}