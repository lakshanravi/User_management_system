import {TableContainer,Paper,TableHead,Table,TableCell,TableRow,TableBody} from "@mui/material";

const UsersTable = ({rows,selectedUser,deleteUser}) =>{

  return (
//props ek ain krl kelinma methenta rows kyl daannath pulkuwn
// material ui wlin table ekk daagmu

<TableContainer component={Paper}>
    {/* paper component dammama table ek lesiyen hsuruwnnn puluwn */}

    <Table>
      <TableHead>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
{/* me yt inline if ekk damme .array eke data nthnm mkut wdin nthuw thiynna */}


      {rows.length > 0 ? rows.map(row => (
          <TableRow key={row.id} sx={{'&:last-child td,last-child th' : {border:0}}}>
            <TableCell component='th' scope="row">{row.id}</TableCell>
            <TableCell component='th' scope="row">{row.name}</TableCell>
            <TableCell>
              <button
                sx={{margin: '0px 10px'}}
                onClick={()=>selectedUser({id:row.id,name:row.name})}>
                  Update
              </button>
              <button
                sx={{margin: '0px 10px'}}
                onClick={()=>{deleteUser({id:row.id})}}>
                  Delete
              </button>
            </TableCell>
          </TableRow>

      )):(
        <TableRow  sx={{'&:last-child td,last-child th' : {border:0}}}>
            <TableCell component='th' scope="row">No Data</TableCell>
        </TableRow>

      )
      }
      {/* uda me rows kyn ek pass krnnne user page eke idn(user details tyna array ekk e) user detaiols dan me table eke body ekt enw
      map function ek gnne ara array ek transform krgnn wge.500 paarak unth add krnn puluwn ethoot array ekt(loop wenw)*/}
{/* 
      key ekk denw data wl deferent bw penwnna.row.id kynne ara array eke id ek gnne */}
      </TableBody>
    </Table>

</TableContainer>

);
}
export default UsersTable;