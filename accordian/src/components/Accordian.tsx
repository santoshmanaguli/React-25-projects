import { useEffect, useState } from "react";
import "./Accordian.css";

interface Accordian {
  id: Number;
  desc: String;
  show: boolean;
  title: String;
}

export default function Accordian() {
  //state
  const [array, setArray] = useState<Accordian[]>([
    {
      id: 1,
      title: "Wiki Content",
      show: false,
      desc: "Wiki content refers to content contained in an article that a Wikipedian created or is naturally existent1. Wiki is sometimes used on a page to visually or encyclopedically improve the article's value1. A content page is a page with encyclopedic value1.A wiki engine is a form of a content management system that differs from other web-based systems such as blog software2. The content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users2.",
    },
    {
      id: 2,
      title: "Describe UI",
      show: false,
      desc: "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.",
    },
    {
      id: 3,
      title: "Your First Component",
      show: false,
      desc: "React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. Here is a Gallery component rendering three Profile components:",
    },
    {
      id: 4,
      title: "Importing and Exporting Component",
      show: false,
      desc: "You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file:",
    },
    {
      id: 5,
      title: "Writing markup with JSX",
      show: false,
      desc: "Each React component is a JavaScript function that may contain some markup that React renders into the browser.",
    },
  ]);
  const [enableMultiSelect, setEnableMultiSelect] = useState<boolean>(false);

  useEffect(() => {
    //resetting the array when button toggle
    const tempArray = array.map((i) => {
      return { ...i, show: false };
    });
    setArray(tempArray);
  }, [enableMultiSelect]);

  //functions
  function handleClick(id: number) {
    if (enableMultiSelect) {
      //multiselect logic
      const tempArr = array.map((i) => {
        if (i.id == id) return { ...i, show: !i.show };
        return i;
      });
      setArray(tempArr);
    } else {
      //singleselect logic
      const tempArr = array.map((i) => {
        if (i.id == id) {
          return { ...i, show: !i.show };
        } else {
          return { ...i, show: false };
        }
      });
      setArray(tempArr);
    }
  }

  return (
    <div className="container my-4">
      <div className="text-center mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setEnableMultiSelect(!enableMultiSelect)}
        >
          {enableMultiSelect ? "MultiSelect" : "Single Select"}
        </button>
      </div>
      <div className="accordion">
        {array.map((i) => {
          return (
            <div key={i.id} className="accordion-item mb-2 border">
              <div
                className="accordion-header cursor p-3 d-flex justify-content-between align-items-center"
                onClick={() => handleClick(i.id)}
              >
                <span>{i.title}</span>
                <span>{i.show ? "-" : "+"}</span>
              </div>
              {i.show && (
                <div className="accordion-body p-3 border-top">{i.desc}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
