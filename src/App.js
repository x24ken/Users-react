import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "にしけん",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  mail: "12345@example.com",
  phone: "000-0000-9999",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
