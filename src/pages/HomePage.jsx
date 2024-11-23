import React from "react";
import homepage1 from "../assets/icons/homepage1.png";
import homepage2 from "../assets/icons/homepage2.png";

const HomePage = () => {
  return (
    <div>
      {/* 첫 번째 섹션 */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#00081F",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={homepage1}
          alt="말풍선 1"
          style={{
            position: "absolute",
            top: "23%",
            left: "10%",
            width: "22%",
          }}
        />
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          보.. 브류...
        </h1>

        <img
          src={homepage2}
          alt="말풍선 2"
          style={{
            position: "absolute",
            bottom: "22%",
            right: "10%",
            width: "24%",
          }}
        />
      </div>

      {/* 두 번째 섹션 */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#75A8FF",
            fontSize: 48,
            fontFamily: "Pretendard",
            fontWeight: 700,
            lineHeight: "62px",
            wordWrap: "break-word",
          }}
        >
          고용률 62.8%의 시대
          <span
            style={{
              display: "block",
              color: "#C0C6D8",
              fontSize: 17,
              fontWeight: 700,
              lineHeight: "24px",
            }}
          >
            (2024년 기준)
          </span>
        </div>

        <div
          style={{
            color: "#000000",
            fontSize: 48,
            fontFamily: "Pretendard",
            fontWeight: 700,
            lineHeight: "40px",
            marginTop: "20px",
          }}
        >
          자소서부터 막힌 청년들?
        </div>
      </div>
    </div>
  );
};

export default HomePage;
