// page.js
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { checkout } from "../checkout";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          alt="img"
          className={styles.img}
          src="/vercel.svg"
          width={100}
          height={50}
        />
        <button
          className={styles.button}
          onClick={() => {
            console.log("Button clicked");
            checkout({
              lineItems: [
                { price: "price_1POdw6H4SzESVWGyQTJUVf6z", quantity: 1 },
              ],
            });
          }}
        >
          CLICK HERE FOR PAYMENT
        </button>
      </div>
    </main>
  );
}
