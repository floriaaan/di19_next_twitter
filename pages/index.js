import firebase from "../lib/firebase.config";

export default function Home({ test }) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-gray-500 font-bold text-3xl">Twitter Next</div>
      <div className="">Est-ce que ca fonctionne ?</div>
      <div>{test?.name || "Non"}</div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await firebase.firestore().collection("test").doc("test").get();

  return { props: { test: { ...res.data(), id: res.id } } };
}
