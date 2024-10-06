"use client";
import { getIsIndo } from "@/utils/data";
import CardFunfact from "./CardFunfact";

const FunFact3 = () => {
  const lang = getIsIndo();
  return (
    <>
      <CardFunfact
        title="1728 WBTb"
        desc={
          lang
            ? "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi telah menetapkan sebanyak 1728 Warisan Budaya Takbenda (WBTb) Indonesia sejak tahun 2013 hingga 2022"
            : "The Ministry of Education, Culture, Research and Technology has designated 1728 Indonesian Intangible Cultural Heritage (WBTb) from 2013 to 2022."
        }
      />
      <CardFunfact
        title={lang ? "11.622 Budaya" : "11.622 Cultures"}
        desc={
          lang
            ? "Per November 2022, terdapat 11.622 warisan budaya yang dicatat dan 1.728 di antaranya telah ditetapkan oleh Kementerian Pendidikan dan Kebudayaan Indonesia."
            : "As of November 2022, there are 11,622 recorded cultural heritages and 1,728 of them have been designated by the Indonesian Ministry of Education and Culture."
        }
      />
      <CardFunfact
        title={lang ? "Peringkat ke-39 sedunia" : "39th in the world"}
        desc={
          lang
            ? "Kekayaan budaya Indonesia mengantarkan negara Indonesia menempati peringkat ke-39 sedunia dalam 'World Cultural Heritage' versi 'World Economic Forum' (WEF)."
            : "Indonesia's cultural wealth has led the country to be ranked 39th in the world in the 'World Cultural Heritage' by the 'World Economic Forum' (WEF)."
        }
      />
    </>
  );
};

export default FunFact3;
