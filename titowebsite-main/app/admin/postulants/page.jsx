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

const downloadPdf = () => {
  const pdfurl  ='C:\\fakepath\\Marvin_HOGUET_CV.pdf'

  const link = document.createElement('a');
  link.href = pdfurl;
  link.download = 'Marvin_HOGUET_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


export default async function BasicTable (){
  const {postuler}  = await getPost();   
  

  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
    
    <SectionTitle
      title="Bienvenue sur la page admin"
      paragraph="Vous avez accès en temps réel aux demandes des clients"
      center
      width="635px"
    />
    <div className="container">
    <TableContainer component={Paper}>
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
        {postuler.map((t) => (
            <TableRow
              key={t._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {t.username}
              </TableCell>
              <TableCell >{t.email}</TableCell>
              <TableCell >{t.telephone}</TableCell>
              <TableCell >{t.poste}</TableCell>
              <TableCell >{t.cv}</TableCell>

            </TableRow>
          ))}



        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </section>

  );
}
