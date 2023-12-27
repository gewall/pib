import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
  HStack,
  FlatList,
  ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Fuse from "fuse.js";
import { Pressable } from "react-native";
import diagnosa from "../libs/services/penyakit.json";

const ucapan = [
  // ["nama saya", "nama gua", "nama"],
  // ["saya sakit", "sakit"],
  {
    kata: ["nama"],
    jawaban: "hai, salam kenal kakak, ada yang bisa saya bantu?",
  },
  {
    kata: ["sakit"],
    jawaban: "apakah kakak bisa menjelaskan apa keluhan yang dirasakan",
  },
  {
    kata: ["kepala pusing", "kepala sakit", "pusing", "kepala"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["lemas"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["panas"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["menangis"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["rewel"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["bersin"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["tidur"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["sulit"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["batuk"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["berak"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["hijau"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["tai"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["pup"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["bau"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["lendir"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["darah"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["encer"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["mencret"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["ingus"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["makan"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["kurang"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["tenggorokan"],
    jawaban: "Apakah ada keluhan lainnya?",
  },
  {
    kata: ["?"],
    jawaban: "KAMU NANYA?",
  },
  {
    kata: ["asu"],
    jawaban: "KONTOL",
  },
  {
    kata: ["selesai"],
    jawaban: "",
  },
  {
    kata: ["oke"],
    jawaban: "Terimakasih sudah menghubungi kami.",
  },
  {
    kata: ["iya", "tidak"],
    jawaban: "Mohon jelaskan keluhan anda",
  },
];

const Chat = ({ navigation }) => {
  const fuse = new Fuse(ucapan, {
    includeScore: true,
    isCaseSensitive: false,
    // includeMatches: true,
    minMatchCharLength: 4,
    findAllMatches: false,
    threshold: 0,
    location: 0,
    distance: 100,
    ignoreLocation: false,
    keys: ["kata"],
  });

  const fuseDiagnosa = new Fuse(diagnosa, {
    includeScore: true,
    isCaseSensitive: false,
    // includeMatches: true,
    // findAllMatches: true,
    threshold: 0.8,
    location: 0,
    distance: 100,
    ignoreLocation: true,
    keys: ["indikasi"],
  });

  const scrollRef = useRef(null);

  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [indikasi, setIndikasi] = useState([]);

  const [msg, setMsg] = useState([
    { id: 0, msg: "Hai, Ada yang bisa saya bantu?" },
  ]);

  const onSubmit = () => {
    let prediksi = 0;
    const _msg = value;
    //
    // () !== "tidak".toLowerCase());
    if (_msg.toLowerCase() !== "tidak".toLowerCase()) {
      ucapan.forEach((word) => {
        word.kata.forEach((kata) => {
          if (_msg.split(" ").includes(kata) === true) {
            // );
            setMsg([
              ...msg,
              { id: 1, msg: _msg },
              { id: 0, msg: word.jawaban },
            ]);
            setTemp(kata);
            setIndikasi([...indikasi, kata]);
          }
        });
        // if (msg.match(word.kata)) {
        //   );
        // }
      });
    } else {
      diagnosa.forEach((diag) => {
        diag.indikasi.forEach((indi) => {
          indikasi.forEach((_indi) => {
            if (indi === _indi) {
              prediksi++;
              if (prediksi >= 2) {
                setMsg([
                  ...msg,
                  { id: 1, msg: _msg },
                  {
                    id: 0,
                    msg: `Kemungkinan bayi kakak terserang ${diag.diagnosa}`,
                  },
                  {
                    id: 0,
                    msg: `Kami sarankan membaca artikel ini untuk langkah lebih lanjut ${diag.rekomendasi}`,
                  },
                ]);
              } else {
                setMsg([
                  ...msg,
                  {
                    id: 0,
                    msg: `Maaf kami tidak bisa mendeteksi penyakit anda karena informasi yang anda berikan kurang jelas`,
                  },
                ]);
              }
            }
          });
        });
      });
    }
    setValue("");
  };

  const onSubmitFuse = () => {
    const _msg = value;

    const res = _msg.split(" ").map((i) => fuse.search(i));
    // const res = fuse.search(_msg);
    if (_msg.toLocaleLowerCase() === "tidak") {
      const _indikasi = indikasi.join(" ");

      const res = fuseDiagnosa.search(_indikasi);

      const _res =
        res.length > 0
          ? res.reduce((a, b) => {
              return a.score < b.score ? a : b;
            })
          : null;
      console.log(indikasi, res);
      if (_res) {
        setMsg([
          ...msg,
          { id: 1, msg: _msg },
          {
            id: 0,
            msg: `Kemungkinan bayi kakak terserang ${_res.item.diagnosa}`,
          },
          {
            id: 0,
            msg: `Kami sarankan membaca artikel ini untuk langkah lebih lanjut ${_res.item.rekomendasi}`,
          },
          {
            id: 0,
            msg: `Sentuh 2x pesan ini untuk melihat artikel`,
            url: _res.item.rekomendasi,
          },
        ]);
      } else {
        setMsg([
          ...msg,
          { id: 1, msg: _msg },
          {
            id: 0,
            msg: `Maaf kami tidak bisa mendeteksi penyakit anda karena informasi yang anda berikan kurang jelas`,
          },
        ]);
      }
      // console.log(Math.max(...res.map((i) => i.score)));

      // console.log(res);
    } else {
      let ind = [];
      res.forEach((i) => {
        const _res =
          i.length > 0
            ? i.reduce((a, b) => {
                return a.score < b.score ? a : b;
              })
            : null;

        ind.push(_res?.item.kata.toString());
        if (_res) {
          setMsg([
            ...msg,
            { id: 1, msg: _msg },
            { id: 0, msg: _res?.item.jawaban },
          ]);
          console.log(ind);
          setIndikasi([...indikasi, ...ind]);
        } else {
          setMsg([
            ...msg,
            { id: 1, msg: _msg },

            {
              id: 0,
              msg: "Maaf kami belum mempelajari kata yang anda input :(",
            },
          ]);
        }
        // i.forEach((_) => {
        //   if (parseInt(_.score) > 1) {
        //     setMsg([
        //       ...msg,
        //       { id: 1, msg: _msg },
        //       { id: 0, msg: _.item.jawaban },
        //     ]);
        //     setIndikasi([...indikasi, ..._.item.kata]);
        //   } else {
        //     setMsg([
        //       ...msg,
        //       { id: 1, msg: _msg },

        //       {
        //         id: 0,
        //         msg: "Maaf kami belum mempelajari kata yang anda input :(",
        //       },
        //     ]);
        //   }

        //   // if (parseInt(_.score) < 1) {
        //   //   setMsg([
        //   //     ...msg,
        //   //     { id: 1, msg: _msg },
        //   //     { id: 0, msg: _.item.jawaban },
        //   //   ]);
        //   // }
        // });

        if (i.length === 0) {
          setMsg([
            ...msg,
            { id: 1, msg: _msg },

            {
              id: 0,
              msg: "Maaf kami belum mempelajari kata yang anda input :(",
            },
          ]);
        }
      });
    }
    setValue("");
  };

  useEffect(() => {
    scrollRef.current.scrollToEnd({ animated: true });
  }, [msg]);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Box
        position={"absolute"}
        bottom={0}
        bgColor={"white"}
        w={"full"}
        zIndex={999}
      >
        <Input
          size={"lg"}
          w={"full"}
          placeholder={"Tanyakan sesuatu..."}
          onChangeText={setValue}
          value={value}
          InputRightElement={
            <Button onPress={() => onSubmitFuse()}>Kirim</Button>
          }
        />
      </Box>
      <Box px={2} mb={12}>
        <ScrollView ref={scrollRef}>
          {msg.map((item, i) =>
            item.url ? (
              <Pressable
                onPress={() =>
                  navigation.navigate("ArtikelView", { url: item.url })
                }
              >
                <Box
                  my={2}
                  key={i}
                  p={2}
                  bgColor={"white"}
                  alignSelf={item.id === 0 ? "flex-start" : "flex-end"}
                >
                  <Text>{item.msg}</Text>
                </Box>
              </Pressable>
            ) : (
              <Box
                my={2}
                key={i}
                p={2}
                bgColor={"white"}
                alignSelf={item.id === 0 ? "flex-start" : "flex-end"}
              >
                <Text>{item.msg}</Text>
              </Box>
            )
          )}
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default Chat;
