"use client";

import React, { useState } from 'react';

// 동일한 가이드 데이터 (실제 프로젝트에선 별도 파일로 분리 추천)
const guides = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: ["민준", "서준", "예준", "도윤", "시우", "주원", "하준", "지호", "지후", "준서", "준우", "현우", "도현", "지훈", "건우", "우진", "선우", "유준", "민재", "현준", "윤우", "서진", "정우", "은우", "지한", "승우", "유찬", "로운", "지안", "시윤", "민규", "태윤", "민혁", "동현", "태민", "진우", "유빈", "승민", "성민", "준영", "현민", "수현", "재윤", "우성", "영준", "도겸", "승준", "승현", "준혁", "준희"][i % 50],
  location: i % 4 === 0 ? "서울 홍대" : i % 4 === 1 ? "서울 경복궁" : i % 4 === 2 ? "서울 북촌" : "서울 명동",
  rating: (4.5 + Math.random() * 0.5).toFixed(1),
}));

export default function GuideList() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = 5;

  const currentGuides = guides.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <main className="pt-20 px-4 max-w-5xl mx-auto pb-20">
      <h1 className="text-3xl font-bold mb-8">가이드 프로필 목록</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentGuides.map((g) => (
          <div key={g.id} className="border p-4 rounded-lg flex items-center justify-between">
            <div>
              <div className="font-bold text-lg">{g.name} 메이트</div>
              <div className="text-gray-600">{g.location}</div>
            </div>
            <div className="text-red-500 font-bold">★ {g.rating}</div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5].map((p) => (
          <button 
            key={p} 
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded ${page === p ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {p}
          </button>
        ))}
      </div>
    </main>
  );
}