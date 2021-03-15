import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../src/stylesUpdated.module.css";

function Notes() {
  const router = useRouter();
  const id = 2;

  const notes = new Array(15).fill(1).map((element, index) => {
    return {
      id: index,
      title: `Note: ${index}`,
    };
  });
  return (
    <div>
      <h1 className={styles.red}>Note index path</h1>
      <button
        onClick={(event) => {
          router.push("/");
        }}
      >
        Click me to go home
      </button>

      <button
        onClick={(event) => {
          router.push("/notes/[id]", `/notes/${id}`);
        }}
      >
        Click me to go the most special note
      </button>

      <h1>Notes</h1>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a>
                <strong>{note.title}</strong>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;
