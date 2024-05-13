import { Dispatch, SetStateAction } from "react";
import Link from 'next/link';

export default function SignInForm(props: {
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { showModal } = props;
  return (
    <form action="/auth/login" method="post" className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          이메일주소
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@example.com"
          required
        />
      </div>
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
        />
      </div>
      <div className="text-right">
        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={`${location.origin}/resetPassword`} onClick={() => showModal(false)}>비밀번호 분실</Link>
      </div>
      <div>
        <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          로그인 
        </button>
      </div>
    </form>
  );
}