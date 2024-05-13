"use client"
import { useState } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/**
 *  비밀번호 재설정화면 
 */
const InputPasswordForReset = () => {
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const supabase = createClientComponentClient()
      const { error } = await supabase.auth.updateUser({ password: password });
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
    )
  }
  
  if (isSend) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
          <p>비밀번호를 변경했습니다.</p>
        </div>
    )
  }
  
  return (
    <div className="mx-auto max-w-7xl md:w-1/2 lg:w-1/4 px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
      <p>새 비밀번호를 입력해 주세요.</p>
      <form className="pt-10 text-left" onSubmit={onSubmit}>
        <div>
            <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
            >
            비밀번호 
            </label>
            <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
      </div>
      <div className='pt-5'>
        <label
          htmlFor="passwordConf"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          비밀번호(확인)
        </label>
        <input
          type="password"
          name="passwordConf"
          id="passwordConf"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          value={passwordConf}
          onChange={(e) => setPasswordConf(e.target.value)}
        />
        </div>
        <div className='text-center mt-5'>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center" type="submit">변경하기</button>
        </div>
      </form>
    </div>
  );
}

export default InputPasswordForReset