"use client";

import React, { useState } from 'react';

// 위와 동일한 guides 데이터를 가져오기 위해 상단에 선언
const guides = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: ["민준", "서준", "예준", "도윤", "시우", "주원", "하준", "지호", "지후", "준서", "준우", "현우", "도현", "지훈", "건우", "우진", "선우", "유준", "민재", "현준", "윤우", "서진", "정우", "은우", "지한", "승우", "유찬", "로운", "지안", "시윤", "민규", "태윤", "민혁", "동현", "태민", "진우", "유빈", "승민", "성민", "준영", "현민", "수현", "재윤", "우성", "영준", "도겸", "승준", "승현", "준혁", "준희"][i % 50],
  location: i % 4 === 0 ? "서울 홍대" : i % 4 === 1 ? "서울 경복궁" : i % 4 === 2 ? "서울 북촌" : "서울 명동",
  rating: (4.5 + Math.random() * 0.5).toFixed(1),
}));

export default function GuidesPage() {
  const [page, setPage] = useState(1);
  const start = (page - 1) * 10;
  const currentGuides = guides.slice(start, start + 10);

  return (
    <main className="max-w-5xl mx-auto px-8 pt-10">
      <h1 className="text-3xl font-bold mb-8">가이드 프로필 목록</h1>
      <div className="grid grid-cols-2 gap-6">
        {currentGuides.map((g) => (
          <div key={g.id} className="flex gap-4 p-4 border rounded-xl">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div>
              <p className="font-bold">{g.name} 메이트</p>
              <p className="text-sm text-gray-500">{g.location}</p>
              <p className="text-sm">★ {g.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-10 mb-10">
        {[1,2,3,4,5].map(p => (
          <button key={p} onClick={() => setPage(p)} className={`px-4 py-2 border rounded ${page === p ? 'bg-black text-white' : ''}`}>
            {p}
          </button>
        ))}
      </div>
    </main>
  );
}