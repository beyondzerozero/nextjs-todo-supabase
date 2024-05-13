"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

/**
 * 로그인후 마이페이지
 */
const MyPage = () => {
  const supabase = createClientComponentClient();
  useEffect(() => {
    async function getData() {
      const { data } = await supabase.auth.getSession();
      console.log(data);
      // ...
    }
    getData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
      <h1 className="text-2xl font-bold">로그인을 성공했습니다.</h1>
      <div className="pt-10">
        <form action="/auth/logout" method="post">
          <button
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            로그아웃
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
