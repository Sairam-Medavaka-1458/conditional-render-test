import "./conditionalRendering.css";
import { useEffect, useState } from "react";

const ConditionalRendering = () => {
  const [state, setState] = useState(0);

  const btnHdr = [
    { btnKey: 0, btnName: "Why React?" },
    { btnKey: 1, btnName: "Core Features" },
    { btnKey: 2, btnName: "Related Resources" },
  ];

  const btnCnt = [
    [
      { content: "React is extremely popular" },
      { content: "It makes building complex, interactive UIs a breeze" },
      { content: "It's powerful & flexible" },
      { content: "It has a very active and versatile ecosystem" },
    ],
    [
      { content: "Components, JSX & Props" },
      { content: "State" },
      { content: "Hooks (e.g., useEffect())" },
      { content: "Dynamic rendering" },
    ],
    [
      { content: "Official web page (react.dev)" },
      { content: "Next.js (Fullstack framework)" },
      { content: "React Native (build native mobile apps with React)" },
    ],
  ];

  const onClickBtn = (key) => {
    setState(key);
  };

  return (
    <div className="cnd-rndr-bg pt-5">
      <div className="ms-4 d-flex align-items-center">
        <img
          src="https://uploads.codesandbox.io/uploads/user/f936fea6-2b4e-4931-abcb-845582fe82ba/aHSf-react-logo-xs.png"
          className="cnd-rndr-react-logo me-4"
          alt="react logo"
        />
        <div>
          <h1 className="cnd-rndr-text-color">React JS</h1>
          <p className="cnd-rndr-text-color">
            i.e., using the React library for rendering the UI
          </p>
        </div>
      </div>

      <div className="ms-4">
        {btnHdr.map((eachItem) => (
          <button
            key={eachItem.btnKey}
            className={`${
              eachItem.btnKey === state
                ? "cnd-rndr-btn cnd-rndr-btn-active"
                : "cnd-rndr-btn"
            }`}
            onClick={() => onClickBtn(eachItem.btnKey)}
          >
            {eachItem.btnName}
          </button>
        ))}
      </div>

      <ul className="cnd-rndr-btn-cnt-container ms-4 pt-3">
        {btnCnt[state].map((eachItem) => (
          <li className="cnd-rndr-btn-list-items mb-3">{eachItem.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionalRendering;
