import React, { useEffect, useState } from "react";

export const HomePage = () => {
  return <h1>Page d'accueil</h1>;
};

export const Home = () => {
const [articles, setArticles] = useState([]);
}

//   useEffect(() => {
//     loadUsers();
//   }, []);
//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/article/read");
//     setArticles(result.data);
//   };
//   return (
//     <div className="py-4">
//       <table className="table border shadow">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Code</th>
//             <th scope="col">Titre</th>
//             <th scope="col">Resume</th>
//             <th scope="col">PrixHT</th>
//           </tr>
//         </thead>
//         <tbody>
//           {articles.map((article, index) => (
//             <tr>
//               <th scope="row" key={index}>
//                 {index + 1}
//               </th>
//               <td>{article.code}</td>
//               <td>{article.titre}</td>
//               <td>{article.resume}</td>
//               <td>{article.prixHt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


