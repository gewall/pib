import React, { useEffect, useState } from "react";
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
  Pressable,
  Flex,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import artikel from "../libs/services/artikel.json";
import diagnosa from "../libs/services/penyakit.json";

const dummy = [
  {
    id: 1,
    judul: "Demam Pada Anak",
    artikel:
      "Anak yang demam adalah salah satu penyebab kekhawatiran orangtua. Namun pada sebagian besar kasus, terutama apabila anak tidak memiliki penyakit lain, kenaikan suhu tubuh hanyalah pertanda bahwa sistem kekebalan tubuh anak sedang melawan infeksi yang umum.",
    img: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1654487693/attached_image/demam-pada-anak.jpg",
    url: "https://www.docdoc.com/id/info/condition/anak-dengan-demam",
  },
];

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FF5252" }}>
      {/* <MenuBar /> */}
      {/* <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<QuestionIcon />}
        onPress={() => navigation.navigate("Chat")}
      /> */}
      <ScrollView>
        <Box py={6}>
          <Container w={"100%"} px={"6"}>
            <Heading size={"lg"} fontWeight={"light"} color={"white"}>
              CareBaby
            </Heading>
          </Container>
        </Box>
        {/* <Center w={"full"} px={6}>
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
        </Center> */}
        <Box bgColor={"white"} borderTopRadius={"3xl"} pt={8} flex={1}>
          <Box px={"6"} w={"full"}>
            <Box my={2}>
              <Heading size={"md"} color={"dark.200"}>
                Fitur Pengguna
              </Heading>
            </Box>
            <Stack flex={1} direction={"row"}>
              <Pressable onPress={() => navigation.navigate("Chat")}>
                <HStack
                  space={2}
                  px={4}
                  py={4}
                  rounded={"lg"}
                  flex={1}
                  borderWidth={1}
                  borderColor={"dark.600"}
                >
                  <Image
                    rounded={"md"}
                    source={{
                      uri: "https://img.freepik.com/free-vector/chatbot-artificial-intelligence-abstract-concept-illustration_335657-3723.jpg?w=2000",
                    }}
                    alt={"chat bot"}
                    size={"sm"}
                  />
                  <Center>
                    <Heading size={"sm"} color={"dark.300"}>
                      ChatBot
                    </Heading>
                  </Center>
                </HStack>
              </Pressable>
            </Stack>
          </Box>

          <Box px={"6"} w={"full"} mt={4}>
            <Box my={2}>
              <Heading size={"md"} color={"dark.200"}>
                Database Aplikasi
              </Heading>
            </Box>
            <Stack flex={1} space={4}>
              <Pressable>
                <HStack
                  space={2}
                  px={4}
                  py={4}
                  rounded={"lg"}
                  flex={1}
                  borderWidth={1}
                  borderColor={"dark.600"}
                >
                  <Center bgColor={"#B39DDB"} px={4} py={2} rounded={"md"}>
                    <Heading color={"white"}>{diagnosa.length}</Heading>
                  </Center>
                  <Center>
                    <Text fontSize={"md"} color={"dark.300"}>
                      Indikasi Penyakit
                    </Text>
                  </Center>
                </HStack>
              </Pressable>
              <Pressable>
                <HStack
                  space={2}
                  px={4}
                  py={4}
                  rounded={"lg"}
                  flex={1}
                  borderWidth={1}
                  borderColor={"dark.600"}
                >
                  <Center bgColor={"#FF5252"} px={4} py={2} rounded={"md"}>
                    <Heading color={"white"}>{artikel.length}</Heading>
                  </Center>
                  <Center>
                    <Text fontSize={"md"} color={"dark.300"}>
                      Artikel Tersimpan
                    </Text>
                  </Center>
                </HStack>
              </Pressable>
            </Stack>
          </Box>

          <Box w={"full"} mt={4}>
            <Box my={2} px={6}>
              <Heading size={"md"} color={"dark.200"}>
                Daftar Artikel
              </Heading>
            </Box>
            {artikel.map((item) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("ArtikelView", { url: item.url })
                }
              >
                <Box
                  key={item.id}
                  bgColor={"white"}
                  w={"full"}
                  borderBottomColor="dark.700"
                  borderBottomWidth={1}
                  px={6}
                  py={4}
                >
                  <HStack space={4}>
                    <AspectRatio height={100} ratio={4 / 4}>
                      <Image
                        rounded={"md"}
                        source={{
                          uri: item.img,
                        }}
                        alt={item.judul}
                      />
                    </AspectRatio>
                    <HStack alignItems={"flex-start"} flex={1}>
                      <VStack flex={5}>
                        <Heading size={"xs"}>{item.judul}</Heading>
                        <Text>{item.artikel.slice(0, 150) + "..."}</Text>
                      </VStack>
                      <Spacer />

                      {/* <Text flex={1}>
                        {new Date().toISOString().slice(0, 10)}
                      </Text> */}
                    </HStack>
                  </HStack>
                </Box>
              </Pressable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
