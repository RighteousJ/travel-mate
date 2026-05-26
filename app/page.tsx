"use client";

import React, { useState } from 'react';

// 1. 데이터 정의 (이 부분은 수정하지 않아도 됩니다)
const guides = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: ["민준", "서준", "예준", "도윤", "시우", "주원", "하준", "지호", "지후", "준서", "준우", "현우", "도현", "지훈", "건우", "우진", "선우", "유준", "민재", "현준", "윤우", "서진", "정우", "은우", "지한", "승우", "유찬", "로운", "지안", "시윤", "민규", "태윤", "민혁", "동현", "태민", "진우", "유빈", "승민", "성민", "준영", "현민", "수현", "재윤", "우성", "영준", "도겸", "승준", "승현", "준혁", "준희"][i % 50],
  location: i % 4 === 0 ? "서울 홍대" : i % 4 === 1 ? "서울 경복궁" : i % 4 === 2 ? "서울 북촌" : "서울 명동",
  rating: (4.5 + Math.random() * 0.5).toFixed(1),
}));

export default function Home() {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 2. 에어비앤비 스타일 헤더 */}
      <header className="border-b px-8 py-4 flex justify-between items-center">
        <div className="text-red-500 font-bold text-2xl">TravelMate</div>
        <div className="border rounded-full px-6 py-2 shadow-sm text-sm">어디로 떠나시나요?</div>
        <div className="font-bold cursor-pointer">≡ 메뉴</div>
      </header>

      {/* 3. 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-2xl font-bold mb-6">트래블메이트 추천 가이드 TOP 10</h2>
        
        {/* 슬라이드 버튼 */}
        <div className="flex gap-2 mb-4">
          <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 3))} className="border p-2 rounded-full">←</button>
          <button onClick={() => setCurrentIdx(Math.min(7, currentIdx + 3))} className="border p-2 rounded-full">→</button>
        </div>

        {/* 가이드 카드 그리드 */}
        <div className="grid grid-cols-3 gap-6">
          {guides.slice(currentIdx, currentIdx + 3).map((g) => (
            <div key={g.id} className="border p-4 rounded-xl shadow-sm">
              <div className="h-40 bg-gray-100 rounded-lg mb-2"></div>
              <p className="font-bold">{g.name} 메이트</p>
              <p className="text-sm text-gray-500">{g.location}</p>
              <p className="text-sm">★ {g.rating}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}