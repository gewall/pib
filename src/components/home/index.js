import React, { useState } from "react";
import {
  Box,
  Text,
  Container,
  Heading,
  Divider,
  FlatList,
  VStack,
  HStack,
  Stack,
  AspectRatio,
  Image,
  Center,
  Spacer,
  Fab,
  Icon,
  QuestionIcon,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const dummy = [
  {
    id: 1,
    judul: "ayayay",
    artikel: "eaqeqwaaa",
    img: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
  },
  {
    id: 2,
    judul: "asdas",
    artikel: "eawdasdfaaa",
    img: "http://via.placeholder.com/250",
  },
  {
    id: 3,
    judul: "ayayasday",
    artikel: "excvdfsgaaaa",
    img: "http://via.placeholder.com/250",
  },
  {
    id: 4,
    judul: "ayaasdyay",
    artikel: "eaagfhgfhaa",
    img: "http://via.placeholder.com/250",
  },
  {
    id: 5,
    judul: "ayasdsdyay",
    artikel: "easadaaa",
    img: "http://via.placeholder.com/250",
  },
  {
    id: 6,
    judul: "ayaywewasday",
    artikel: "eqweqweaaaa",
    img: "http://via.placeholder.com/250",
  },
  {
    id: 7,
    judul: "ayayasdsadaay",
    artikel: "eaadfsdfaa",
    img: "http://via.placeholder.com/250",
  },
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      {/* <MenuBar /> */}
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<QuestionIcon />}
        onPress={() => navigation.navigate("Chat")}
      />
      <ScrollView>
        <Box py={6}>
          <Container w={"100%"} px={"6"}>
            <Heading size={"md"} fontWeight={"light"}>
              CareBaby
            </Heading>
          </Container>
        </Box>
        <Center w={"full"} px={6}>
          <Box
            position={"relative"}
            borderRadius={14}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            backgroundColor={"cyan.300"}
            width={"full"}
            height={"40"}
            p={4}
            overflow={"hidden"}
            shadow={"4"}
          >
            <Box
              position={"absolute"}
              w={250}
              h={250}
              bgColor={"cyan.50"}
              left={0}
              bottom={-100}
              rounded={"full"}
              opacity={0.2}
            />
            <Box
              position={"absolute"}
              w={250}
              h={250}
              bgColor={"cyan.50"}
              right={-50}
              bottom={-150}
              rounded={"full"}
              opacity={0.2}
            />
            <Box w={"full"}>
              <Text fontSize={"sm"}>Rekomendasi untuk Anda.</Text>
              <Divider my={2} bgColor={"cyan.400"} />
              <Heading>Ketahui Gejala Demam Pada Anak.</Heading>
            </Box>
            <Text fontSize={"xs"}>Ketuk Untuk Membaca!.</Text>
          </Box>
        </Center>
        <Container w={"100%"} px={"6"}>
          <Box my={4}>
            <Heading size={"sm"}>Rekomendasi artikel</Heading>
          </Box>
        </Container>
        <Box>
          <FlatList
            data={dummy}
            horizontal
            renderItem={({ item }) => (
              <Box
                shadow={5}
                bgColor={"white"}
                rounded={"md"}
                // minW={"sm"}
                w={"56"}
                maxW={"xs"}
                // h={"sm"}
                m={2}
                overflow="hidden"
              >
                <AspectRatio w={"100%"} ratio={16 / 9}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    alt={item.judul}
                  />
                </AspectRatio>
                <Stack p={4}>
                  <Heading>{item.judul}</Heading>
                  <Text my={2}>{item.artikel.slice(0, 15) + "..."}</Text>
                </Stack>
                <Box p={4}>
                  <Text fontSize={"xs"}>Ketuk untuk membaca!</Text>
                </Box>
              </Box>
            )}
          />
        </Box>
        <Box w={"full"} px={"6"}>
          <Box my={4}>
            <Heading size={"sm"}>Daftar artikel</Heading>
          </Box>
          {dummy.map((item) => (
            <Box key={item.id} bgColor={"white"} w={"full"} shadow={2} mb={2}>
              <HStack px={6} py={4} alignItems={"center"}>
                <VStack>
                  <Heading size={"xs"}>{item.judul}</Heading>
                  <Text>{item.artikel}</Text>
                </VStack>
                <Spacer />

                <Text>{new Date().toISOString().slice(0, 10)}</Text>
              </HStack>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
