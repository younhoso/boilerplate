"use client";
import { ReactNode } from "react";
import reactDom from "react-dom";

export default function ModalProvider({ children }: { children: ReactNode }) {
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.querySelector("#modalPortal") as Element;
  if (!node) return null;
  return reactDom.createPortal(children, node);
}

/**
 * 사용예시 코드
 * export default function Page() {
 *  return (
 *     <>
 *       <h1>페이지 내용</h1>
 *       <ModalProvider>
 *         <MyModalContent /> //모달 내부에서 보일 템플릿(컴포넌트)작성
 *       </ModalProvider>
 *     </>
 *   );
 * }
 */