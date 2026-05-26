import React from 'react';
import { Search, Heart, MessageCircle } from 'lucide-react';

export default function Home() {
  const guides = [
    { id: 1, name: "은주", location: "서울 홍대", price: "50,000", rating: 4.9, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&h=200&fit=crop", recommended: true },
    { id: 2, name: "민수", location: "부산 해운대", price: "45,000", rating: 4.8, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=200&fit=crop", recommended: false },
    { id: 3, name: "Sara", location: "제주도", price: "60,000", rating: 5.0, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=200&fit=crop", recommended: true },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="sticky top-0 z-50 bg-white border-b px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-red-500 font-bold text-2xl tracking-tight">TravelMate</div>
        <div className="flex items-center border rounded-full px-6 py-2 shadow-sm hover:shadow-md transition cursor-pointer gap-4 divide-x">
          <div className="font-semibold text-sm">여행지 입력</div>
          <div className="pl-4 font-semibold text-sm">날짜 추가</div>
          <div className="pl-4 text-gray-500 text-sm">인원 추가</div>
          <div className="bg-red-500 p-2 rounded-full text-white ml-2"><Search size={16} /></div>
        </div>
        <div className="hidden md:block font-semibold text-sm text-gray-600">가이드 등록하기</div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <h2 className="text-2xl font-bold mb-6">트래블메이트 추천 가이드</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <div key={guide.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                <img src={guide.img} alt={guide.name} className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
                <button className="absolute top-3 right-3 text-white/70 hover:text-red-500"><Heart size={24} /></button>
                {guide.recommended && <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">추천</span>}
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{guide.location}</h3>
                <span className="flex items-center text-sm">★ {guide.rating}</span>
              </div>
              <p className="text-gray-500 text-sm">{guide.name} 메이트</p>
              <p className="mt-1 font-semibold">₩{guide.price} <span className="font-normal text-gray-600">/ 시간</span></p>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button className="bg-[#06C755] text-white p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center" title="Line 연동">
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
}