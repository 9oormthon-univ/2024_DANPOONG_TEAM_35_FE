// import { Navigate } from "react-router-dom";
// import useAuthStore from "./stores/authStore"; // Zustand 스토어 임포트

// export default ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useAuthStore((state) => state.isAuthenticated); // 인증 상태 가져오기

//   if (!isAuthenticated) {
//     // 로그인하지 않았다면 로그인 페이지로 리다이렉트
//     return (
//       <>
//         <Navigate to="/login" />
//       </>
//     );
//   }

//   return children;
// };
