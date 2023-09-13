"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SectionTitle from '@/components/Common/SectionTitle';


const getPost = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/postuler", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch post");
      }

      return res.json();
    } catch (error) {
      console.log("Error loading posts: ", error);
    }
  };


const deletePost = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/postuler/${id}`, {
            method: "DELETE",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to delete post");
        }

        return res.json();
    } catch (error) {
        console.log("Error deleting post: ", error);
    }
};







export default async function BasicTable (){
  const {postuler}  = await getPost();





  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">

    <SectionTitle
      title="Bienvenue sur la page admin"
      paragraph="Voici la listes des postulants"
      center
      width="635px"
    />

    <div className="container">
    <TableContainer className="bg-white shadow-md rounded my-6">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom Complet</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Téléphone</TableCell>
            <TableCell >Poste</TableCell>
            <TableCell >CV</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
<style jsx>{`
    .bg-red-500 {
        background-color: #f56565;
        
    }
    .bg-red-700 {
        background-color: #c53030;
    }
    .bg-black {
        background-color: #000;
    }
    
    `}</style>
        {postuler.map((t) => (
            <TableRow className="hover:bg-gray-100 cursor-pointer transition-all duration-150 ease-in-out border-b border-gray-200"
              key={t._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  scope="row">
                {t.username}
              </TableCell>
              <TableCell >{t.email}</TableCell>
              <TableCell >{t.telephone}</TableCell>
              <TableCell >{t.poste}</TableCell>
              <TableCell >{t.cv}</TableCell>
                <TableCell > <button onClick={() => deletePost(t._id)}  className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded border-2">
                    Supprimer
                </button></TableCell>
            </TableRow>

          ))}




      </TableBody>
      </Table>
    </TableContainer>

    </div>
    </section>

  );
}
