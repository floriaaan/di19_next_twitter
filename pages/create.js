import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import firebase from "../lib/firebase.config";

export default function CreateTweetPage() {
  const [content, setContent] = useState("");

  const sendTweet = async () => {
    const tweet = await firebase.firestore().collection("tweets").add({
      content,
      creator: "test",
      date: new Date(),
    });
  };

  return (
    <div className="flex flex-col p-5 space-y-3">
      <label>
        Contenu du tweet
        <Input
          placeholder="Contenu"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </label>
      <Button onClick={sendTweet}>Envoyer</Button>
    </div>
  );
}
