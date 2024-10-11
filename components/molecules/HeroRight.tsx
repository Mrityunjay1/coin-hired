"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const profiles = [
  {
    name: "Abhishek Gupta",
    subtitle: "마케팅 • 2y+",
    buttons: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
  },
  {
    name: "Sarah Johnson",
    subtitle: "디자인 • 3y+",
    buttons: [
      "UI/UX 디자인",
      "그래픽 디자인",
      "브랜드 아이덴티티",
      "일러스트레이션",
    ],
  },
  {
    name: "David Lee",
    subtitle: "개발 • 5y+",
    buttons: [
      "프론트엔드 개발",
      "백엔드 개발",
      "API 통합",
      "데이터베이스 설계",
    ],
  },
  {
    name: "Emily Chen",
    subtitle: "마케팅 • 4y+",
    buttons: ["SEO 최적화", "이메일 마케팅", "콘텐츠 전략", "소셜 미디어 관리"],
  },
  {
    name: "Michael Kim",
    subtitle: "영업 • 3y+",
    buttons: ["고객 관계 관리", "협상 전략", "영업 프레젠테이션", "시장 분석"],
  },
];

export default function HeroRight() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? profiles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === profiles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {profiles.map((profile, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            const isActive = index === currentIndex;

            return (
              <Card
                key={index}
                className={`absolute transition-all duration-300 ease-in-out flex flex-col
                  h-[300px] w-[180px] md:h-[400px] md:w-[200px] ${
                    isActive ? "z-20 opacity-100" : "z-10 opacity-50"
                  }`}
                style={{
                  transform: `translateX(${offset * 60}%) scale(${
                    1 - absOffset * 0.2
                  }) rotateY(${offset * 45}deg)`,
                  // Only use window.innerWidth if the component is rendered on the client
                  display:
                    isActive || (isClient && window.innerWidth >= 768)
                      ? "flex"
                      : "none",
                }}
              >
                <CardHeader className="text-white p-4 md:p-6 flex-shrink-0">
                  <div className="flex items-center justify-center mb-4">
                    <Avatar className="h-12 w-12 md:h-16 md:w-16">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-center text-black mb-2">
                    {profile.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                    <p className="text-sm font-medium text-blue-500">
                      {profile.subtitle}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-2 md:p-4 flex-grow overflow-hidden">
                  <div className="flex flex-wrap justify-center gap-2">
                    {profile.buttons.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Button
          variant={"ghost"}
          onClick={goToPrevious}
          className="absolute left-[10%] top-1/2 -translate-y-1/2 z-30  hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 focus:outline-none"
          aria-label="Previous profile"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Button>
        <Button
          variant={"ghost"}
          onClick={goToNext}
          className="absolute right-[10%] top-1/2 -translate-y-1/2 z-30  hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 focus:outline-none"
          aria-label="Next profile"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </Button>
      </div>
    </div>
  );
}
