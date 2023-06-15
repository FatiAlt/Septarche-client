import React, { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  return <h1>Page d'accueil</h1>;
};

export const Home = () => {
const [articles, setArticles] = useState([]);


   useEffect(() => {
    loadUsers();
   }, []);
   const loadUsers = async () => {
     const result = await axios.get("http://localhost:8090/api/article");
    setArticles(result.data);

   return (
     <div className="py-4">
       <table className="table border shadow">
         <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">ArticleNumérique</th>
             <th scope="col">Designation</th>
             <th scope="col">format</th>
             <th scope="col">genre</th>
             <th scope="col">PrixHT</th>
             <th scope="col">tva</th>
             <th scope="col">reference</th>
             <th scope="col">resume</th>
             <th scope="col">QuantiteTotal</th>

           </tr>
         </thead>
         <tbody>
           {articles.map((article, index) => (
             <tr>
             <th scope="row" key={index}>
                 {index + 1}
              </th>
               <td>{article.articleNumerique}</td>
              <td>{article.designation}</td>
               <td>{article.resume}</td>
               <td>{article.prixHt}</td>
                <td>{article.format}</td>
                <td>{article.genre}</td>
                <td>{article.tva}</td>
                <td>{article.reference}</td>
                <td>{article.quantiteTotal}</td>




            </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
           };
          }


