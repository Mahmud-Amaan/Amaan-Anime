"use server";

import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const respone = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await respone.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
