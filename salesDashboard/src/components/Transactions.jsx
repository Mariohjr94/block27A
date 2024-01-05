import mockTransactions from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';



const Transactions = () => {
 
    const [transaction, setTransactions] = useState([]);
   
    useEffect(() => {
        const allTransactions = mockTransactions.map((singleTransaction, index) => {
        return <div key={index}>
            <Typography variant="body1" gutterBottom>
                Transaction ID: {singleTransaction.txId}
                </Typography>
                <Typography variant="body2">
                User: {singleTransaction.user}, Date: {singleTransaction.date}, Cost: {singleTransaction.cost}
            </Typography>
        </div>
    });
    setTransactions(allTransactions);       
    }, []);
     console.log(transaction);
  return (
    <Card>
      <CardActionArea>
        <CardContent className='transactions'>
          <Typography variant="body2" color="text.secondary">
            All Transactions
          </Typography>
         {transaction}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default Transactions;



