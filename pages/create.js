import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import firebase from "../lib/firebase.config";
import { useAuth } from "../hooks/useAuth";

export default function CreateTweetPage() {
  const [content, setContent] = useState("");
  const {user} = useAuth()

  const sendTweet = async () => {
    const tweet = await firebase.firestore().collection("tweets").add({
      content,
      creator: user.email,
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
