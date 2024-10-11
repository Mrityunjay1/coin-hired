import { Code, Users, Building2, Cog } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-gray-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/footer.png"
                width={150}
                height={150}
                alt="logo"
              />
            </div>
            <p className="text-sm">
              우리는 국가를 넘어 함께 일하는 원격 인재를 채용합니다.
            </p>
            <p className="text-sm font-extrabold">010-0000-0000</p>
            <p className="text-sm font-extrabold">aaaaaa@naver.com</p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Code, text: "해외 개발자 검증 채용" },
              { icon: Users, text: "외국인 관리 채용 (비자발급)" },
              { icon: Building2, text: "한국어 가능 외국인 채용" },
              { icon: Cog, text: "해외 개발자 협업 서비스" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-lg p-4 shadow-md"
              >
                <div className="w-8 h-8 flex items-center justify-center mb-2 rounded-lg bg-gray-100 shadow-md">
                  <item.icon className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-sm font-bold">{item.text}</p>
                <p className="mt-2 text-xs text-blue-600 hover:underline">
                  바로가기
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="font-semibold">상호명</p>
            <p>하이퍼하이어</p>
            <p className="mt-2 font-bold">Hyperhire India Private Limited</p>
          </div>
          <div>
            <p className="font-semibold">대표 CEO</p>
            <p>김정연</p>
            <p className="mt-2 font-bold">Juhyun Kim</p>
          </div>
          <div>
            <p className="font-semibold">사업자등록번호 CIN</p>
            <p className="font-bold">429-86-01957</p>
            <p className="mt-2 font-bold">U74100DL2019PTC356313</p>
          </div>
          <div>
            <p className="font-semibold">주소 ADDRESS</p>
            <p>서울특별시 강남구 테헤란로 4길 29 4층 전체</p>
            <p className="mt-2 font-bold">
              D-123, Street number-11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t font-bold border-gray-200 text-sm">
          © 2023 Hyperhire
        </div>
      </div>
    </footer>
  );
}
