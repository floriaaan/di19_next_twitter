import firebase from "../lib/firebase.config";
import { TweetComponent } from "../components/Tweet";
import { useEffect, useState } from "react";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("tweets")
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        let _tmp = [];
        querySnapshot.forEach((doc) => {
          _tmp.push({ id: doc.id, ...doc.data() });
        });
        setTweets(_tmp);
      });
  }, []);

  return (
    <>
      {tweets.map((el, key) => (
        <TweetComponent {...el} key={key} />
      ))}
    </>
  );
}

// export default function Home({ test }) {
//   return (
//     <div className="flex flex-col space-y-6">
//       <div className="text-3xl font-bold text-gray-500">Twitter Next</div>
//       <div className="">Est-ce que ca fonctionne ?</div>
//       <div>{test?.name || "Non"}</div>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await firebase.firestore().collection("test").doc("test").get();

//   return { props: { test: { ...res.data(), id: res.id } } };
// }
