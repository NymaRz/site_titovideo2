import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SectionTitle from '@/components/Common/SectionTitle';

const getMessages = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "GET",
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading messages: ", error);
    }
  };

export default async function BasicTable (){
  const {message}  = await getMessages();   
  console.log(message);

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
            <TableCell >Messages</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {message.map((t) => (
            <TableRow
              key={t._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {t.fullname}
              </TableCell>
              <TableCell >{t.email}</TableCell>
              <TableCell >{t.message}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </section>
  );
}
