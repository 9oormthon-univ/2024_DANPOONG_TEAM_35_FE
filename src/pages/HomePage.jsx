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
        {/* 왼쪽 말풍선 */}
        <img
          src={homepage1}
          alt="말풍선 1"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "30%",
          }}
        />

        {/* 중앙 텍스트 */}
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

        {/* 오른쪽 말풍선 */}
        <img
          src={homepage2}
          alt="말풍선 2"
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "30%",
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
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {/* 상단 텍스트 */}
        <h2
          style={{
            color: "#75A8FF",
            fontSize: "55px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          고용률 62.8%의 시대
          <span
            style={{
              color: "#C0C6D8",
              fontSize: "17px",
              fontWeight: "700",
              marginLeft: "10px",
            }}
          >
            (2024년 기준)
          </span>
        </h2>
        <h3
          style={{
            color: "#000",
            fontSize: "33px",
            fontWeight: "700",
            marginBottom: "100px",
          }}
        >
          자소서부터 막힌 청년들?
        </h3>

        {/* 네모 박스 섹션 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
            padding: "50px",
          }}
        >
          {/* 첫 번째 박스 */}
          <div style={{ position: "relative", width: "320px" }}>
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#246BEB",
                color: "#FFFFFF",
                borderRadius: "8px",
                padding: "20px",
                fontSize: "18px",
                fontWeight: "600",
                width: "280px",
              }}
            >
              자소서 작성으로 낭비되는 시간
            </div>
            <div
              style={{
                background: "#F4F8FF",
                border: "2px solid #75A8FF",
                borderRadius: "10px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "#6B6B6B",
                }}
              >
                자소서 작성에 소요되는 시간
              </p>
              <p
                style={{
                  fontSize: "32px",
                  color: "#246BEB",
                  fontWeight: "700",
                }}
              >
                평균 256 시간
              </p>
            </div>
          </div>

          {/* 두 번째 박스 */}
          <div style={{ position: "relative", width: "320px" }}>
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#246BEB",
                color: "#FFFFFF",
                borderRadius: "8px",
                padding: "20px",
                fontSize: "18px",
                fontWeight: "600",
                width: "280px",
              }}
            >
              자소서 작성으로 낭비되는 비용
            </div>
            <div
              style={{
                background: "#F4F8FF",
                border: "2px solid #75A8FF",
                borderRadius: "10px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "20px", color: "#6B6B6B" }}>
                취업사이트 · 첨삭 비용
              </p>
              <p
                style={{
                  fontSize: "32px",
                  color: "#246BEB",
                  fontWeight: "700",
                }}
              >
                평균 130만원
              </p>
            </div>
          </div>

          {/* 세 번째 박스 */}
          <div style={{ position: "relative", width: "320px" }}>
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#246BEB",
                color: "#FFFFFF",
                borderRadius: "8px",
                padding: "20px",
                fontSize: "18px",
                fontWeight: "600",
                width: "280px",
              }}
            >
              자소서 작성 관련 고민
            </div>
            <div
              style={{
                background: "#F4F8FF",
                border: "2px solid #75A8FF",
                borderRadius: "10px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "20px", color: "#6B6B6B" }}>
                자소서 작성에 어려움
              </p>
              <p
                style={{
                  fontSize: "32px",
                  color: "#246BEB",
                  fontWeight: "700",
                }}
              >
                92.5%
              </p>
            </div>
          </div>
        </div>

        {/* 하단 출처 */}
        <div
          style={{
            marginTop: "24px",
            color: "#C0C6D8",
            fontSize: "14px",
          }}
        >
          출처: 2023 사람인 설문조사, NBRI 조사 결과
        </div>
      </div>
    </div>
  );
};

export default HomePage;
