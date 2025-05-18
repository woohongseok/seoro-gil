import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
        <div className="flex flex-col max-w-7xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 my-8">
          <div className="text-center mb-8">
            <Image
              className="mb-4 mx-auto"
              src="/logo.svg"
              alt="서로길 로고"
              width={180}
              height={60}
              priority
            />
            <h1 className="text-4xl font-bold my-2 text-gray-800 dark:text-white">
              서로길
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              함께 성장하는 로드맵 플랫폼
            </p>
          </div>

          <div className="max-w-md w-full mx-auto p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요"
                className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-base transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-base transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white"
              />
              <div className="text-right mt-2 text-sm">
                <Link
                  href="/forgot-password"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
            </div>

            <button className="w-full py-3 rounded-lg bg-blue-500 text-white text-base font-semibold cursor-pointer transition hover:bg-blue-600">
              로그인
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
              <span className="px-4 text-sm text-gray-500 dark:text-gray-400">
                또는
              </span>
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <button className="flex justify-center items-center gap-2 py-3 border border-gray-300 rounded-lg text-base cursor-pointer transition bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Image
                  src="/icons/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Google로 계속하기
              </button>
              <button className="flex justify-center items-center gap-2 py-3 rounded-lg text-base cursor-pointer transition bg-gray-800 text-white border-none hover:bg-gray-900">
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
                GitHub로 계속하기
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
              <span>아직 계정이 없으신가요?</span>
              <Link
                href="/register"
                className="ml-2 text-blue-500 font-semibold no-underline hover:underline"
              >
                회원가입
              </Link>
            </div>
          </div>

          <div className="flex justify-between mt-12 py-6 flex-col md:flex-row gap-8 md:gap-0">
            <div className="flex-1 text-center px-4">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">
                로드맵 공유
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                다양한 개발 경로와 경험을 다른 개발자들과 공유하세요
              </p>
            </div>
            <div className="flex-1 text-center px-4">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">
                함께 성장
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                혼자가 아닌 함께, 서로 응원하며 목표를 달성해요
              </p>
            </div>
            <div className="flex-1 text-center px-4">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">
                목표 달성
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                구체적인 로드맵으로 목표 달성의 길을 명확히 해보세요
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center p-6 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm flex-wrap">
        <p>
          © 2025 서로길 (SeoroGil) |{' '}
          <Link
            href="/terms"
            className="text-gray-600 dark:text-gray-300 mx-2 hover:underline"
          >
            이용약관
          </Link>{' '}
          |{' '}
          <Link
            href="/privacy"
            className="text-gray-600 dark:text-gray-300 mx-2 hover:underline"
          >
            개인정보처리방침
          </Link>
        </p>
      </footer>
    </div>
  );
}
