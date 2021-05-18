import Head from "next/head";
import styles from "../styles/contact.module.css";
import Header from "../components/header";
import Background from "../components/background";
import Scroll from "../components/scroll";

import { useState } from "react";
import Router from "next/router";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "お問い合わせ",
    honeypot: "",
    message: "",
    replyTo: "@",
    accessKey: process.env.access_key,
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push("/success");
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <>
      <Head>
        <title>contactページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Background title="contact" />
      <Scroll />

      <div className={styles.gridContainer}>
        <p>{response.message}</p>
        <div>
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            onSubmit={handleSubmit}
          >
            <table className={styles.formTable}>
              <tbody>
                <tr>
                  <th className={styles.th}>name</th>
                  <td className={styles.td}>
                    <input
                      type="text"
                      placeholder="例）山田 太郎"
                      name="name"
                      size="60"
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </td>
                </tr>
                <tr>
                  <th className={styles.th}>mail</th>
                  <td className={styles.td}>
                    <input
                      type="email"
                      placeholder="メールアドレス"
                      name="email"
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </td>
                </tr>
                <tr>
                  <th className={styles.th}>Your Message</th>
                  <td className={styles.td}>
                    <textarea
                      placeholder="お問い合わせ内容"
                      name="message"
                      onChange={handleChange}
                      required
                      className={styles.textarea}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.buttonWrapper}>

            <button type="submit" className={styles.button}>
              送信
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
