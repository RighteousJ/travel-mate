"use client";

import React from 'react';
// ... 나머지 코드들
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* --- 1. 상단 헤더: 언어(지구본) & 메뉴 버튼 --- */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-red-500 tracking-tighter">
            TravelMate
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Image src="/globe.svg" alt="Language" width={24} height={24} />
            </button>

            <div className="relative group">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              
              <div className="absolute right-0 w-56 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 hidden group-hover:block animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Menu</div>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm">가이드 프로필 목록</button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm">나의 프로필</button>
                <div className="border-t my-1"></div>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm font-medium text-blue-600">나의 예약 확인</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 space-y-24">
        {/* --- 2. 인기 코스 섹션 --- */}
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-2">🔥 인기 코스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-3">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">코스 샘플 {i}</div>
                </div>
                <p className="text-sm text-gray-500">서울 · 야경 투어 · 4시간</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. TravelMate 추천 가이드 --- */}
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-8">트래블메이트 추천 가이드</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image src="/next.svg" alt="Guide" fill className="object-cover bg-slate-50" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">서울 홍대</h3>
                  <p className="text-sm text-gray-500 italic">은주 메이트</p>
                  <p className="font-bold mt-1">₩50,000 <span className="text-xs font-normal text-gray-400">/ 시간</span></p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold">⭐ 4.9</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. 고객 후기 (흐르는 슬라이드) --- */}
        <section className="bg-gray-50 py-16 overflow-hidden border-y">
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <h2 className="text-2xl font-extrabold">고객 후기</h2>
          </div>
          <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="inline-block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[300px]">
                <p className="text-gray-700 leading-relaxed italic">
                  "가이드님 덕분에 인생 첫 부산 여행이 너무 완벽했습니다! {i}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">User</div>
                  <span className="text-sm font-semibold text-gray-400">익명 고객님</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- 5. 플로팅 버튼 (위챗 & 라인) --- */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-14 h-14 bg-[#06C755] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative">
          <span className="absolute right-16 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LINE 상담</span>
          <Image src="/file.svg" alt="LINE" width={28} height={28} className="invert" />
        </button>
        <button className="w-14 h-14 bg-[#07C160] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative">
          <span className="absolute right-16 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">WeChat 상담</span>
          <Image src="/window.svg" alt="WeChat" width={28} height={28} className="invert" />
        </button>
      </div>

      {/* --- 6. 하단 푸터 (가이드 등록하기) --- */}
      <footer className="bg-gray-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-4">함께 여행을 이끌어갈 메이트를 찾습니다</h2>
          <button className="px-10 py-4 bg-red-500 text-white rounded-full font-extrabold text-lg hover:bg-red-600 transition-colors shadow-lg">
            가이드 등록하기
          </button>
          <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2026 TravelMate. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}