"use client";

import React, { useState } from 'react';

// 가이드 데이터 정의 (컴포넌트 바깥에 배치하여 렌더링 최적화)
const guides = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: ["민준", "서준", "예준", "도윤", "시우", "주원", "하준", "지호", "지후", "준서", "준우", "현우", "도현", "지훈", "건우", "우진", "선우", "유준", "민재", "현준", "윤우", "서진", "정우", "은우", "지한", "승우", "유찬", "로운", "지안", "시윤", "민규", "태윤", "민혁", "동현", "태민", "진우", "유빈", "승민", "성민", "준영", "현민", "수현", "재윤", "우성", "영준", "도겸", "승준", "승현", "준혁", "준희"][i % 50],
  location: i % 4 === 0 ? "서울 홍대" : i % 4 === 1 ? "서울 경복궁" : i % 4 === 2 ? "서울 북촌" : "서울 명동",
  rating: (4.5 + Math.random() * 0.5).toFixed(1),
}));

export default function Home() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const top10Guides = guides.slice(0, 10);

  return (
    <main className="max-w-7xl mx-auto px-8 pt-10">
      {/* 1. 추천 가이드 섹션 */}
      <section className="py-12 border-b border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">트래블메이트 추천 가이드 TOP 10</h2>
          <div className="flex gap-2">
            <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 3))} className="p-3 border rounded-full hover:bg-gray-100">{"<"}</button>
            <button onClick={() => setCurrentIdx(Math.min(7, currentIdx + 3))} className="p-3 border rounded-full hover:bg-gray-100">{">"}</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {top10Guides.slice(currentIdx, currentIdx + 3).map((g) => (
            <div key={g.id} className="cursor-pointer">
              <div className="bg-gray-200 h-64 rounded-xl mb-3 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${g.id}`} alt={g.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-bold">{g.name} 메이트</p>
              <p className="text-gray-500 text-sm">{g.location}</p>
              <p className="text-sm font-semibold">★ {g.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 인기 코스 섹션 */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-8">지금 가장 인기 있는 투어</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { n: guides[0].name, t: "홍대 투어 4시간" },
            { n: guides[1].name, t: "경복궁 역사 가이드" },
            { n: guides[2].name, t: "북촌 한복체험" },
            { n: guides[3].name, t: "명동 데이트" }
          ].map((c, i) => (
            <div key={i} className="p-5 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-bold">{c.t}</h4>
              <p className="text-sm text-gray-500 mt-1">{c.n} 메이트와 함께</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}