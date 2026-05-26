"use client";

import React, { useState } from 'react';

// 가이드 데이터 50명 정의
const guides = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: ["민준", "서준", "예준", "도윤", "시우", "주원", "하준", "지호", "지후", "준서", "준우", "현우", "도현", "지훈", "건우", "우진", "선우", "유준", "민재", "현준", "윤우", "서진", "정우", "은우", "지한", "승우", "유찬", "로운", "지안", "시윤", "민규", "태윤", "민혁", "동현", "태민", "진우", "유빈", "승민", "성민", "준영", "현민", "수현", "재윤", "우성", "영준", "도겸", "승준", "승현", "준혁", "준희"][i % 50],
  location: i % 4 === 0 ? "서울 홍대" : i % 4 === 1 ? "서울 경복궁" : i % 4 === 2 ? "서울 북촌" : "서울 명동",
  rating: (4.5 + Math.random() * 0.5).toFixed(1),
  price: (40000 + (i % 5) * 5000).toLocaleString(),
}));

export default function Home() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const top10Guides = guides.slice(0, 10);

  return (
    <main className="pt-20 pb-10">
      {/* 1 & 3. 추천 가이드 슬라이더 */}
      <section className="px-4 max-w-5xl mx-auto mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">트래블메이트 추천 가이드 TOP 10</h2>
          <div className="flex gap-2">
            <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 3))} className="p-2 border rounded-full">{"<"}</button>
            <button onClick={() => setCurrentIdx(Math.min(7, currentIdx + 3))} className="p-2 border rounded-full">{">"}</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {top10Guides.slice(currentIdx, currentIdx + 3).map((g) => (
            <div key={g.id} className="border p-4 rounded-lg shadow-sm">
              <div className="font-bold">{g.name} 메이트</div>
              <div className="text-sm text-gray-500">{g.location}</div>
              <div className="text-red-500 font-bold">★ {g.rating}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 인기 코스 상세화 */}
      <section className="px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">지금 가장 인기 있는 투어</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: guides[0].name, title: "홍대 투어 4시간" },
            { name: guides[1].name, title: "경복궁 역사 가이드" },
            { name: guides[2].name, title: "북촌 한복체험" },
            { name: guides[3].name, title: "명동 데이트" }
          ].map((c, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg">{c.name}와 함께하는 {c.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}