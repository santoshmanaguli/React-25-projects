import { useEffect, useState } from "react";

export default function Accordian() {
  const [array, setArray] = useState([
    {
      id: 1,
      title: "accordian 1",
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1.",
    },
    {
      id: 1,
      title: "accordian 1",
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1.",
    },
    {
      id: 1,
      title: "accordian 1",
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1.",
    },
    {
      id: 1,
      title: "accordian 1",
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1.",
    },
    {
      id: 1,
      title: "accordian 1",
      desc: "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts1.",
    },
  ]);

  return <div className="container"></div>;
}
