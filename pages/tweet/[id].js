import { TweetComponent } from "../../components/Tweet";
import firebase from "../../lib/firebase.config";

const TweetPage = ({ content, creator, date, id }) => {
  return (
    <TweetComponent content={content} creator={creator} date={date} id={id} />
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const doc = await firebase.firestore().collection("tweets").doc(id).get();
  console.log(doc.data());
  const docdata = { ...doc.data() };

  return {
    props: {
      ...docdata,
      date: JSON.parse(JSON.stringify(docdata.date)),
      id: doc.id,
    },
  };
}

export default TweetPage;
