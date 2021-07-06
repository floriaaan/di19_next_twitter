import { Button } from "../components/Button";
import firebase from "../lib/firebase.config";
import Link from "next/link"
import { TweetComponent } from "../components/Tweet";
import { useAuth } from "../hooks/useAuth";

export default function Home({ tweets = [] }) {
  const {user} = useAuth();
  console.log(user)
  return (
    <div className="flex flex-col p-12 space-y-3">
      {tweets.map((el) => (
        <TweetComponent {...el} />
      ))}
      <Link href="/create">
        <Button className="mt-4">Créer un tweet</Button>
      </Link>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let _tmp = [];
  await firebase
    .firestore()
    .collection("tweets")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        _tmp.push({ id: doc.id, ...doc.data() });
      });
    });

  return { props: { tweets: JSON.parse(JSON.stringify(_tmp)) } };
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
