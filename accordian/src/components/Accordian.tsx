import { useEffect, useState } from "react";
import "./Accordian.css";

export default function Accordian() {
  //state
  const [array, setArray] = useState([
    {
      id: 1,
      title: "accordian 1",
      show: false,
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1.",
    },
    {
      id: 2,
      title: "accordian 2",
      show: false,
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts2.",
    },
    {
      id: 3,
      title: "accordian 3",
      show: false,
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts3.",
    },
    {
      id: 4,
      title: "accordian 4",
      show: false,
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts4.",
    },
    {
      id: 5,
      title: "accordian 5",
      show: false,
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts5.",
    },
  ]);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

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
                <div className="accordion-body p-3 border-top">
                  {i.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
