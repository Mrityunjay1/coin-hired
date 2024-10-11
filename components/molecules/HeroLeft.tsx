"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroLeft() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);

  useEffect(() => {
    // Show title after a short delay
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 100); // Adjust the delay as needed

    // Show subtitle after title
    const subtitleTimer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 600); // Delay for subtitle appearance after title
    const timer = setTimeout(() => {
      setItemsVisible(true);
    }, 500);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center max-w-[600px]">
      <Image
        src={"/images/chat.png"}
        alt="chat"
        width={100}
        height={100}
        className="mb-4"
      />
      {titleVisible && (
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4 fade-in-up">
          최고의 실력을 가진 외국인 인재를 찾고 계신가요?
        </h1>
      )}
      {subtitleVisible && (
        <p className="text-2xl text-white mb-6 fade-in-up">
          법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
        </p>
      )}
      <p className="text-lg text-white mb-6">개발자가 필요하신가요?</p>
      <div
        className={`flex items-center justify-between space-x-4 ${
          itemsVisible ? "fade-in" : "opacity-0"
        }`}
      >
        <div>
          <Separator className="my-4" />
          <p className="text-lg text-white font-semibold">평균 월 120만원</p>
          <p className="text-base text-white">
            임금을 해당 국가를 기준으로 계산합니다.
          </p>
        </div>
        <div>
          <Separator className="my-4" />
          <p className="text-lg text-white font-semibold">평균 월 120만원</p>
          <p className="text-base text-white">
            임금을 해당 국가를 기준으로 계산합니다.
          </p>
        </div>

        <div>
          <Separator className="my-4" />
          <p className="text-lg text-white font-semibold">평균 월 120만원</p>
          <p className="text-base text-white">
            임금을 해당 국가를 기준으로 계산합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
