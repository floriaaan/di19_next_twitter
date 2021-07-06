import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./Button";
import firebase from "../lib/firebase.config";
import { useRouter } from "next/router";

export const Layout = ({ children }) => {
  const { user, signinWithGoogle, signout } = useAuth();
  console.log(user);

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const sendTweet = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (content !== "") {
      const tweet = await firebase.firestore().collection("tweets").add({
        content,
        creator: user.uid,
        date: new Date(),
      });
    }

    setLoading(false);
    setContent("");
  };

  const router = useRouter();

  return (
    <div>
      <div
        className="h-screen p-relative"
        style={{ backgroundColor: "#15202b" }}
      >
        <div className="flex justify-center">
          <header className="h-12 h-auto py-4 text-white">
            {/* Navbar (left side) */}
            <div style={{ width: "275px" }}>
              <div
                className="fixed h-screen pr-3 overflow-y-auto"
                style={{ width: "275px" }}
              >
                {/*Logo*/}
                <Link href="/">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 ml-3 text-white"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                  </svg>
                </Link>
                {/* Nav*/}
                <nav className="px-2 mt-5">
                  <Link href="/">
                    <a
                      className={
                        router.pathname === "/"
                          ? "flex items-center px-2 py-2 text-base font-semibold leading-6 text-blue-300 bg-gray-800 rounded-full group"
                          : "flex items-center px-2 py-2 mt-1 text-base font-semibold leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                      }
                    >
                      <svg
                        className="w-6 h-6 mr-4 "
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                        />
                      </svg>
                      Home
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-semibold leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="w-6 h-6 mr-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    Explore
                  </a>
                  {user && (
                    <>
                      <a
                        href="#"
                        className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                      >
                        <svg
                          className="w-6 h-6 mr-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                        Notifications
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                      >
                        <svg
                          className="w-6 h-6 mr-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Messages
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                      >
                        <svg
                          className="w-6 h-6 mr-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        Bookmarks
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                      >
                        <svg
                          className="w-6 h-6 mr-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                        Lists
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                      >
                        <svg
                          className="w-6 h-6 mr-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                      </a>
                    </>
                  )}
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                  >
                    <svg
                      className="w-6 h-6 mr-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    More
                  </a>
                  {/* <button className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500">
                    Tweet
                  </button> */}
                </nav>
                {/* User Menu */}
                <div className="absolute" style={{ bottom: "2rem" }}>
                  <div className="flex flex-shrink-0 px-4 py-3 mt-12 mr-2 rounded-full hover:bg-gray-800">
                    {user ? (
                      <button
                        onClick={signout}
                        className="flex-shrink-0 block group"
                      >
                        <div className="flex items-center">
                          <div>
                            <img
                              className="inline-block w-10 h-10 rounded-full"
                              src={user.photoUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium leading-6 text-white">
                              {user.fullname}
                            </p>
                            <p className="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <button
                        className="flex-shrink-0 block group"
                        onClick={signinWithGoogle}
                      >
                        <div className="flex items-center">
                          <p className="text-base font-medium leading-6 text-white">
                            Sign in with Google
                          </p>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main role="main">
            <div className="flex" style={{ width: "990px" }}>
              <section
                className="w-3/5 border border-gray-800 border-y-0"
                style={{ maxWidth: "600px" }}
              >
                {/*Content (Center)*/}
                <aside>
                  <div className="flex">
                    <div className="flex-1 mx-2">
                      <h2 className="px-4 py-2 text-xl font-semibold text-white">
                        Home
                      </h2>
                    </div>
                    <div className="flex-1 px-4 py-2 mx-2">
                      <a
                        href
                        className="float-right text-2xl font-medium text-white rounded-full hover:bg-gray-800 hover:text-blue-300"
                      >
                        <svg
                          className="w-6 h-6 m-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <g>
                            <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                  {/*middle creat tweet*/}
                  {user && (
                    <form onSubmit={sendTweet}>
                      <div className="flex">
                        <div className="w-10 py-1 m-2">
                          <img
                            className="inline-block w-10 h-10 rounded-full"
                            src={user.photoUrl}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 px-2 pt-2 mt-2">
                          <input
                            className="w-full text-lg font-medium text-gray-400 bg-transparent "
                            placeholder="What's happening?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                          />
                        </div>
                      </div>
                      {/*middle creat tweet below icons*/}
                      <div className="flex">
                        <div className="w-10" />
                        <div className="w-64 px-2">
                          <div className="flex items-center">
                            <div className="flex-1 px-1 py-1 m-2 text-center">
                              <a
                                href="#"
                                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                              >
                                <svg
                                  className="w-6 text-center h-7"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </a>
                            </div>
                            <div className="flex-1 py-2 m-2 text-center">
                              <a
                                href="#"
                                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                              >
                                <svg
                                  className="w-6 text-center h-7"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </a>
                            </div>
                            <div className="flex-1 py-2 m-2 text-center">
                              <a
                                href="#"
                                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                              >
                                <svg
                                  className="w-6 text-center h-7"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                              </a>
                            </div>
                            <div className="flex-1 py-2 m-2 text-center">
                              <a
                                href="#"
                                className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-blue-400 rounded-full group hover:bg-gray-800 hover:text-blue-300"
                              >
                                <svg
                                  className="w-6 text-center h-7"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <button
                            onClick={!loading ? sendTweet : () => {}}
                            className="float-right px-8 py-2 mt-5 mr-8 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500"
                          >
                            {loading ? (
                              <svg
                                className="w-5 h-5 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            ) : (
                              "Tweet"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                  <hr className="border-4 border-gray-800" />
                </aside>
                <ul className="list-none">{children}</ul>
              </section>
              <aside className="w-2/5 h-12 position-relative">
                {/*Aside menu (right side)*/}
                <div style={{ maxWidth: "350px" }}>
                  <div className="fixed h-screen overflow-y-auto">
                    <div className="relative p-5 text-gray-300 w-80">
                      <button type="submit" className="absolute mt-3 ml-4 mr-4">
                        <svg
                          className="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          style={{ enableBackground: "new 0 0 56.966 56.966" }}
                          xmlSpace="preserve"
                          width="512px"
                          height="512px"
                        >
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </button>
                      <input
                        type="search"
                        name="search"
                        placeholder="Search Twitter"
                        className="w-full h-10 px-10 pr-5 text-sm border-0 rounded rounded-full shadow bg-dim-700 focus:outline-none bg-purple-white"
                      />
                    </div>
                    {/*trending tweet section*/}
                    <div className="max-w-sm m-4 overflow-hidden rounded-lg shadow-lg bg-dim-700">
                      <div className="flex">
                        <div className="flex-1 m-2">
                          <h2 className="w-48 px-4 py-2 text-xl font-semibold text-white">
                            CESI trends
                          </h2>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                          <a
                            href
                            className="float-right text-2xl text-white rounded-full hover:bg-gray-800 hover:text-blue-300"
                          >
                            <svg
                              className="w-6 h-6 m-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <hr className="border-gray-800" />
                      {/*first trending tweet*/}
                      <div className="flex">
                        <div className="flex-1">
                          <p className="w-48 px-4 mt-3 ml-2 text-xs text-gray-400">
                            1 . Trending
                          </p>
                          <h2 className="w-48 px-4 ml-2 font-bold text-white">
                            #DI19
                          </h2>
                          <p className="w-48 px-4 mb-3 ml-2 text-xs text-gray-400">
                            5,466 Tweets
                          </p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                          <a
                            href
                            className="float-right text-2xl text-gray-400 rounded-full hover:bg-gray-800 hover:text-blue-300"
                          >
                            <svg
                              className="w-5 h-5 m-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <hr className="border-gray-800" />
                      {/*second trending tweet*/}
                      <div className="flex">
                        <div className="flex-1">
                          <p className="w-48 px-4 mt-3 ml-2 text-xs text-gray-400">
                            2 . Trending
                          </p>
                          <h2 className="w-48 px-4 ml-2 font-bold text-white">
                            #Soutenance
                          </h2>
                          <p className="w-48 px-4 mb-3 ml-2 text-xs text-gray-400">
                            8,464 Tweets
                          </p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                          <a
                            href
                            className="float-right text-2xl text-gray-400 rounded-full hover:bg-gray-800 hover:text-blue-300"
                          >
                            <svg
                              className="w-5 h-5 m-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <hr className="border-gray-800" />
                      {/*third trending tweet*/}
                      <div className="flex">
                        <div className="flex-1">
                          <p className="w-48 px-4 mt-3 ml-2 text-xs text-gray-400">
                            3 . Trending
                          </p>
                          <h2 className="w-48 px-4 ml-2 font-bold text-white">
                            #MerciJ&M
                          </h2>
                          <p className="w-48 px-4 mb-3 ml-2 text-xs text-gray-400">
                            5,586 Tweets
                          </p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                          <a
                            href
                            className="float-right text-2xl text-gray-400 rounded-full hover:bg-gray-800 hover:text-blue-300"
                          >
                            <svg
                              className="w-5 h-5 m-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <hr className="border-gray-800" />
                      {/*forth trending tweet*/}
                      <div className="flex">
                        <div className="flex-1">
                          <p className="w-48 px-4 mt-3 ml-2 text-xs text-gray-400">
                            4 . Trending
                          </p>
                          <h2 className="w-48 px-4 ml-2 font-bold text-white">
                            #floriaaan
                          </h2>
                          <p className="w-48 px-4 mb-3 ml-2 text-xs text-gray-400">
                            9,416 Tweets
                          </p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                          <a
                            href
                            className="float-right text-2xl text-gray-400 rounded-full hover:bg-gray-800 hover:text-blue-300"
                          >
                            <svg
                              className="w-5 h-5 m-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <hr className="border-gray-800" />
                      {/*show more*/}
                      <div className="flex">
                        <div className="flex-1 p-4">
                          <h2 className="w-48 px-4 ml-2 font-bold text-blue-400">
                            Show more
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="flow-root inline m-6">
                      <div className="flex-1">
                        <a href="#">
                          <p className="text-sm font-medium leading-6 text-gray-500">
                            Terms Privacy Policy Cookies Imprint Ads info
                          </p>
                        </a>
                      </div>
                      <div className="flex-2">
                        <p className="text-sm font-medium leading-6 text-gray-600">
                          {" "}
                          © 2020 Twitter, Inc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .overflow-y-auto::-webkit-scrollbar, .overflow-y-scroll::-webkit-scrollbar, .overflow-x-auto::-webkit-scrollbar, .overflow-x::-webkit-scrollbar, .overflow-x-scroll::-webkit-scrollbar, .overflow-y::-webkit-scrollbar, body::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.overflow-y-auto, .overflow-y-scroll, .overflow-x-auto, .overflow-x, .overflow-x-scroll, .overflow-y, body {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n.bg-dim-700 {\n  --bg-opacity: 1;\n  background-color: #192734;\n}\n\nhtml, body {\n  margin: 0;\n  background-color: #15202b;\n}\n\nsvg.paint-icon {\n  fill: currentcolor;\n}\n\n        ",
        }}
      />
    </div>
  );
};

const Navbar = () => {
  const { user, signinWithGoogle, signout } = useAuth();
  return (
    <div className="inline-flex items-center justify-between w-full px-16 py-4 bg-gray-300">
      <Link href="/">
        <Button>Twitter</Button>
      </Link>
      {user ? (
        <span className="inline-flex items-center">
          {user.email} |{" "}
          <Button onClick={signout} className="pl-3">
            Déconnexion
          </Button>
        </span>
      ) : (
        <Button onClick={signinWithGoogle}>Google Sign In</Button>
      )}
    </div>
  );
};
