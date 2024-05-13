"use client";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/**
 * 비빌번호 재설정 전 이메일발송용 화면
 */
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const supabase = createClientComponentClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${location.origin}/resetPassword/inputPassword`,
      });
      console.log(error);
      if (error) {
        setError(error);
          throw error;
      }
      setIsSend(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
        <p>오류가 발생했습니다.</p>
      </div>
    );
  }

  if (isSend) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
        <p>이메일을 발송했습니다.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
      <p>계정에 연결된 이메일주소를 입력해 주세요.</p>
      <form className="pt-10" onSubmit={onSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 md:w-2/3 lg:w-1/2 p-2.5"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일주소"
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 text-center"
          type="submit"
        >
          보내기
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
