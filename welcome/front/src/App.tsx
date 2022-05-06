import React from "react";
import "./App.scss";

function App() {
  const ProjectRenderer: React.FC<{ index: number; projectName: string }> = (props) => {
    return props.index < 0 ? (
      <p
        className="App-subtitle"
        style={{
          left: `calc(max(0px, min(1px, 100vw - 1024px)) * ${30 * props.index})`,
          top: `max(${5 * props.index}vh, ${48 * props.index}px)`,
        }}
      >
        {props.projectName}
      </p>
    ) : (
      <p
        className="App-subtitle"
        style={{
          left: `calc(max(0px, min(1px, 100vw - 1024px)) * ${30 * (props.index + 1.75)})`,
          top: `min(${5 * (props.index + 2.5)}vh, ${48 * (props.index + 1.5)}px)`,
        }}
      >
        {props.projectName}
      </p>
    );
  };

  const projects = [
    "Unityでゲームを作る",
    "DTM練習会",
    "お絵かきプロジェクト",
    "みんなでゲームを作る",
    "3DCG勉強会",
    "Rustを知ろう",
    "競技プログラミング練習会",
    "Principles of Program Analysis 読み会",
  ];

  return (
    <div className="App">
      <div className="App-container">
        <div>
          {projects
            .filter((x, index) => index <= 5)
            .map((x, index) => {
              return <ProjectRenderer key={index} index={index - 6} projectName={x} />;
            })}
        </div>
        <div className="App-title">
          <h1>Webサービス勉強会2022</h1>
        </div>
        <div>
          {projects
            .filter((x, index) => index >= 6)
            .map((x, index) => {
              return <ProjectRenderer key={index} index={index + 1} projectName={x} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
