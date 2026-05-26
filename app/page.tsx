"use client";

import React, { useState } from 'react';

// 데이터 정의는 그대로 유지
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
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
      {/* 1 & 3. 추천 가이드 섹션 - 에어비앤비 스타일 */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">트래블메이트 추천 가이드 TOP 10</h2>
          <div className="flex gap-3">
            <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 3))} className="w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100 flex items-center justify-center">{"<"}</button>
            <button onClick={() => setCurrentIdx(Math.min(7, currentIdx + 3))} className="w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100 flex items-center justify-center">{">"}</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {top10Guides.slice(currentIdx, currentIdx + 3).map((g) => (
            <div key={g.id} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${g.id}`} alt={g.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{g.name} 메이트</h3>
                <span className="font-semibold">★ {g.rating}</span>
              </div>
              <p className="text-gray-500">{g.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 인기 코스 섹션 - 깔끔한 카드 스타일 */}
      <section>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">지금 가장 인기 있는 투어</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: guides[0].name, title: "홍대 투어 4시간" },
            { name: guides[1].name, title: "경복궁 역사 가이드" },
            { name: guides[2].name, title: "북촌 한복체험" },
            { name: guides[3].name, title: "명동 데이트" }
          ].map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2">{c.title}</h3>
              <p className="text-gray-600">인기 가이드 <span className="font-bold text-black">{c.name}</span>와 함께</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}